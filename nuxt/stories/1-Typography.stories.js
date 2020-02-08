import Title from '~/stories/Typography/Title.vue';
import TextStory from '~/stories/Typography/Text.vue';

export default {
  title: 'Typography',
};

export const title = () => ({
  components: { Title },
  template: '<Title />',
});

export const text = () => ({
  components: { TextStory },
  template: '<TextStory />',
});
