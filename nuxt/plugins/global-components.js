/**
 * Some components are so common and used everywhere, we don't want to continuously import them in our pages and other
 * components.
 * We therefore register those primitive and base components globally, so they're always available without importing.
 */
import Vue from 'vue';
import Cluster from '~/components/primitives/Cluster/Cluster';
import Cover from '~/components/primitives/Cover/Cover';
import Layout from '~/components/primitives/Layout/Layout';
import LayoutItem from '~/components/primitives/Layout/LayoutItem';
import Wrapper from '~/components/primitives/Wrapper/Wrapper';
import BaseButton from '~/components/partials/BaseButton';
import BaseTitle from '~/components/partials/Typography/Title/BaseTitle';
import BaseText from '~/components/partials/Typography/Text/BaseText';
import WpLink from '~/components/functional/wp-link';
import BaseWysiwyg from '~/components/features/AcfBlocks/BaseWysiwyg';
import ImageObject from '~/components/partials/ImageObject.vue';

Vue.component('Cluster', Cluster);
Vue.component('Cover', Cover);
Vue.component('Layout', Layout);
Vue.component('LayoutItem', LayoutItem);
Vue.component('Wrapper', Wrapper);

Vue.component('BaseButton', BaseButton);

Vue.component('BaseTitle', BaseTitle);
Vue.component('BaseText', BaseText);

Vue.component('WpLink', WpLink);

Vue.component('BaseWysiwyg', BaseWysiwyg);
Vue.component('ImageObject', ImageObject);
