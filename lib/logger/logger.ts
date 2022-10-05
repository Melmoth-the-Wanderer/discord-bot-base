import { LogLevel } from './model';

export class Logger {
  private static level: LogLevel;

  public static get defaultLogLevel(): LogLevel {
    const isDevMode = process.env.DISCORD_PTW_BOT_IS_DEV_MODE == 'true';
    const devLogLevel = LogLevel.Verbose | LogLevel.Info | LogLevel.Warning | LogLevel.Error;
    const prodLogLevel = LogLevel.Warning | LogLevel.Error;

    return isDevMode ? devLogLevel : prodLogLevel;
  }

  public static configure(level: LogLevel): void {
    Logger.level = level;
  }

  public static verbose(...args: unknown[]): void {
    if (Logger.isVerboseEnabled()) {
      Logger.log('V', ...args);
    }
  }

  public static info(...args: unknown[]): void {
    if (Logger.isInfoEnabled()) {
      Logger.log('I', ...args);
    }
  }

  public static warning(...args: unknown[]): void {
    if (Logger.isWarningEnabled()) {
      Logger.log('WARN', ...args);
    }
  }

  public static error(...args: unknown[]): void {
    if (Logger.isErrorEnabled()) {
      Logger.log(' ! ERR ! ', ...args);
    }
  }

  private static isVerboseEnabled(): boolean {
    return (Logger.level & LogLevel.Verbose) > 0;
  }

  private static isInfoEnabled(): boolean {
    return (Logger.level & LogLevel.Info) > 0;
  }

  private static isWarningEnabled(): boolean {
    return (Logger.level & LogLevel.Warning) > 0;
  }

  private static isErrorEnabled(): boolean {
    return (Logger.level & LogLevel.Error) > 0;
  }

  private static log(levelMarker: string, ...args: unknown[]): void {
    console.log(`[${levelMarker}] PTW: `, ...args);
  }
}
