<script setup></script>

<template>
  <q-layout view="lHh Lpr lff">
    <q-page-container>
      <q-page class="form q-pa-lg">
        <router-view class="full-width" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-6);
  }
</style>
