<script lang="ts" setup>
  import { ref } from "vue";
  import { NewUser } from "@/models/UserModel";
  import BreadCrumbs from "@/components/BreadCrumbs.vue";
  import Button from "@/components/UI/Button.vue";
  import Input from "@/components/UI/Input.vue";

  // BreadCrumbs
  const crumbList = [
    {
      title: "Пользователи",
      path: "/users",
    },
    {
      title: "Создание нового пользователя",
      path: "/users/new-user",
    },
  ];

  // Имя и фамилия нового пользователя
  const user = ref<NewUser>({
    firstname: "",
    lastname: "",
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
          @click="$router.push('/users')"
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
            v-model="user.firstname"
            label="Имя пользователя"
            placeholder="Имя"
            width="314px"
          />

          <Input
            v-model="user.lastname"
            label="Фамилия"
            placeholder="Фамилия"
            width="314px"
          />
        </div>
        <Button
          label="Сохранить изменения"
          width="314px"
          :disable="user.firstname && user.lastname ? false : true"
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
