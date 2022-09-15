module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a custom component', // 描述生成器行为
    prompts: [
      {
        type: 'input', // 交互类型 input number checkbox ...
        name: 'name', // 参数使用存储的属性名
        message: 'component name', // 提示信息
        default: 'MyComponent' // 参数默认值
      }
    ],
    // 执行配置
    actions: [
      {
        type: 'add', // 预设类型 add modify addMany etc
        path: 'packages/{{name}}/src/{{name}}.vue', // 文件生成目录
        templateFile: 'plop-template/component/src/component.hbs' // 模板文件地址, 使用模板文件生成文件
      },
      {
        type: 'add',
        path: 'packages/{{name}}/__tests__/{{name}}.test.js',
        templateFile: 'plop-template/component/__tests__/component.test.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/stories/{{name}}.stories.js',
        templateFile: 'plop-template/component/stories/component.stories.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-template/component/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'plop-template/component/LICENSE'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-template/component/package.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop-template/component/README.hbs'
      }
    ]
  })
}