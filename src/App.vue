<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
  import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <BaseLayout />
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .nav {
    display: flex;
    gap: 30px;
    padding: 10px;
    .router-link-active {
      position: relative;
      padding-bottom: 5px;
      color: lightgray;
      pointer-events: none;

      &:hover {
        background-color: transparent;
        cursor: default;
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: lightgray;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
</style>
