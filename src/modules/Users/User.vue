<script lang="ts" setup>
  import { ref } from "vue";
  import { Pagination } from "@/models/ResponseModel";
  import {
    userColumnsBackup,
    userColumnsDevices,
    User,
    Device,
  } from "@/models/UserModel";
  import { copiesList } from "@/data/copiesList";
  import { devicesList } from "@/data/devicesList";
  import TableComponent from "@/components/TableComponent.vue";
  import Dialog from "@/components/Dialog.vue";
  import BreadCrumbs from "@/components/BreadCrumbs.vue";
  import Button from "@/components/UI/Button.vue";
  import Input from "@/components/UI/Input.vue";

  // Данные одного текущего пользователя
  const user = ref<any>({
    id: history.state.id,
    firstname: history.state.firstname,
    lastname: history.state.lastname,
  });
  // BreadCrumbs
  const crumbList = [
    {
      title: "Пользователи",
      path: "/users",
    },
    {
      title: `${user.value.firstname} ${user.value.lastname}`,
      path: `/users/${user.value.id}`,
    },
  ];
  // Пагинация
  const pagination = ref<Pagination | null>(null);
  // Текущий пользователь
  const currentDevice = ref<Device | null>(null);
  // Поля инпутов
  const firstname = ref<string>(user.value.firstname);
  const lastname = ref<string>(user.value.lastname);
  // Поле таба
  const tab = ref<string>("info");
  // Флаг отображения модального окна с календарём
  const isDialogCalendar = ref<boolean>(false);
  // Флаг отображения модального окна бана устройства
  const isDialogBanDevice = ref<boolean>(false);
  // Флаг отображения модального окна разблокировки устройства
  const isDialogUnlockDevice = ref<boolean>(false);
  // Флаг модального окна об успешной блокировке
  const isDialogBanDeviceSuccess = ref<boolean>(false);
  // Флаг модального окна об успешной блокировке
  const isDialogUnlockDeviceSuccess = ref<boolean>(false);

  // Функция переключения модального окна бана устройства
  const toggleDialogBanDevice = (device: Device): void => {
    if (device) currentDevice.value = device;
    isDialogBanDevice.value = !isDialogBanDevice.value;
  };
  // Бан устройства
  const banDevice = (device: Device): void => {
    // Логика бана устройства ...
    isDialogBanDevice.value = false;
    isDialogBanDeviceSuccess.value = !isDialogBanDeviceSuccess.value;
  };

  // Функция переключения модального окна разблокировки устройства
  const toggleDialogUnlockDevice = (device: Device): void => {
    if (device) currentDevice.value = device;
    isDialogUnlockDevice.value = !isDialogUnlockDevice.value;
  };
  // Разблокировка устройства
  const unlockDevice = (device: Device): void => {
    // Логика разблокировки устройства ...
    isDialogUnlockDevice.value = false;
    isDialogUnlockDeviceSuccess.value =
      !isDialogUnlockDeviceSuccess.value;
  };
</script>

<template>
  <div class="user page">
    <div class="page__top top">
      <BreadCrumbs
        :routeList="crumbList"
        class="top__crumbs"
      />
      <div class="top__box">
        <h2 class="top__title">
          {{ user.firstname }} {{ user.lastname }}
        </h2>
        <div class="top__btns">
          <Button
            v-if="tab === 'copies'"
            @click="isDialogCalendar = !isDialogCalendar"
            label="Фильтровать по дате"
            iconLeft="date_range"
            width="193px"
            outline
          />
          <Button
            v-if="tab === 'info'"
            label="Заблокировать"
            outline
          />
          <Button
            @click="$router.push('/users')"
            label="Назад к списку пользователей"
          />
        </div>
      </div>

      <q-tabs
        v-model="tab"
        active-color="none"
        indicator-color="blue"
        align="left"
        narrow-indicator
        no-caps
      >
        <q-tab
          name="info"
          label="Основная информация"
        />
        <q-tab
          name="copies"
          label="Резервные копии"
        />
        <q-tab
          name="devices"
          label="Устройства"
        />
      </q-tabs>
    </div>

    <q-separator
      class="q-mb-md"
      size="12px"
      color="grey-6"
      outline
    />

    <q-tab-panels
      v-model="tab"
      animated
    >
      <q-tab-panel name="info">
        <div class="page__content content">
          <q-form class="content__form">
            <div class="content__box">
              <Input
                v-model="firstname"
                label="Имя пользователя"
                placeholder="Имя"
                width="314px"
              />

              <Input
                v-model="lastname"
                label="Фамилия"
                placeholder="Фамилия"
                width="314px"
              />
            </div>
            <Button
              label="Сохранить изменения"
              width="314px"
              :disable="
                firstname === user.firstname &&
                lastname === user.lastname
                  ? true
                  : false
              "
            />
          </q-form>
        </div>

        <q-separator
          class="q-mb-md"
          size="12px"
          color="grey-6"
          outline
        />

        <div class="content pin">
          <h3 class="pin__title q-mb-md">Мастер-пин</h3>
          <p class="pin__text q-mb-lg">
            Передайте сгенерированный мастер-пин пользователю любым
            безопасным способом. Мастер-пин позволяет пользователю
            получить и/или восстановить доступ к приложению
          </p>
          <div class="pin__btns content__box">
            <Button
              label="Сгенерировать новый мастер-пин"
              width="314px"
            />

            <Button
              label="Отправить мастер-пин"
              width="314px"
              text-color="blue"
              outline
            />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="copies">
        <TableComponent
          :columns="userColumnsBackup"
          :data="copiesList"
          :cachedData="copiesList"
          :pagination="pagination!"
          :tableLoading="false"
        />
      </q-tab-panel>

      <q-tab-panel name="devices">
        <TableComponent
          :columns="userColumnsDevices"
          :data="devicesList"
          :cachedData="devicesList"
          :pagination="pagination!"
          :tableLoading="false"
          @openBanDevice="toggleDialogBanDevice"
          @openUnlockDevice="toggleDialogUnlockDevice"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>

  <teleport to="body">
    <!-- _____ Блокировка _____ -->
    <Dialog
      v-if="isDialogBanDevice"
      :device="currentDevice"
      isBanDevice
      @onClose="isDialogBanDevice = false"
      @onBanDevice="banDevice"
    />

    <Dialog
      v-if="isDialogBanDeviceSuccess"
      isAccess
      accessText="Блокировка устройства прошла успешно. База данных на указанном устройстве успешно очищена"
      @onClose="isDialogBanDeviceSuccess = false"
    />

    <!-- _____ Разблокировка _____ -->
    <Dialog
      v-if="isDialogUnlockDevice"
      :device="currentDevice"
      isUnlockDevice
      @onClose="isDialogUnlockDevice = false"
      @openUnlockDevice="unlockDevice"
    />

    <Dialog
      v-if="isDialogUnlockDeviceSuccess"
      isAccess
      accessText="Устройство разблокировано"
      @onClose="isDialogUnlockDeviceSuccess = false"
    />

    <!-- _____ Календарь _____ -->
    <Dialog
      v-if="isDialogCalendar"
      isCalendar
      @onClose="isDialogCalendar = false"
    />
  </teleport>
</template>

<style lang="scss" scoped>
  @import "@/styles/chunks/_page.scss";
  @import "@/modules/Users/styles/_User.scss";
</style>
