<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GIcon extends Vue {
  @Prop() private name!: string;

  private render() {
    return (
      <i class={['g-icons', `g-${this.name}`]}></i>
    );
  }
}
</script>
