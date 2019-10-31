import GIcon from './src/icon.vue';

(GIcon as any).install = (Vue: any) => {
  Vue.component(GIcon.name, GIcon);
};

export default GIcon;
