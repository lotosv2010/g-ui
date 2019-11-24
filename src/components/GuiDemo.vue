<template>
  <div class="hello">
    <h2>{{ msg }}{{ str }}</h2>
    <hr>
    <g-alert
      title="信息提示的文案"
      type="info"
      description="辅助性文字1"
      :show-icon="true"
    />
    <g-alert
      title="成功提示的文案"
      type="success"
      description="辅助性文字1"
      :show-icon="true"
    />
    <g-alert
      title="错误提示的文案"
      type="error"
      description="辅助性文字1"
      :show-icon="true"
      effect="light"
    />
    <g-alert
      title="警告提示的文案"
      type="warning"
      description="辅助性文字1"
      :show-icon="true"
      effect="light"
    />
    <hr>
    <i class="g-icons g-share"></i>
    <g-icon name="info"></g-icon>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GuiDemo extends Vue {
  private str: string = 'demo';
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  padding: 20px;
  .g-alert {
    margin: 20px;
  }
}
</style>
