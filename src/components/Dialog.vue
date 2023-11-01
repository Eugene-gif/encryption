<script lang="ts" setup>
  import { ref } from "vue";
  import { User, Device } from "@/models/UserModel";
  // import { Device }
  import Button from "@/components/UI/Button.vue";
  import IconTrash from "@/assets/icons/IconTrash.vue";
  import IconClose from "@/assets/icons/IconClose.vue";
  import IconUpload from "@/assets/icons/IconUpload.vue";
  import IconSuccess from "@/assets/icons/IconSuccess.vue";

  interface Props {
    isDeleteUser?: boolean;
    isBanUser?: boolean;
    isBanDevice?: boolean;
    isUnlockDevice?: boolean;
    isAction?: boolean;
    user?: User | null;
    device?: Device | null;
    isAccess?: boolean;
    accessText?: string;
  }
  const props = defineProps<Props>();

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

      <template v-if="isDeleteUser && user">
        <div class="dialog__content content">
          <div class="content__wrapper">
            <div class="content__icon">
              <IconTrash class="trash" />
            </div>
            <h3 class="content__title">
              Вы уверены, что хотите удалить пользователя
              {{ user.firstname }} {{ user.lastname }}?
            </h3>
            <div class="content__text">Это действие необратимо</div>
          </div>
        </div>

        <div class="dialog__footer footer">
          <Button
            label="Отмена"
            width="100%"
            height="40px"
            v-close-popup
          />
          <Button
            label="Удалить"
            width="100%"
            height="40px"
            outline
            @click="$emit('onDelete', user)"
          />
        </div>
      </template>

      <template v-if="isBanUser && user">
        <div class="dialog__content content">
          <div class="content__wrapper">
            <div class="content__icon">
              <IconClose class="close" />
            </div>
            <h3 class="content__title">
              Блокировка пользователя <br />
              {{ user.firstname }} {{ user.lastname }}
            </h3>
            <div class="content__text">
              Пользователь потеряет все данные на своем устройстве.
              Доступ в приложение будет невозможен. В случае
              необходимости, пользователя можно разблокировать через
              Административную панель
            </div>
          </div>
        </div>

        <div class="dialog__footer footer">
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
            @click="$emit('onBan', user)"
          />
        </div>
      </template>

      <template v-if="isBanDevice && device">
        <div class="dialog__content content">
          <div class="content__wrapper">
            <div class="content__icon">
              <IconUpload class="close" />
            </div>
            <h3 class="content__title">
              Вы уверены, что хотите удаленно заблокировать
              устройство: {{ device.deviceName }}? <br />
            </h3>
            <div class="content__text">
              Вся база данных на устройстве пользователя будет удалена
            </div>
          </div>
        </div>

        <div class="dialog__footer footer">
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
            @click="$emit('onBanDevice', device)"
          />
        </div>
      </template>

      <template v-if="isUnlockDevice && device">
        <div class="dialog__content content">
          <div class="content__wrapper">
            <div class="content__icon">
              <IconUpload class="close" />
            </div>
            <h3 class="content__title">
              Вы уверены, что хотите разблокировать устройство:
              {{ device.deviceName }}? <br />
            </h3>
            <div class="content__text"></div>
          </div>
        </div>

        <div class="dialog__footer footer">
          <Button
            label="Отмена"
            width="100%"
            height="40px"
            v-close-popup
          />
          <Button
            label="Разблокировать"
            width="100%"
            height="40px"
            outline
            @click="$emit('openUnlockDevice', device)"
          />
        </div>
      </template>

      <template v-if="isAccess">
        <div class="dialog__content content --success">
          <div class="content__wrapper">
            <div class="content__icon">
              <IconSuccess class="success" />
            </div>
            <h3 class="content__title">Успешно</h3>
            <div class="content__text">
              {{ accessText }}
            </div>
          </div>
        </div>

        <div class="dialog__footer footer"></div>
      </template>
    </div>
  </q-dialog>
</template>

<style lang="scss" scoped>
  @import "@/components/styles/_Dialog.scss";
</style>
