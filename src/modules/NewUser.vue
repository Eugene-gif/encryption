<script lang="ts" setup>
  import { ref } from "vue";
  import BreadCrumbs from "@/components/BreadCrumbs.vue";
  import Button from "@/components/UI/Button.vue";
  import Input from "@/components/UI/Input.vue";

  interface User {
    name: string;
    lastName: string;
  }

  // BreadCrumbs
  const crumbList = [
    {
      title: "Пользователи",
      path: "/",
    },
    {
      title: "Создание нового пользователя",
      path: "/new-user",
    },
  ];

  // Имя и фамилия нового пользователя
  const user = ref<User>({
    name: "",
    lastName: "",
  });
</script>

<template>
  <div class="new-user page">
    <div class="page__top top q-pa-lg">
      <BreadCrumbs
        :routeList="crumbList"
        class="top__crumbs"
      />
      <div class="row justify-between items-center">
        <h2 class="top__title">Создание нового пользователя</h2>
        <Button
          @click="$router.push('/')"
          label="Назад к списку пользователей"
        />
      </div>
    </div>

    <q-separator
      class="q-mb-md"
      size="12px"
      color="grey-6"
      outline
    />

    <div class="page__content content">
      <q-form>
        <div class="content__box">
          <Input
            v-model="user.name"
            title="Имя пользователя"
            placeholder="Имя"
            width="314px"
          />

          <Input
            v-model="user.name"
            title="Пароль"
            placeholder="Фамилия"
            width="314px"
          />
        </div>
        <Button
          label="Сохранить изменения"
          width="314px"
        />
      </q-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/chunks/_page.scss";
  .content {
    padding: 24px;

    &__box {
      display: flex;
      flex-wrap: wrap;
      column-gap: 24px;
      margin-bottom: 8px;
    }
  }
</style>
