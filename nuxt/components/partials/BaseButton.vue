<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :type="nativeType"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <span class="v-btn__slot"><slot /></span>
  </component>
</template>

<script>
/**
 * Button Features:
 * - Themes (primary, secondary, etc, light, dark)
 * - Text
 * - Disabled, Loading
 * - Outlined
 * - Block
 * - Sizes
 * - Router Tag implementation (button, a, input, router-link, nuxt-link)
 *
 * To do:
 * - Inverted // @todo Styles for a button that look good when on a background color of the set 'theme' prop
 * - Icons (left and right) // @todo When icons are added, add them here too
 * - Button group? // @todo Add a button group then re-evaluate this component
 *
 * Native Considerations:
 * aria-label - Add an aria-label when button content doesn't describe it, such as when icon-only. Read as "click {label}"
 * aria-role - When not using <button> tag, add aria-role="button" if the element will do something in response to user input (such as when using an a tag to display a modal, rather than to navigate).
 */

const nativeTypes = ['button', 'submit', 'reset'];
const availableSizes = [null, 'tiny', 'small', 'large', 'huge'];
const availableTags = ['button', 'a', 'input', 'router-link', 'nuxt-link', 'n-link', 'NuxtLink', 'NLink'];
const availableThemes = ['white', 'black', 'primary', 'secondary'];

export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    block: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    nativeType: { type: String, default: 'button', validator: (value) => nativeTypes.includes(value) },
    outline: { type: Boolean, default: false },
    size: { type: String, default: null, validator: (value) => availableSizes.includes(value) },
    tag: { type: String, default: 'button', validator: (value) => availableTags.includes(value) },
    text: { type: Boolean, default: false },
    theme: { type: String, default: 'primary', validator: (value) => availableThemes.includes(value) },
  },
  computed: {
    buttonClasses() {
      return {
        'v-btn': true,
        [`v-btn--${this.theme}`]: this.theme,
        [`v-btn--${this.size}`]: this.size,
        'v-btn--block': this.block,
        'v-btn--disabled': this.disabled,
        'v-btn--loading': this.loading,
        'v-btn--outlined': this.outline,
        'v-btn--text': this.text,
      };
    },
  },
};
</script>

<style scoped lang="scss">
/**
 * The buttons are built to be customisable, via overriding the following maps:
 *
 * $button-default-styles - The default button styles to apply to all buttons.
 * $button-size-map - The possible button sizes. Should start with two dashes.
 * $button-theme-names - The names of the colour themes available to buttons. Should start with two dashes.
 * $button-type-theme-maps - The names of the possible button types, and the maps that should be used for their themes.
 */
$button-default-styles: (
  border: 1px solid transparent,
  border-radius: 2px,
  display: inline-block,
  outline: none,
) !default;

$button-size-map: (
  null: (
    padding: 1rem,
  ),
  '--tiny': (
    font-size: 80%,
    padding: 0.225rem,
  ),
  '--small': (
    font-size: 90%,
    padding: 0.5rem,
  ),
  '--large': (
    font-size: 110%,
    padding: 1.5rem,
  ),
  '--huge': (
    font-size: 120%,
    padding: 1.75rem,
  ),
) !default;

$button-theme-names: ('--primary', '--secondary', '--white', '--black') !default;

$default-theme-map: (
  'all': (
    'disabled': (
      opacity: 0.5,
    ),
  ),
  '--primary': (
    'styles': (
      background-color: color('primary'),
      border: 1px solid color('primary'),
      color: color('white'),
    ),
    'hover': (
      background-color: lighten(color('primary'), 10%),
      border-color: lighten(color('primary'), 10%),
    ),
  ),
  '--secondary': (
    'styles': (
      background-color: color('secondary'),
      border: 1px solid color('secondary'),
      color: color('black'),
    ),
    'hover': (
      background-color: lighten(color('secondary'), 10%),
      border-color: lighten(color('secondary'), 10%),
    ),
  ),
  '--white': (
    'styles': (
      background-color: color('white'),
      border: 1px solid color('white'),
      color: color('black'),
    ),
    'hover': (
      background-color: darken(color('white'), 3%),
      border-color: darken(color('white'), 3%),
    ),
  ),
  '--black': (
    'styles': (
      background-color: color('black'),
      border: 1px solid color('black'),
      color: color('white'),
    ),
    'hover': (
      background-color: lighten(color('black'), 15%),
      border-color: lighten(color('black'), 15%),
    ),
  ),
) !default;

$outline-theme-map: (
  'all': (
    'styles': (
      background-color: transparent,
    ),
    'disabled': (
      opacity: 0.5,
    ),
  ),
  '--primary': (
    'styles': (
      color: color('primary'),
    ),
    'hover': map-deep-get($default-theme-map, '--primary', 'styles'),
  ),
  '--secondary': (
    'styles': (
      color: color('secondary'),
    ),
    'hover': map-deep-get($default-theme-map, '--secondary', 'styles'),
  ),
  '--white': (
    'styles': (
      color: color('white'),
    ),
    'hover': map-deep-get($default-theme-map, '--white', 'styles'),
  ),
  '--black': (
    'styles': (
      color: color('black'),
    ),
    'hover': map-deep-get($default-theme-map, '--black', 'styles'),
  ),
) !default;

$text-theme-map: (
  'all': (
    'styles': (
      background: none,
      border: none,
    ),
    'disabled': (
      opacity: 0.5,
    ),
  ),
  '--primary': (
    'styles': (
      color: color('primary'),
    ),
    'hover': (
      background-color: color('white-two'),
    ),
  ),
  '--secondary': (
    'styles': (
      color: color('secondary'),
    ),
    'hover': (
      background-color: color('white-two'),
    ),
  ),
  '--white': (
    'styles': (
      color: color('white'),
    ),
    'hover': (
      background-color: color('white-two'),
    ),
  ),
  '--black': (
    'styles': (
      color: color('black'),
    ),
    'hover': (
      background-color: color('white-two'),
    ),
  ),
) !default;

$button-type-theme-maps: (
  null: $default-theme-map,
  '--outlined': $outline-theme-map,
  '--text': $text-theme-map,
) !default;

.v-btn {
  cursor: pointer;
  @include styles-from-map($button-default-styles);
}

.v-btn--block {
  display: block;
  width: 100%;
}

.v-btn--disabled {
  cursor: not-allowed;
}

.v-btn--loading {
  pointer-events: none;
  position: relative;

  .v-btn__slot {
    color: transparent;
  }

  &:after {
    animation: animSpin 0.5s infinite linear;
    border-radius: 50%;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: 1em;
    left: calc(50% - 0.5em);
    position: absolute;
    top: calc(50% - 0.5em);
    width: 1em;
  }
}

/** Sizes */
@each $size-name, $style-map in $button-size-map {
  .v-btn#{$size-name} {
    @include styles-from-map($style-map);
  }
}

@each $type-name, $theme-map in $button-type-theme-maps {
  $all: ();
  @if map-has-key($theme-map, 'all') {
    $all: map-get($theme-map, 'all');
  }

  .v-btn#{$type-name} {
    @each $theme-name in $button-theme-names {
      $theme: recursive-map-merge($all, map-get($theme-map, $theme-name));

      &.v-btn#{$theme-name} {
        @include styles-from-map-quietly(map-get($theme, 'styles'));

        &:hover:not(.v-btn--disabled) {
          @include styles-from-map-quietly(map-get($theme, 'hover'));
        }

        &.v-btn--disabled {
          @include styles-from-map-quietly(map-get($theme, 'disabled'));
        }
      }
    }
  }
}
</style>
