<template>
  <div class="gui-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuiButtonGroup",
  mounted() {
    const ele = this.$el;
    const children = ele.children;
    for (let i = 0; i < children.length; i++) {
      console.assert(children[i].tagName === "BUTTON", "必须子节点是button");
    }
  }
};
</script>
