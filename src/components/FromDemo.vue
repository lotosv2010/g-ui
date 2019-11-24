<template>
  <div id="app">
    {{ model }}
    <g-form :model="model" :rules="rules">
      <g-form-item label="用户名" prop="username">
        <g-input v-model="model.username"/>
      </g-form-item>
      <g-form-item label="密码" prop="password">
        <g-input type="password" v-model="model.password"/>
      </g-form-item>
    </g-form>
  </div>
</template>

<script>

export default {
  name: 'FormDemo',
  data() {
    return {
      model: {
        username: 'robin',
        password: '123456',
      },
      rules: {
        username: [
          { required: true, message: '请输入活用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' },
        ],
      },
    };
  },
};
</script>

<style>
</style>
