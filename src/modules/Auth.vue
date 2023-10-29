<script setup lang="ts">
  import Input from "@/components/UI/Input.vue";
  import { reactive, ref } from "vue";
  import Button from "@/components/UI/Button.vue";
  import {
    AuthRest,
    LoginResponse,
    UserCredentials,
  } from "@/services/AuthService";
  import { useStore } from "@/stores/store";
  import { useRouter } from "vue-router";

  // Сервис авторизации
  const authService = new AuthRest();
  // Хранилище пользователя
  const userStore = useStore();
  // Роутер
  const router = useRouter();
  // Данные пользователя
  const userFields = reactive<UserCredentials>({
    email: "",
    password: "",
    deviceId: "string",
  });
  // Флаг ожидания авторизации
  const loginLoading = ref<boolean>(false);

  // Выполнение авторизации
  async function clickLogin(): Promise<void> {
    loginLoading.value = true;

    const response: LoginResponse = await authService.login(
      userFields
    );

    if (response.isErr()) {
      loginLoading.value = false;

      return;
    }

    // Запись токенов в хранилище
    userStore.writeTokens(
      response.value.result.accessToken,
      response.value.result.refreshToken
    );
    // Получение профиля пользователя
    await userStore.getProfile();
    // Переход на основную страницу
    await router.push("/");
  }
</script>

<template>
  <div class="auth">
    <h1 class="auth__heading">CryptFilePro</h1>
    <h3 class="auth__title">Войти</h3>
    <q-form @submit.prevent="clickLogin">
      <Input
        class="q-mb-lg h-44"
        v-model="userFields.email"
        label="Логин*"
      />

      <Input
        class="h-44"
        v-model="userFields.password"
        isPassword
        label="Пароль*"
      />
      <!-- :rules="[(val) => val.length || 'Поле должно быть заполнено']" -->

      <div class="row justify-between q-mt-lg">
        <Button
          type="submit"
          label="Войти"
          :loading="loginLoading"
          radius="10px"
          height="44px"
          width="100%"
        />
      </div>
    </q-form>
  </div>
</template>

<style scoped lang="scss">
  .auth {
    position: relative;
    max-width: 450px;
    border-radius: 6px;
    padding: 44px 44px 64px 44px;
    background-color: #fff;

    &__title {
      font-size: 34px;
      font-weight: 700;
      line-height: 41px;
      letter-spacing: 0.374px;
      margin-bottom: 20px;
    }

    &__heading {
      @extend .auth__title;
      font-weight: 800;
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
