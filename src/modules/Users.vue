<script lang="ts" setup>
  import BreadCrumbs from "@/components/BreadCrumbs.vue";
  import Button from "@/components/UI/Button.vue";

  // Заголовок текущего роута
  const heading = "Пользователи";

  // BreadCrumbs
  const crumbList = [
    {
      title: heading,
      path: "/",
    },
  ];
</script>

<template>
  <div class="users page">
    <div class="page__top top q-pa-lg">
      <BreadCrumbs
        :routeList="crumbList"
        class="top__crumbs"
      />
      <div class="row justify-between items-center">
        <h2 class="top__title">{{ heading }}</h2>
        <Button
          @click="$router.push('/new-user')"
          label="Добавить пользователя"
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
      <h4>Страница пользователей</h4>
      <q-table />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/chunks/_page.scss";
</style>
