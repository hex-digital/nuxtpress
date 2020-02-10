import Vue from 'vue';
import Vuex from 'vuex';

import { configure, addParameters, addDecorator } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/vue';

import '~/assets/scss/app.scss';
import './story-styles.css';
import '~/plugins/global-components';

addParameters({
  backgrounds: [{ name: 'light', value: '#eeeeee' }, { name: 'dark', value: '#222222' }],
});
addDecorator(centered);

Vue.use(Vuex);

const linkObject = {
  props: ['to'],
  methods: {
    log() { action('link target')(this.to) },
  },
  template: '<a href="#" @click.prevent="log()"><slot>Link</slot></a>',
};

Vue.component('nuxt-link', linkObject);
Vue.component('router-link', linkObject);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
