<template>
  <button class="xn-button"
          :class="btnClass">
    <xn-icon class="icon"
             :icon="icon"
             v-if="icon && !loading"></xn-icon>
    <xn-icon class="icon"
             icon="loading"
             v-if="loading"></xn-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "xn-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "primary", "info"].includes(type)
        ) {
          console.error(
            "xn-button:type 类型必须为: " +
              ["warning", "success", "danger", "primary", "info"].join("、")
          );
        }
        return true;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(type) {
        if (type && !["left", "right"].includes(type)) {
          console.error(
            "icon-position 类型必须为" + ["left", "right"].join("、")
          );
        }
        return true;
      },
    },
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`xn-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`xn-button-${this.iconPosition}`);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/common.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.xn-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: 42px;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }

  @each $type,
    $color
      in(
        primary: $primary,
        success: $success,
        warning: $warning,
        danger: $danger,
        info: $info
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  @each $type,
    $color
      in(
        primary: $primary-hover,
        success: $success-hover,
        warning: $warning-hover,
        danger: $danger-hover,
        info: $info-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  @each $type,
    $color
      in(
        primary: $primary-active,
        success: $success-active,
        warning: $warning-active,
        danger: $danger-active,
        info: $info-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  .icon + span {
    margin-right: 5px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
  }
}
</style>
