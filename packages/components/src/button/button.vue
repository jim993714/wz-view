<!-- button.vue -->
<template>
  <a-button type="primary">Primary</a-button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { buttonProps } from "./types";
export default defineComponent({
  name: "k-button",
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`k-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`k-button--${props.size}`]: props.size,
      };
    });

    //图标
    const iconFont = computed(() => {
      const iconName = props.icon;
      const position = props.iconPosition;
      return {
        iconName,
        position,
      };
    });

    return {
      styleClass,
      iconFont,
    };
  },
});
</script>
