import GuiForm from '../'
import GuiFormItem from '../../formitem'
import GuiInput from '../../input'
import GuiButton from '../../button'

export default {
  title: 'GuiForm',
  component: GuiForm
}

export const Login = () => ({
  components: { GuiForm, GuiFormItem, GuiInput, GuiButton },
  template: `
    <gui-form class="form" ref="form" :model="user" :rules="rules">
      <gui-form-item label="用户名" prop="username">
        <!-- <gui-input v-model="user.username"></gui-input> -->
        <gui-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></gui-input>
      </gui-form-item>
      <gui-form-item label="密码" prop="password">
        <gui-input type="password" v-model="user.password"></gui-input>
      </gui-form-item>
      <gui-form-item>
        <gui-button type="primary" @click="login">登 录</gui-button>
      </gui-form-item>
    </gui-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
