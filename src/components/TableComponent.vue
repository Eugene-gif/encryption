<script lang="ts" setup>
  import { nextTick, ref, watch } from "vue";
  import { QTableProps } from "quasar";
  import { Pagination } from "@/models/ResponseModel";
  import Button from "@/components/UI/Button.vue";
  import IconEdit from "@/assets/icons/IconEdit.vue";
  import IconClose from "@/assets/icons/IconClose.vue";
  import IconTrash from "@/assets/icons/IconTrash.vue";

  interface Props {
    columns: QTableProps["columns"];
    data?: QTableProps["rows"];
    cachedData?: QTableProps["rows"];
    tableLoading: boolean;
    // pagination: Pagination;
  }
  const props = defineProps<Props>();
  // Emits
  const emit = defineEmits([
    "openDelete",
    "openBan",
    "openBanDevice",
    "openUnlockDevice",
    // "changePage",
    // "onRefresh",
    // "onFilter",
    // "onSorting",
  ]);

  // Объект пагинации
  const paginationObject = ref<Pagination>({
    sortBy: "",
    descending: false,
    page: 0,
    pages: 0,
    perPage: 0,
    rowsNumber: 0,
    totalCount: 0,
  });
</script>

<template>
  <q-table
    class="table"
    :columns="columns"
    :rows="data"
    :loading="tableLoading"
    :rows-per-page-options="[20]"
    v-model:pagination="paginationObject"
    row-key="id"
    flat
  >
    <template #body-cell-name="props">
      <q-td :props="props">
        <span>
          {{ props.row.firstname }}
          {{ props.row.lastname }}
        </span>
      </q-td>
    </template>

    <template #body-cell-isBlocked="props">
      <q-td :props="props">
        <span :class="`blocked blocked--${props.row.isBlocked}`">
          {{ props.row.isBlocked ? "Заблокирован" : "Нет" }}
        </span>
      </q-td>
    </template>

    <template #body-cell-createdAt="props">
      <q-td :props="props">
        <span>
          {{ props.row.createdAt }}
        </span>
      </q-td>
    </template>

    <template #body-cell-actions="props">
      <q-td :props="props">
        <q-btn-dropdown
          dropdown-icon="more_vert"
          text-color="black"
          no-icon-animation
          unelevated
          style="
            border-radius: 4px;
            border: 1px solid var(--grey-5);
            width: 35px;
            height: 35px;
          "
        >
          <q-list>
            <q-item
              class="item"
              clickable
              v-close-popup
              @click="
                $router.push({
                  path: `/users/${props.row.id}`,
                  state: {
                    id: props.row.id,
                    firstname: props.row.firstname,
                    lastname: props.row.lastname,
                  },
                })
              "
            >
              <IconEdit avatar />
              <q-item-section>
                <q-item-label>Редактировать</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              class="item"
              clickable
              v-close-popup
              @click="$emit('openBan', props.row)"
            >
              <IconClose avatar />
              <q-item-section>
                <q-item-label>Заблокировать</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              class="item"
              clickable
              v-close-popup
              @click="$emit('openDelete', props.row)"
            >
              <IconTrash avatar />
              <q-item-section>
                <q-item-label>Удалить</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-td>
    </template>
    <!-- Таблица данных резервных копий -->
    <template #body-cell-generatedAt="props">
      <q-td :props="props">
        <span>
          {{ props.row.date }}
        </span>
      </q-td>
    </template>

    <!-- Таблица данных устройств текущего пользователя -->
    <template #body-cell-device="props">
      <q-td :props="props">
        <span>
          {{ props.row.deviceName }}
        </span>
      </q-td>
    </template>

    <template #body-cell-lastLoginDate="props">
      <q-td :props="props">
        <span>
          {{ props.row.lastLoginDate }}
        </span>
      </q-td>
    </template>

    <template #body-cell-deviceActions="props">
      <q-td :props="props">
        <template v-if="props.row.isBlocked">
          <span class="blocked blocked--true q-mr-sm">
            Заблокирован
          </span>
          <Button
            label="Разблокировать"
            height="31px"
            outline
            @click="$emit('openUnlockDevice', props.row)"
          />
        </template>

        <Button
          v-else
          label="Заблокировать"
          height="31px"
          outline
          @click="$emit('openBanDevice', props.row)"
        />
      </q-td>
    </template>

    <!-- <template #bottom>
      <div class="pagination">
        <q-pagination
          v-model="pagination.page"
          @update:model-value="$emit('changePage', pagination.page)"
          color="blue"
          :max="pagination.pages"
          :max-pages="6"
          active-text-color="white"
          boundary-numbers
          outline
        />
      </div>
    </template> -->
  </q-table>
</template>

<style lang="scss" scoped>
  @import "@/components/styles/_TableComponent.scss";
</style>
