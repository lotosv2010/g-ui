import GuiLink from './src/link.vue'

GuiLink.install = Vue => {
  Vue.component(GuiLink.name, GuiLink)
}

export default GuiLink
