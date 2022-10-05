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
      console.log(this.getLogArguments('V', ...args));
    }
  }

  public info(...args: unknown[]): void {
    if (this.isInfoEnabled()) {
      console.info(this.getLogArguments('I', ...args));
    }
  }

  public warning(...args: unknown[]): void {
    if (this.isWarningEnabled()) {
      console.warn(this.getLogArguments('W', ...args));
    }
  }

  public error(...args: unknown[]): void {
    if (this.isErrorEnabled()) {
      console.error(this.getLogArguments('! ERR !', ...args));
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

  private getLogArguments(levelMarker: string, ...args: unknown[]): [string, ...unknown[]] {
    return [`[${levelMarker}] : `, ...args];
  }
}
