import FormItem from './src/FormItem.vue';

(FormItem as any).install = (Vue: any) => {
  Vue.component(FormItem.name, FormItem);
};

export default FormItem;
