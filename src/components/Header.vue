<script lang="ts" setup>
  import { ref } from "vue";
  import { useStore } from "@/stores/store";
  import IconExit from "@/assets/icons/IconExit.vue";
  import IconSearch from "@/assets/icons/IconSearch.vue";

  const userStore = useStore();
  const searchText = ref<string>("");
</script>

<template>
  <q-header class="bg-white text-black header">
    <q-toolbar-title>
      <q-input
        v-model="searchText"
        placeholder="Поиск по пользователям"
        debounce="300"
        borderless
        class="search"
      >
        <template #prepend>
          <IconSearch />
        </template>
      </q-input>
    </q-toolbar-title>

    <q-btn-dropdown
      dropdown-icon="person"
      color="grey-6"
      text-color="grey-2"
      no-icon-animation
      unelevated
      style="border-radius: 50%; width: 35px; height: 35px"
    >
      <q-list>
        <q-item
          class="item"
          clickable
          v-close-popup
          @click="userStore.logout()"
        >
          <IconExit avatar />
          <q-item-section>
            <q-item-label>Выход</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-header>
</template>

<style lang="scss" scoped>
  @import "@/components/styles/_Header.scss";
</style>
