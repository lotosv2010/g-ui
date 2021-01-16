import Button from "./src/index.vue";
import "@/style/button.scss";

Button.install = app => {
  app.component(Button.name, Button);
};
export default Button;
