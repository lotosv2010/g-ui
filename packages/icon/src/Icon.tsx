import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GIcon extends Vue {

  @Prop({
    type: String,
    default: '',
  })
  private name!: string;

  private render() {
    return (
      <i class={['g-icons', `g-${this.name}`]}></i>
    );
  }
}