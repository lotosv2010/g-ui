import "@/style/common/index.scss";
import Button from "./button";
import ButtonGroup from "./button-group";
import Icon from "./icon";

const plugins = [Button, ButtonGroup, Icon];

const install = app => {
  plugins.forEach(plugin => app.use(plugin));
};

export default {
  version: "1.0.0",
  install,
  Button,
  ButtonGroup,
  Icon
};
