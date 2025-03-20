<script setup lang="ts">
import type { IInputDateProps } from "./types";
import { vMaska } from "maska/vue";
defineProps<IInputDateProps>();

const model = defineModel<Date | undefined>({
  get: (value) => value ?? undefined,
  set: (value) => {
    return value ?? undefined;
  },
});

const primevue = usePrimeVue();

watchEffect(() => {
  let months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];

  let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  if (primevue.config.locale!.am === "en") {
    months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];

    days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  }

  primevue.config.locale!.dayNamesMin = days;
  primevue.config.locale!.monthNames = months;
  primevue.config.locale!.monthNamesShort = months;
});
</script>

<template>
  <div class="date-picker-container">
    <div
      class="date-picker-wrapper"
      :class="{ 'has-error': error, 'custom-styles': styles }"
    >
      <PrimeDatePicker
        v-model="model"
        v-maska="'##.##.####'"
        date-format="dd.mm.yy"
        class="date-picker-input"
        :placeholder="label"
        :min-date="minDate"
        :max-date="maxDate"
        show-icon
        fluid
        icon-display="input"
        :pt="{
          root: {
            class: 'cursor-pointer',
          },
          pcInputText: {
            root: 'date-picker-input-text',
          },
          panel: 'date-picker-panel',
        }"
      />
    </div>

    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<style lang="less">
.date-picker-container {
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  gap: 2px;

  .date-picker-wrapper {
    border-radius: 8px;
    background-color: #f5f5f5;
    overflow: hidden;
    position: relative;

    &.has-error {
      box-shadow: 0 0 0 1px #df3838;
    }
  }
  .cursor-pointer {
    border: none !important;
  }
  .date-picker-input {
    cursor: pointer;
    display: flex;
    border: none;
    width: 100%;

    &-text {
      background-color: #f5f5f5;
      padding: 16px 20px;
      color: #000;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      border: transparent;
      &::placeholder {
        color: #b1b1b1;
      }
    }
  }

  .date-picker-panel {
    margin-top: 1px;
    margin-bottom: 2px;
  }

  .error-message {
    font-size: 12px;
    font-weight: 400;
    color: #df3838;
  }
}
</style>
