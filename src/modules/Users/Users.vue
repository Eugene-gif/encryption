<script lang="ts" setup>
  import { ref } from "vue";
  import { Pagination } from "@/models/ResponseModel";
  import { userColumns } from "@/models/UserModel";
  import { usersList } from "@/data/usersList";
  import TableComponent from "@/components/TableComponent.vue";
  import Dialog from "@/components/Dialog.vue";
  import BreadCrumbs from "@/components/BreadCrumbs.vue";
  import Button from "@/components/UI/Button.vue";

  // Заголовок текущего роута
  const heading: string = "Пользователи";

  // BreadCrumbs
  const crumbList = [
    {
      title: heading,
      path: "/",
    },
  ];

  // const emits = defineEmits(['onDeleteUser'])

  // Флаг загрузки
  const loading = ref(true);
  // Флаг отображения модального окна удаления
  const isDialogDelete = ref<boolean>(false);
  // Флаг отображения модального окна успеха операции
  // const isDialogSuccess = ref<boolean>(false);
  // Флаг отображения модального окна блокировки пользователя
  const isDialogBan = ref<boolean>(false);
  // Пагинация
  const pagination = ref<Pagination | null>(null);

  // function openDialogSuccess (): void {
  //   isDialogSuccess.value = !isDialogSuccess.value;
  // }
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
          @click="$router.push('/new-user')"
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
        @openDetail="
          (el) => {
            console.log(el, 'Редактировать');
          }
        "
        @openDelete="
          (el) => {
            console.log(el, 'Удалить');
            isDialogDelete = !isDialogDelete;
          }
        "
        @openBan="
          (el) => {
            console.log(el, 'Заблокировать');
            isDialogBan = !isDialogBan;
          }
        "
      />
    </div>
  </div>

  <teleport to="body">
    <Dialog
      v-if="isDialogDelete"
      isDelete
      title="Вы уверены, что хотите удалить пользователя?"
      text="Это действие необратимо"
      @onClose="isDialogDelete = false"
    />

    <Dialog
      v-if="isDialogBan"
      isAction
      title="Блокировка пользователя"
      text="Пользователь потеряет все данные на своем устройстве. Доступ в приложение будет невозможен. В случае необходимости, пользователя можно разблокировать через Административную панель"
      @onClose="isDialogBan = false"
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
