import Alert from './src/Main';

(Alert as any).install = (Vue: any) => {
  Vue.component(Alert.name, Alert);
};

export default Alert;
