<template>
  <i :class="['iconfont', `icon-${icon}`, 'gui-icon']"></i>
</template>

<script>
export default {
  name: "GuiIcon",
  props: {
    icon: String
  }
};
</script>
