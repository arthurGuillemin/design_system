import IconButton from './IconButton';
import DefaultIcon from '../assets/icons/Account=Default.svg';
import PressedIcon from '../assets/icons/Account=Account.svg';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultIcon: DefaultIcon,
  pressedIcon: PressedIcon,
  alt: 'Account Icon',
};

export const Active = Template.bind({});
Active.args = {
  defaultIcon: PressedIcon, // Icône marron comme état actif
  pressedIcon: PressedIcon,
  alt: 'Account Icon (Active)',
};
