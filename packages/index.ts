import Alert from './alert/index';
import Icon from './icon/index';

const components = [
  Alert,
  Icon,
];

const install = (Vue: any, opts = {}) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  version: '0.1.0',
  install,
};
