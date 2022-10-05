import { _Logger } from './logger';
import SpyInstance = jest.SpyInstance;

const messages = {
  error: 'my dummy error',
  warning: 'my dummy warning',
  info: 'my dummy info',
  verbose: 'my dummy verbose',
};

describe('Logger', () => {
  let consoleErrorSpy: SpyInstance;
  let consoleWarningSpy: SpyInstance;
  let consoleInfoSpy: SpyInstance;
  let consoleVerboseSpy: SpyInstance;
  let devLogger: _Logger;
  let prodLogger: _Logger;

  beforeAll(() => {
    devLogger = new _Logger(_Logger.getDefaultLogLevel(true));
    prodLogger = new _Logger(_Logger.getDefaultLogLevel(false));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('prints proper prefixes', () => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation((args: [string, ...unknown[]]) => {
      expect(args[0]).toContain('[! ERR !] : ');
    });
    consoleWarningSpy = jest.spyOn(console, 'warn').mockImplementation((args: [string, ...unknown[]]) => {
      expect(args[0]).toContain('[W] : ');
    });
    consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation((args: [string, ...unknown[]]) => {
      expect(args[0]).toContain('[I] : ');
    });
    consoleInfoSpy = jest.spyOn(console, 'log').mockImplementation((args: [string, ...unknown[]]) => {
      expect(args[0]).toContain('[V] : ');
    });
    expect.assertions(4);
    devLogger.error(messages.error);
    devLogger.warning(messages.warning);
    devLogger.info(messages.info);
    devLogger.verbose(messages.verbose);
  });

  describe('with default log level', () => {
    beforeAll(() => {
      consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      consoleWarningSpy = jest.spyOn(console, 'warn').mockImplementation();
      consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation();
      consoleVerboseSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    it('displays error for both prod and dev modes', () => {
      devLogger.error(messages.error);
      prodLogger.error(messages.error);
      expect(consoleErrorSpy).toBeCalledTimes(2);
    });

    it('displays warning for both prod and dev modes', () => {
      devLogger.warning(messages.warning);
      prodLogger.warning(messages.warning);
      expect(consoleWarningSpy).toBeCalledTimes(2);
    });

    it('displays infos for dev mode only', () => {
      devLogger.info(messages.info);
      expect(consoleInfoSpy).toBeCalledTimes(1);
    });

    it('does not display infos for prod mode', () => {
      prodLogger.info(messages.info);
      expect(consoleInfoSpy).toBeCalledTimes(0);
    });

    it('displays verbose for dev mode only', () => {
      devLogger.verbose(messages.verbose);
      expect(consoleVerboseSpy).toBeCalledTimes(1);
    });

    it('does not display verbose for prod mode', () => {
      prodLogger.verbose(messages.verbose);
      expect(consoleVerboseSpy).toBeCalledTimes(0);
    });
  });
});
