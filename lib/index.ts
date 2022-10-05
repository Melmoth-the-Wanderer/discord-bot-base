import { _DeepL } from './deepl/deepl';
import { _Logger } from './logger/logger';
import { LogLevel } from './logger/model';

export * from './logger/public-api';
export * from './deepl/public-api';

export interface BotToolConfig {
  logLevel: LogLevel;
  deepLAuthKey: string;
}

export class BotTools {
  private static _logger: _Logger | null;
  private static _deepL: _DeepL | null = null;

  public static get logger(): _Logger {
    if (!BotTools._logger) {
      throw new Error('Logger not initialized');
    }
    return BotTools._logger;
  }

  public static get deepL(): _DeepL {
    if (!BotTools._deepL) {
      throw new Error('DeepL not initialized');
    }
    return BotTools._deepL;
  }

  public static initialize(config: BotToolConfig): void {
    BotTools._logger = new _Logger(config.logLevel);
    BotTools._deepL = new _DeepL(config.deepLAuthKey);
  }
}
