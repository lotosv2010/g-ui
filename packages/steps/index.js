import GuiSteps from './src/steps.vue'

GuiSteps.install = Vue => {
  Vue.component(GuiSteps.name, GuiSteps)
}

export default GuiSteps
