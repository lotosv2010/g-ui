import GuiLink from '../src/link.vue'

export default {
  title: '超链接',
  component: GuiLink
}

export const Link = _ => ({
  components: { GuiLink },
  template: `
    <div>
      <gui-link :disabled="false" href="http://www.baidu.com">baidu</gui-link>
    </div>
  `
})

Link.story = {
  name: '基本'
}

export const LinkDisabled = _ => ({
  components: { GuiLink },
  template: `
    <div>
      <gui-link :disabled="true" href="http://www.baidu.com">baidu</gui-link>
    </div>
  `
})

LinkDisabled.story = {
  name: '禁用'
}

export const LinkUnderline = _ => ({
  components: { GuiLink },
  template: `
    <div>
      <gui-link :disabled="false" underline href="http://www.baidu.com">baidu</gui-link>
    </div>
  `
})

LinkUnderline.story = {
  name: '下划线'
}