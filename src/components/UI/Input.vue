<script lang="ts" setup>
  import { computed, ref } from "vue";
  import { QInputProps } from "quasar";

  interface Props {
    modelValue?: string | number | null;
    value?: string;
    title?: string;
    placeholder?: string;
    isPassword?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    loading?: boolean;
    rules?: QInputProps["rules"];
    type?: QInputProps["type"];
    width?: string;
  }

  const emit = defineEmits(["update:modelValue"]);
  const props = defineProps<Props>();

  const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
  });

  // Видимость текста
  const isVisiblePassword = ref<boolean>(false);
</script>

<template>
  <div class="input">
    <div class="input__header">
      <div
        v-if="title"
        class="input__title"
      >
        {{ title || "" }}
      </div>
    </div>
    <q-input
      v-model="inputValue"
      :value="value"
      :placeholder="placeholder"
      :rules="rules"
      :disable="disabled"
      :readonly="readonly"
      :loading="loading"
      :type="
        isPassword ? (!isVisiblePassword ? 'password' : 'text') : type
      "
      outlined
      :class="inputValue ? 'valid' : ''"
      :style="`width: ${width};`"
    >
      <template
        v-if="isPassword"
        #append
      >
        <q-icon
          v-if="!isVisiblePassword"
          class="cursor-pointer"
          @click="isVisiblePassword = !isVisiblePassword"
        >
          <img
            src="/eye-close.svg"
            alt="icon"
          />
        </q-icon>

        <q-icon
          v-else
          class="cursor-pointer"
          @click="isVisiblePassword = !isVisiblePassword"
        >
          <img
            src="/eye-open.svg"
            alt="icon"
          />
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/components/styles/UI/_Input.scss";
</style>
