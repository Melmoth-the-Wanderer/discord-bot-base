import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { BotToolConfig } from '../index';
import { _Logger } from '../logger/logger';
import { definitions } from './model.gen';

export class _Database {
  private supabase: SupabaseClient;

  constructor(private readonly config: BotToolConfig['database'], private readonly logger: _Logger) {
    this.supabase = createClient(config.url, config.key);
    this.logger.verbose('Supabase client connected.');
  }

  public async insert<T>(tableName: keyof definitions, value: Partial<T>[]): Promise<T[]> {
    const response = await this.supabase.from<T>(tableName).insert(value);
    if (response.error) {
      return Promise.reject(response.error.message);
    }
    return Promise.resolve(response.body);
  }

  public async selectAll<T>(tableName: keyof definitions): Promise<T[]> {
    const response = await this.supabase.from<T>(tableName).select();
    if (response.error) {
      return Promise.reject(response.error.message);
    } else {
      this.logger.verbose('Supabase Features selected: ', response.body);
      return Promise.resolve(response.body);
    }
  }

  public async selectBy<T>(tableName: keyof definitions, constraint: keyof T, value: T[keyof T]): Promise<T[]> {
    const response = await this.supabase.from<T>(tableName).select().eq(constraint, value);
    if (response.error) {
      return Promise.reject(response.error.message);
    } else {
      this.logger.verbose('Supabase translations selected: ', response.body);
      const rows = response.body;

      return Promise.resolve(rows);
    }
  }
}
