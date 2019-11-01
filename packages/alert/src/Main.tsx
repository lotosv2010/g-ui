import { Component, Prop, Vue } from 'vue-property-decorator';

const TYPE_CLASSES_MAP: any = {
  success: 'g-success',
  warning: 'g-warning',
  error: 'g-error',
};

@Component
export default class GAlert extends Vue {
  private visible: boolean = true;

  @Prop({
    type: String,
    default: '',
  })
  private title!: string;

  @Prop({
    type: String,
    default: '',
  })
  private description!: string;

  @Prop({
    type: String,
    default: 'info',
  })
  private type!: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  private closable!: boolean;

  @Prop({
    type: String,
    default: '',
  })
  private closeText!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  private showIcon!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  private center!: boolean;

  @Prop({
    type: String,
    default: 'light',
    validator: (value) => {
      return ['light', 'dark'].indexOf(value) !== -1;
    },
  })
  private effect!: string;

  private close() {
    this.visible = false;
    this.$emit('close');
  }

  private render() {
    return (
      <transition name='g-alert-fade'>
        <div
          class={['g-alert', `g-alert--${this.type}`, this.center ? 'is-center' : '', `is-${this.effect}`]}
          v-show={this.visible}
          role='alert'
        >
          {this.showIcon ? <i
            class={[
              'g-alert__icon',
              'g-icons',
              (TYPE_CLASSES_MAP[this.type] || 'g-info'),
              (this.description || this.$slots.default ? 'is-big' : ''),
            ]}></i> : ''
          }
          <div class='g-alert__content'>
            {this.title || this.$slots.title ?
              <span
                class={[
                  'g-alert__title',
                  (this.description || this.$slots.default ? 'is-bold' : ''),
                ]}
              >
                <slot name='title'>{ this.title }</slot>
              </span> : ''
            }
            {this.$slots.default && !this.description ? <p class='g-alert__description'><slot></slot></p> : ''}
            {this.description && !this.$slots.default ? <p class='g-alert__description'>{ this.description }</p> : ''}
            <i
              class={['g-alert__closebtn', {'is-customed': this.closeText !== '', 'g-icons g-close': this.closeText === ''}]}
              v-show={this.closable}
              onClick={this.close}
            >
              {this.closeText}
            </i>
          </div>
        </div>
      </transition>
    );
  }
}
