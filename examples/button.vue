<template>
  <div class="btn-test">
    <gui-button type="primary" size="mini">主要按钮</gui-button>
    <gui-button type="success" size="small">成功按钮</gui-button>
    <gui-button type="info" size="medium">信息按钮</gui-button>
    <gui-button type="warning" :loading="true">警告按钮</gui-button>
    <gui-button type="danger" icon="code">危险按钮</gui-button>
  </div>
</template>
<style lang="scss" scoped>
.btn-test {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
</style>
