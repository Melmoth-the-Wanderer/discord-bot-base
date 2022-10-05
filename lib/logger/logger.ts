import { LogLevel } from './model';

export class _Logger {
  public static getDefaultLogLevel(): LogLevel {
    const isDevMode = process.env.DISCORD_PTW_BOT_IS_DEV_MODE == 'true';
    const devLogLevel = LogLevel.Verbose | LogLevel.Info | LogLevel.Warning | LogLevel.Error;
    const prodLogLevel = LogLevel.Warning | LogLevel.Error;

    return isDevMode ? devLogLevel : prodLogLevel;
  }

  constructor(private level: LogLevel) {}

  public verbose(...args: unknown[]): void {
    if (this.isVerboseEnabled()) {
      this.log('V', ...args);
    }
  }

  public info(...args: unknown[]): void {
    if (this.isInfoEnabled()) {
      this.log('I', ...args);
    }
  }

  public warning(...args: unknown[]): void {
    if (this.isWarningEnabled()) {
      this.log('WARN', ...args);
    }
  }

  public error(...args: unknown[]): void {
    if (this.isErrorEnabled()) {
      this.log(' ! ERR ! ', ...args);
    }
  }

  private isVerboseEnabled(): boolean {
    return (this.level & LogLevel.Verbose) > 0;
  }

  private isInfoEnabled(): boolean {
    return (this.level & LogLevel.Info) > 0;
  }

  private isWarningEnabled(): boolean {
    return (this.level & LogLevel.Warning) > 0;
  }

  private isErrorEnabled(): boolean {
    return (this.level & LogLevel.Error) > 0;
  }

  private log(levelMarker: string, ...args: unknown[]): void {
    console.log(`[${levelMarker}] PTW: `, ...args);
  }
}
