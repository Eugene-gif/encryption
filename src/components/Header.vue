<script lang="ts" setup>
  // import { ref } from "vue";
  import IconUser from "@/assets/icons/IconUser.vue";
  import IconExit from "@/assets/icons/IconExit.vue";
</script>

<template>
  <q-header class="bg-white text-black header">
    <div class="header__search search">Поиск по пользователям</div>

    <!-- <q-btn class="header__btn btn">
      <IconUser class="btn__icon" />
    </q-btn> -->
    <q-btn-dropdown
      dropdown-icon="person"
      color="grey-6"
      text-color="grey-2"
      no-icon-animation
      style="border-radius: 50%; width: 35px; height: 35px"
    >
      <q-list>
        <q-item
          class="item"
          clickable
          v-close-popup
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
