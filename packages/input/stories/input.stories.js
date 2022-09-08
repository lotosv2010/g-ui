import GuiInput from '../'

export default {
  title: 'GuiInput',
  component: GuiInput
}

export const Text = () => ({
  components: { GuiInput },
  template: '<gui-input v-model="value"></gui-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { GuiInput },
  template: '<gui-input type="password" v-model="value"></gui-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
