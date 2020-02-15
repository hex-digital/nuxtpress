import { hasOwnProp } from '~/utilities/typeHelpers';
import DefaultTemplate from '~/templates/default';
import ExampleTemplate from '~/templates/example';

const templateToComponent = {
  'templates/example-template.php': ExampleTemplate,
};

const canFindTemplate = {
  computed: {
    template() {
      if (this.post) {
        if (hasOwnProp(templateToComponent, this.post.template)) {
          return templateToComponent[this.post.template];
        }
      }

      return DefaultTemplate;
    },
  },
};

export default canFindTemplate;
