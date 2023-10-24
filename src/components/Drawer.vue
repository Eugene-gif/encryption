<script lang="ts" setup>
  import { ref } from "vue";
  import IconLogo from "@/assets/icons/IconLogo.vue";
  import IconUser from "@/assets/icons/IconUser.vue";
  import IconTrash from "@/assets/icons/IconTrash.vue";

  const drawer = ref<boolean>(false);
  const miniState = ref<boolean>(false);
</script>

<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    :width="300"
    :mini-width="64"
    :breakpoint="920"
    side="left"
    class="drawer"
  >
    <div class="drawer__logo logo">
      <div avatar>
        <IconLogo style="width: 43px; height: 43px" />
      </div>

      <q-item-section>
        <div class="logo__title">CryptFilePro</div>
        <div class="logo__subtitle">Администрирование</div>
      </q-item-section>
    </div>

    <q-item
      class="item"
      clickable
      @click="$router.push('/')"
    >
      <div
        class="item__icon"
        avatar
      >
        <IconUser style="width: 25px; height: 25px" />
      </div>

      <q-item-section>
        <div class="item__text">Пользователи</div>
      </q-item-section>
    </q-item>

    <q-item
      class="item"
      clickable
      @click="$router.push('/about')"
    >
      <div
        class="item__icon"
        avatar
      >
        <IconTrash style="width: 25px; height: 25px" />
      </div>

      <q-item-section>
        <div class="item__text">About</div>
      </q-item-section>
    </q-item>

    <q-item
      @click="miniState = !miniState"
      class="item --toggler"
      clickable
    >
      <div
        class="item__icon"
        avatar
      >
        <q-icon
          :name="miniState ? 'chevron_right' : 'chevron_left'"
          style="font-size: 24px"
        />
      </div>

      <q-item-section>
        <div
          v-if="!miniState"
          class="item__text"
        >
          Свернуть панель
        </div>
      </q-item-section>
    </q-item>
  </q-drawer>
</template>

<style lang="scss" scoped>
  @import "@/components/styles/_Drawer.scss";
</style>
