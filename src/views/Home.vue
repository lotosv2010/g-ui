<template>
  <div class="home">
    <gui-demo msg="仿element-ui " />
    <form-demo></form-demo>
  </div>
</template>

<script lang="ts">
import { GuiDemo } from '@/components/';
import FormDemo from '@/components/FromDemo.vue';

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    GuiDemo,
    FormDemo,
  },
})
export default class Home extends Vue {}
</script>
