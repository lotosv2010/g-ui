import Form from './src/Form.vue';

(Form as any).install = (Vue: any) => {
  Vue.component(Form.name, Form);
};

export default Form;
