import { mount } from '@vue/test-utils'
import Element from '../src/link.vue'

describe('Gui-Link', () => {
  test('link-a', () => {
    const wrapper = mount(Element)
    expect(wrapper.html()).toContain('a')
  })
})
