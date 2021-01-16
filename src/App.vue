<template>
  <div id="app">
    <Button />
    <ButtonGroup />
    <Icon />
  </div>
</template>

<script>
import Button from "../examples/button";
import ButtonGroup from "../examples/button-group";
import Icon from "../examples/icon";

export default {
  name: "App",
  components: {
    Button,
    ButtonGroup,
    Icon
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
