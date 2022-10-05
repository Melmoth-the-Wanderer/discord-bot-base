import axios, { AxiosResponse } from 'axios';
import { _DeepL } from './deepl';
import { DeepLResponse } from './model';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('DeepL', () => {
  let deepL: _DeepL;

  beforeEach(() => {
    deepL = new _DeepL('fake-auth-key');
  });

  it('can translate successfully', async () => {
    const response: Partial<AxiosResponse<DeepLResponse>> = {
      data: {
        translations: [{ text: 'test-translated' }],
      },
    };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));
    await expect(deepL.translate('test', 'PL')).resolves.toEqual('test-translated');
  });

  it('can handle translation error', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(null));
    await expect(deepL.translate('test', 'PL')).rejects.toContain('null');
  });
});
