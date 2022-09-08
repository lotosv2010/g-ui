import GuiFormItem from './src/formitem.vue'

GuiFormItem.install = Vue => {
  Vue.component(GuiFormItem.name, GuiFormItem)
}

export default GuiFormItem
