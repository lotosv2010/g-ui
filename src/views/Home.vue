<template>
  <div class="home">
    <gui-demo msg="仿element-ui " />
  </div>
</template>

<script lang="ts">
import { GuiDemo } from '@/components/';

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    GuiDemo,
  },
})
export default class Home extends Vue {}
</script>
