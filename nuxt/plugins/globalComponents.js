/**
 * Some components are so common and used everywhere, we don't want to continuously import them in our pages and other
 * components.
 * We therefore register those primitive and base components globally, so they're always available without importing.
 */
import Vue from 'vue';
import Box from '~/components/Primitives/Box/Box';
import Cluster from '~/components/Primitives/Cluster/Cluster';
import Content from '~/components/Primitives/Content/Content';
import Cover from '~/components/Primitives/Cover/Cover';
import Stack from '~/components/Primitives/Stack/Stack';
import BaseButton from '~/components/Form/Button/Base/BaseButton';
import BaseTitle from '~/components/Typography/Title/BaseTitle';
import BaseContent from '~/components/Typography/Content/BaseContent';
import StripSpace from '~/components/Layout/Spacing/StripSpace';
import BasePageHeader from '~/components/PageBlocks/PageHeader/BasePageHeader';

import PostPageHeader from '~/components/PageBlocks/PageHeader/PostPageHeader';
import ImageObject from '~/components/Visual/Images/ImageObject.vue';

Vue.component('Box', Box);
Vue.component('Cluster', Cluster);
Vue.component('Content', Content);
Vue.component('Cover', Cover);
Vue.component('Stack', Stack);

Vue.component('BaseButton', BaseButton);

Vue.component('BaseTitle', BaseTitle);
Vue.component('BaseContent', BaseContent);

Vue.component('StripSpace', StripSpace);

Vue.component('BasePageHeader', BasePageHeader);

Vue.component('PostPageHeader', PostPageHeader);
Vue.component('ImageObject', ImageObject);
