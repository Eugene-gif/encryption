<script lang="ts" setup>
  interface Props {
    label?: string;
    outline?: boolean;
    iconLeft?: string;
    iconRight?: string;
    width?: string;
    height?: string;
    radius?: string;
  }

  const props = defineProps<Props>();
</script>

<template>
  <q-btn
    :outline="outline"
    unelevated
    no-caps
    :style="`
      width: ${width}; 
      height: ${height}; 
      border-radius: ${radius};
    `"
  >
    <q-icon
      v-if="iconLeft"
      left
      size="20px"
      :name="iconLeft"
    />

    <span>{{ label }}</span>

    <q-icon
      v-if="iconRight"
      right
      size="20px"
      :name="iconRight"
    />
  </q-btn>
</template>

<style lang="scss" scoped>
  @import "@/components/styles/UI/_Button.scss";
</style>
