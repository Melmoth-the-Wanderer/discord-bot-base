import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosUtils } from '../axios/axios';
import { DeepLResponse } from './model';

const axios = require('axios').default;

export class _DeepL {
  constructor(private authKey: string) {}

  public async translate(text: string, targetLang: string): Promise<string> {
    try {
      const axiosConfig = this.getTranslateConfig(text, targetLang);
      const translationResponse = (await axios.get('http://api-free.deepl.com/v2/translate', axiosConfig)) as AxiosResponse<DeepLResponse>;
      const translated = translationResponse.data.translations[0].text;
      return Promise.resolve(translated);
    } catch (error: unknown) {
      const message = this.getErrorMessage(error);
      return Promise.reject(message);
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof AxiosError) {
      // eslint-disable-next-line no-var
      var errorMessage = AxiosUtils.getErrorMessage(error);
    } else if (error instanceof Error) {
      // eslint-disable-next-line no-var
      var errorMessage = error.message;
    } else {
      // eslint-disable-next-line no-var
      var errorMessage = `Unspecified error: ${error}`;
    }
    return errorMessage;
  }

  private getTranslateConfig(text: string, targetLang: string): AxiosRequestConfig<DeepLResponse> {
    return {
      params: {
        text: text,
        target_lang: targetLang,
      },
      headers: {
        Authorization: `DeepL-Auth-Key ${this.authKey}`,
      },
    };
  }
}
