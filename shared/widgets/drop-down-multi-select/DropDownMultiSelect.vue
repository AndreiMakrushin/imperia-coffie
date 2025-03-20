<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";

import type { IDropDownMultiSelectProps } from "./types";

defineProps<{
  options?: IDropDownMultiSelectProps[];
}>();
const model = defineModel<string[]>({ required: true });

const openDrop = ref(false);

const closeDrop = () => {
  openDrop.value = false;
};

const toggleCheckbox = (itemCategory: string) => {
  if (!Array.isArray(model.value)) {
    model.value = [];
  }
  if (
    model.value &&
    model.value.find((category) => category === itemCategory)
  ) {
    model.value.splice(model.value.indexOf(itemCategory), 1);
  } else {
    model.value.push(itemCategory);
  }
};
</script>

<template>
  <div v-on-click-outside="closeDrop" class="dropdown">
    <div class="dropdown-header" @click="openDrop = !openDrop">
      <span class="dropdown-header-text">
        выбрано {{ model.length ?? 0 }} пунктов
      </span>
    </div>

    <div v-if="openDrop" class="dropdown-list">
      <div class="dropdown-list-inner">
        <div
          v-for="item in options"
          :key="item.id"
          class="dropdown-item"
          @click="toggleCheckbox(item.category)"
        >
          <span
            class="dropdown-checkbox"
            :class="{
              'dropdown-checkbox-checked': model.includes(item.category),
            }"
          >
            <div
              v-if="model.includes(item.category)"
              class="dropdown-checkbox-icon"
            ></div>
          </span>
          <span class="dropdown-item-label">{{
            item.category || "title"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.dropdown-checkbox-icon {
  background: green;
  border-radius: 3px;
}
.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  flex-grow: 1;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    cursor: pointer;

    &-text {
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
    }

    .rotate-180 {
      transform: rotate(180deg);
    }
  }

  &-list {
    position: absolute;
    z-index: 50;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 4px));
    width: 100%;
    padding: 4px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &-inner {
      max-height: 216px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 8px;
        border: 1px solid #e7e7e7;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #e7e7e7;
        border-radius: 12px;
        width: 6px;
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 12px;
    cursor: pointer;

    &-label {
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
    }
  }

  &-checkbox {
    position: relative;
    display: flex;
    min-width: 20px;
    min-height: 20px;
    border: 1px solid #b1b1b1;
    border-radius: 4px;

    &-checked {
      border: none;
    }

    &-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: green;
    }
  }
}
</style>
