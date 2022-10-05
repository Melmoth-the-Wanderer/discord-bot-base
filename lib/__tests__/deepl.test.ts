import axios, { AxiosResponse } from 'axios';
import { DeepL } from '../deepl/deepl';
import { DeepLResponse } from '../deepl/model';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('DeepL', () => {
  it('can configure', () => {
    expect(() => DeepL.configure('fake-auth-key')).not.toThrow();
  });

  it('can translate successfully', async () => {
    const response: Partial<AxiosResponse<DeepLResponse>> = {
      data: {
        translations: [{ text: 'test-translated' }],
      },
    };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));
    await expect(DeepL.translate('test', 'PL')).resolves.toEqual('test-translated');
  });

  it('can handle translation error', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(null));
    await expect(DeepL.translate('test', 'PL')).rejects.toContain('null');
  });
});
