<script lang="ts" setup>
  import { ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { Pagination } from "@/models/ResponseModel";
  import { userColumns, User } from "@/models/UserModel";
  import { usersList } from "@/data/usersList";
  import TableComponent from "@/components/TableComponent.vue";
  import Dialog from "@/components/Dialog.vue";
  import BreadCrumbs from "@/components/BreadCrumbs.vue";
  import Button from "@/components/UI/Button.vue";

  // Роутер
  const router = useRouter();

  // Заголовок текущего роута
  const heading: string = "Пользователи";
  // BreadCrumbs
  const crumbList = [
    {
      title: heading,
      path: "/users",
    },
  ];

  // Флаг загрузки
  const loading = ref(true);
  // Флаг отображения модального окна удаления пользователя
  const isDialogDelete = ref<boolean>(false);
  // Флаг отображения модального окна блокировки пользователя
  const isDialogBan = ref<boolean>(false);
  // Уведомление об успешном удалении
  const isDialogDeleteSuccess = ref<boolean>(false);
  // Уведомление об успешной блокировке
  const isDialogBanSuccess = ref<boolean>(false);
  // Текущий пользователь
  const currentUser = ref<User | null>(null);
  // Пагинация
  const pagination = ref<Pagination | null>(null);

  // Функция переключения модального окна удаления пользователя
  const toggleDialogDelete = (user: User): void => {
    if (user) currentUser.value = user;
    isDialogDelete.value = !isDialogDelete.value;
  };
  // Удаление пользователя
  const deleteUser = (user: User): void => {
    isDialogDelete.value = false;
    isDialogDeleteSuccess.value = !isDialogDeleteSuccess.value;
  };

  // Функция переключения модального окна бана пользователя
  const toggleDialogBan = (user: User): void => {
    if (user) currentUser.value = user;
    isDialogBan.value = !isDialogBan.value;
  };
  // Бан пользователя
  const banUser = (user: User): void => {
    isDialogBan.value = false;
    isDialogBanSuccess.value = !isDialogBanSuccess.value;
  };
</script>

<template>
  <div class="users page">
    <div class="page__top top q-pa-lg">
      <BreadCrumbs
        :routeList="crumbList"
        class="top__crumbs"
      />
      <div class="row justify-between items-center">
        <h2 class="top__title">{{ heading }}</h2>
        <Button
          @click="router.push('/users/new-user')"
          label="Добавить пользователя"
        />
      </div>
    </div>

    <q-separator
      class="q-mb-md"
      size="12px"
      color="grey-6"
      outline
    />

    <div class="page__content content">
      <TableComponent
        :columns="userColumns"
        :data="usersList"
        :cachedData="usersList"
        :pagination="pagination!"
        :tableLoading="!loading"
        @openDelete="toggleDialogDelete"
        @openBan="toggleDialogBan"
      />
    </div>
  </div>

  <teleport to="body">
    <Dialog
      v-if="isDialogDelete"
      :user="currentUser"
      isDeleteUser
      @onClose="isDialogDelete = false"
      @onDelete="deleteUser"
    />

    <Dialog
      v-if="isDialogDeleteSuccess"
      isAccess
      accessText="Пользователь удалён"
      @onClose="isDialogDeleteSuccess = false"
    />

    <Dialog
      v-if="isDialogBan"
      :user="currentUser"
      isBanUser
      @onClose="isDialogBan = false"
      @onBan="banUser"
    />

    <Dialog
      v-if="isDialogBanSuccess"
      isAccess
      accessText="Пользователь заблокирован"
      @onClose="isDialogBanSuccess = false"
    />
  </teleport>
</template>

<style lang="scss" scoped>
  @import "@/styles/chunks/_page.scss";
  .sticky-table {
    height: calc(100vh - 56px - 123px - 28px);
    height: calc(100dvh - 56px - 123px - 28px);
  }

  .q-table__bottom {
    position: sticky;
    bottom: 0;
    z-index: 1111;
  }
</style>
