import GIcon from './src/Icon';

(GIcon as any).install = (Vue: any) => {
  Vue.component(GIcon.name, GIcon);
};

export default GIcon;
