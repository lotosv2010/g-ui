<template>
  <div>
    <gui-button @click="handle">test</gui-button>
    <gui-link href="https://baidu.com" :underline="true">baidu</gui-link>
  </div>
</template>

<script>
import GuiButton from './packages/button'
import GuiLink from './packages/link'

export default {
  components: {
    GuiButton,
    GuiLink
  },
  methods: {
    handle() {
      console.log(1234)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>