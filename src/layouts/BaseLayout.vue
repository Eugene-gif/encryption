<script lang="ts" setup>
  import Header from "@/components/Header.vue";
  import Drawer from "@/components/Drawer.vue";
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <Header />
    <Drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
  @import "@/layouts/styles/_BaseLayout.scss";
</style>
