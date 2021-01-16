<template>
  <button :class="clazz" :disabled="loading">
    <gui-icon v-if="icon && !loading" :icon="icon" class="icon"></gui-icon>
    <gui-icon v-if="loading" icon="loading" class="icon"></gui-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "GuiButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(type) {
        const t = new Set(["primary", "info", "warning", "success", "danger"]);
        if (type && !t.has(type)) {
          console.error(`组件的type类型必须为: ${Array.from(t).join(",")}`);
        }
        return true;
      }
    },
    icon: String,
    loading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "left"
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  computed: {
    clazz() {
      return [
        `gui-button`,
        `gui-button-${this.type}`,
        `gui-button-${this.position}`,
        `gui-button-${this.size}`
      ];
    }
  }
};
</script>
