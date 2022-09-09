import GuiButton from './src/button.vue'

GuiButton.install = Vue => {
  Vue.component(GuiButton.name, GuiButton)
}

export default GuiButton
