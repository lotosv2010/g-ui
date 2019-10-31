<template>
  <transition name="g-alert-fade">
    <div
      class="g-alert"
      :class="[typeClass, center ? 'is-center' : '', `is-${effect}`]"
      v-show="visible"
      role="alert"
    >
      <i class="g-alert__icon g-icons" :class="[iconClass, isBigIcon]" v-if="showIcon"></i>
      <div class="g-alert__content">
        <span class="g-alert__title" :class="[isBoldTitle]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="g-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="g-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="g-alert__closebtn" :class="{'is-customed': closeText !== '', 'g-icons g-close': closeText === ''}" v-show="closable" @click="close">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script>
const TYPE_CLASSES_MAP = {
  success: 'g-success',
  warning: 'g-warning',
  error: 'g-error',
};
export default {
  name: 'GAlert',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    closable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: '',
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    effect: {
      type: String,
      default: 'light',
      validator: (value) => {
        return ['light', 'dark'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    typeClass() {
      return `g-alert--${this.type}`;
    },
    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || 'g-info';
    },
    isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : '';
    },
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    },
  },
};
</script>