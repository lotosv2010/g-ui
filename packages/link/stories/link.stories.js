import GuiLink from '../src/link.vue'

export default {
  title: 'GuiLink',
  component: GuiLink
}

export const Link = _ => ({
  components: { GuiLink },
  template: `
    <div>
      <gui-link :disabled="true" href="http://www.baidu.com">baidu</gui-link>
    </div>
  `
})