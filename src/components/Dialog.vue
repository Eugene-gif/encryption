<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "@/components/UI/Button.vue";
  import IconTrash from "@/assets/icons/IconTrash.vue";
  import IconClose from "@/assets/icons/IconClose.vue";

  interface Props {
    title?: string;
    text?: string;
    isDelete?: boolean;
    isAction?: boolean;
  }
  const props = defineProps<Props>();

  // Emits
  // const emit = defineEmits([
  //   "onDeleteUser",
  //   "onClose",
  // ]);
  // Флаг открытого окна
  const isOpened = ref<boolean>(true);
</script>

<template>
  <q-dialog
    v-model="isOpened"
    class="dialog"
    @hide="$emit('onClose')"
  >
    <div class="dialog__wrapper">
      <div class="dialog__header header">
        <q-space />
        <q-btn
          class="header__close"
          icon="close"
          color="grey-2"
          flat
          round
          dense
          v-close-popup
        />
      </div>

      <div class="dialog__content content">
        <div class="content__wrapper">
          <div class="content__icon">
            <IconTrash
              v-if="isDelete"
              class="trash"
            />
            <IconClose
              v-if="isAction"
              class="close"
            />
          </div>
          <h3 class="content__title">
            {{ title }}
          </h3>
          <div class="content__text">
            {{ text }}
          </div>
        </div>
      </div>

      <div
        v-if="isDelete"
        class="dialog__footer footer"
      >
        <Button
          label="Отмена"
          width="100%"
          height="40px"
          v-close-popup
        />
        <Button
          @onDeleteUser="$emit('onDeleteUser')"
          label="Удалить"
          width="100%"
          height="40px"
          outline
        />
      </div>

      <div
        v-if="isAction"
        class="dialog__footer footer"
      >
        <Button
          label="Отмена"
          width="100%"
          height="40px"
          v-close-popup
        />
        <Button
          label="Заблокировать"
          width="100%"
          height="40px"
          outline
        />
      </div>
    </div>
  </q-dialog>
</template>

<style lang="scss" scoped>
  @import "@/components/styles/_Dialog.scss";
</style>
