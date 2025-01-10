import Header from './Header';


export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    logo: { control: 'text' },
    title: { control: 'text' },
    icon: { control: 'text' },
    onIconClick: { action: 'Icon clicked!' },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'https://via.placeholder.com/48', // Replace with 'logo' for local assets
  title: 'BLOOM',
  icon: 'https://via.placeholder.com/32', // Replace with 'icon' for local assets
};
