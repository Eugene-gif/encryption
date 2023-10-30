import { defineStore } from "pinia";
import router from "@/router/router";
import { User } from "@/models/UserModel";
import { UserResponse, UserRest } from "@/services/UserService";

let token: string | null = localStorage.getItem("accessToken");
let profile: User | null = JSON.parse(
  localStorage.getItem("profile") || "{}"
);
let isAuthenticated: boolean = !!token;

interface AuthStoreState {
  isAuthenticated: boolean;
  token: string | null;
  profile: User | null;
}

export const useStore = defineStore("main", {
  state: (): AuthStoreState => ({
    isAuthenticated: isAuthenticated,
    token: token!,
    profile: profile!,
  }),
  getters: {
    isAuthenticate(state) {
      return state.isAuthenticated;
    },
    userProfile(state): User {
      return state.profile!;
    },
  },
  actions: {
    logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("profile");
      this.profile = null;
      this.token = null;
      this.isAuthenticated = false;
      router.push("/auth");
    },
    async getProfile(): Promise<void> {
      const userService = new UserRest();
      const response: UserResponse = await userService.get();

      if (response.isErr()) return;

      this.setProfile(response.value.result);
    },
    writeTokens(accessToken: string, refreshToken: string): void {
      this.isAuthenticated = true;
      this.token = accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    setProfile(payload: User): void {
      this.profile = payload;
      localStorage.setItem("profile", JSON.stringify(payload));
    },
  },
});
