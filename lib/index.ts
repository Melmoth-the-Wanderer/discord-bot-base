import { DeepL } from './deepl/deepl';
import { Logger } from './logger/logger';
import { LogLevel } from './logger/model';

export * from './logger/public-api';

export interface BotToolConfig {
  logLevel: LogLevel;
  deepLAuthKey: string;
}

export class BotTools {
  private static _logger: typeof Logger | null = null;
  private static _deepL: typeof DeepL | null = null;

  public static get logger(): typeof Logger {
    if (!BotTools._logger) {
      throw new Error('Logger not initialized');
    }
    return BotTools._logger;
  }

  public static get deepL(): typeof DeepL {
    if (!BotTools._deepL) {
      throw new Error('DeepL not initialized');
    }
    return BotTools._deepL;
  }

  public static initialize(config: BotToolConfig): void {
    Logger.configure(config.logLevel);
    BotTools._logger = Logger;

    DeepL.configure(config.deepLAuthKey);
    BotTools._deepL = DeepL;
  }
}
