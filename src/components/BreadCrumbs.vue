<script lang="ts" setup>
  type Crumb = {
    path: String;
    title: String;
  };

  interface Props {
    routeList: Crumb[];
  }

  const props = defineProps<Props>();
</script>

<template>
  <q-breadcrumbs
    active-color="black"
    separator-color="grey"
    class="black"
    separator=">"
    gutter="xs"
  >
    <q-breadcrumbs-el
      v-for="(crumb, index) in routeList"
      :key="index"
      :to="crumb.path"
      active-class="active"
    >
      {{ crumb.title }}
    </q-breadcrumbs-el>
  </q-breadcrumbs>
</template>

<style lang="scss" scoped>
  .active {
    color: var(--grey);
    cursor: default;
    user-select: none;
  }

  .q-breadcrumbs__el {
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
  }
</style>
