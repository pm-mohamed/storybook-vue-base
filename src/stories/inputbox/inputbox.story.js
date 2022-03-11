import InputBox from '../../components/inputbox.vue'

import 'semantic-ui-css/semantic.min.css'

const templateDecorator = () => ({
  template: `
<div class="ui form"><story/></div>
	`,
});

export default {
  title: 'InputBox',
  component: InputBox,
  argTypes: {
    title: { control: 'text' },
    isValide: {control: 'boolean'}
  },
  decorators: [templateDecorator],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputBox },
  template: `<a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />`,
  data() {
    return { text: '', name: 'InputBox' }
  }
});

export const Title = Template.bind({});
Title.args = {
  title: 'Search Input Primary',
  isValide: false,
};
