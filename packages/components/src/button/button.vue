<!-- button.vue -->
<template>
  <a-button
    @click="click"
    type="primary"
    size="medium"
    v-if="type == 'primary'"
    :long="long"
    :loading="loading"
    :disabled="disabled"
    :htmlType="htmlType"
    :href="href"
  >
    <slot></slot>
  </a-button>
  <a-button
    @click="click"
    size="medium"
    v-if="!type || type == 'secondary'"
    :long="long"
    :loading="loading"
    :disabled="disabled"
    :htmlType="htmlType"
    :href="href"
  >
    <slot></slot>
  </a-button>
  <a-button
    type="dashed"
    size="medium"
    @click="click"
    v-if="type == 'dashed'"
    :long="long"
    :loading="loading"
    :disabled="disabled"
    :htmlType="htmlType"
    :href="href"
  >
    <slot></slot>
  </a-button>
  <a-button
    type="outline"
    size="medium"
    @click="click"
    v-if="type == 'outline'"
    :long="long"
    :loading="loading"
    :disabled="disabled"
    :htmlType="htmlType"
    :href="href"
  >
    <slot></slot>
  </a-button>
  <a-button
    type="text"
    size="medium"
    @click="click"
    v-if="type == 'text'"
    :long="long"
    :loading="loading"
    :disabled="disabled"
    :htmlType="htmlType"
    :href="href"
  >
    <slot></slot>
  </a-button>
</template>

<script lang="ts" setup>
import "@arco-design/web-vue/es/button/style/css.js";
import { defineProps } from "vue";
import useButtonProps from "./props";
import { IButton } from "./interface";
import { buttonPropsType } from "./types";
const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};
const props: IButton = defineProps(buttonPropsType);
const { type, htmlType, shape, status, size, long, loading, disabled, href } =
  useButtonProps(props);
console.log(type, "akdflasldkfaskld");
</script>
