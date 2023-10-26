import { err, ok, Result } from "neverthrow";
import {
  ApiItemResponse,
  ApiResponse,
  ErrorResponse,
} from "@/models/ResponseModel";
import apiClient from "@/apiClient/apiClient";
import { AxiosError, AxiosResponse } from "axios";

// Интерфейс данных пользователя
export interface UserCredentials {
  email: string;
  password: string;
  deviceId: string;
}
// Интерфейс токенов пользователя
export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}
// Ответ авторизации
export type LoginResponse = Result<
  ApiResponse<TokenResponse>,
  ErrorResponse
>;
// Ответ регистрации при отправке кода на почту
export type CodeResponse = Result<
  ApiResponse<Boolean>,
  ErrorResponse
>;

export class AuthRest {
  async login(userInfo: UserCredentials): Promise<LoginResponse> {
    try {
      const response: AxiosResponse = await apiClient.post(
        "/api/common/auth/login",
        userInfo
      );

      const res = response.data;

      return ok(await res);
    } catch (e: any | AxiosError) {
      if (e instanceof AxiosError) {
        return err(e.response!.data);
      }

      return err(e.response!.data);
    }
  }

  async register(userInfo: UserCredentials): Promise<CodeResponse> {
    try {
      const response: AxiosResponse = await apiClient.post(
        "/api/common/auth/registration",
        {
          email: userInfo.email,
          password: userInfo.password,
        }
      );

      const res = response.data;

      return ok(await res);
    } catch (e: any | AxiosError) {
      if (e instanceof AxiosError) {
        if (e.request.status === 409) {
          e.response!.data.status = 409;

          return err(e.response!.data);
        }

        return err(e.response!.data);
      }

      return err(e.response!.data);
    }
  }

  async verifyCode(
    email: string,
    code: number | string
  ): Promise<CodeResponse> {
    try {
      const response: AxiosResponse = await apiClient.post(
        "/api/common/auth/verify-account",
        {
          email,
          code,
        }
      );

      const res = response.data;

      return ok(await res);
    } catch (e: any | AxiosError) {
      if (e instanceof AxiosError) {
        return err(e.response!.data);
      }
      return err(e.response!.data);
    }
  }
}
