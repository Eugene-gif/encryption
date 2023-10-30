<script lang="ts" setup>
  import Button from "@/components/UI/Button.vue";
</script>

<template>
  <div class="page fixed-center">
    <h3 class="title">Страница не найдена</h3>
    <Button
      label="На главную"
      @click="$router.push('/')"
    />
  </div>
</template>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .title {
      text-align: center;
      text-wrap: balance;
    }
  }
</style>
