import { err, ok, Result } from "neverthrow";
import {
  ApiPaginateResponse,
  ApiResponse,
  ErrorResponse,
} from "@/models/ResponseModel";
import apiClient from "@/apiClient/apiClient";
import { AxiosError, AxiosResponse } from "axios";
import { EditUser, User } from "@/models/UserModel";

// Ответ получение пользователя
export type UserResponse = Result<ApiResponse<User>, ErrorResponse>;
// Ответ получение пользователя
export type UserListResponse = Result<
  ApiPaginateResponse<User>,
  ErrorResponse
>;

export class UserRest {
  public async get(): Promise<UserResponse> {
    try {
      const response: AxiosResponse = await apiClient.get(
        "/api/admin/profile/self"
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

  public async getProfiles(
    filterParams?: string
  ): Promise<UserListResponse> {
    try {
      const response: AxiosResponse = await apiClient.get(
        `/api/admin/profile${filterParams ? filterParams : ""}`
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

  public async searchUser(
    searchValue: string
  ): Promise<UserListResponse> {
    try {
      const response: AxiosResponse = await apiClient.get(
        `/api/admin/profile?search=${searchValue}`
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

  public async editUser(
    userID: string,
    userData: EditUser
  ): Promise<UserResponse> {
    try {
      const response: AxiosResponse = await apiClient.put(
        `/api/admin/profile/update/${userID}`,
        userData
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

  public async createUser(userData: EditUser): Promise<UserResponse> {
    try {
      const response: AxiosResponse = await apiClient.post(
        `/api/admin/profile/create-new-account`,
        userData
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

  public async setBlock(
    userID: string,
    status: boolean
  ): Promise<UserResponse> {
    try {
      const response: AxiosResponse = await apiClient.patch(
        `/api/admin/profile/${userID}/set-block`,
        {
          isBlocked: status,
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
