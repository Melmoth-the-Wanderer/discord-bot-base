import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {AxiosUtils} from "../axios";
import {DeepLResponse} from "./model";

const axios = require('axios').default;

export class DeepL {
    private static authKey: string;

    public static configure(authKey: string) {
        this.authKey = authKey;
    }

    public static async translate(text: string, targetLang: string): Promise<string> {
        try {
            const axiosConfig = DeepL.getTranslateConfig(text, targetLang);
            const translationResponse = await axios.get('http://api-free.deepl.com/v2/translate', axiosConfig) as AxiosResponse<DeepLResponse>;
            const translated = translationResponse.data.translations[0].text;
            return Promise.resolve(translated);
        } catch (error: unknown) {
            const message = DeepL.getErrorMessage(error);
            return Promise.reject(message);
        }
    }

    private static getErrorMessage(error: unknown): string {
        if(error instanceof AxiosError) {
            var errorMessage = AxiosUtils.getErrorMessage(error)
        } else if(error instanceof Error) {
            var errorMessage = error.message;
        } else {
            var errorMessage = `Unspecified error: ${error}`;
        }
        return errorMessage;
    }

    private static getTranslateConfig(text: string, targetLang: string): AxiosRequestConfig<DeepLResponse> {
        return {
            params: {
                text: text,
                target_lang: targetLang,
            },
            headers: {
                Authorization: `DeepL-Auth-Key ${process.env.DEEPL_AUTH_KEY}`
            }
        }
    }
}
