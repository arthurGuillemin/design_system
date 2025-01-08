
import IconButton from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <IconButton {...args} />;

export const AccountDefault = Template.bind({});
AccountDefault.args = {
  type: 'account',
  alt: 'Account Icon',
  isActive: false,
};

export const AccountActive = Template.bind({});
AccountActive.args = {
  type: 'account',
  alt: 'Account Icon (Active)',
  isActive: true,
};

export const ArrowDefault = Template.bind({});
ArrowDefault.args = {
  type: 'arrow',
  alt: 'Arrow Icon',
  isActive: false,
};

export const ArrowActive = Template.bind({});
ArrowActive.args = {
  type: 'arrow',
  alt: 'Arrow Icon (Active)',
  isActive: true,
};

export const PasswordDefault = Template.bind({});
PasswordDefault.args = {
  type: 'password',
  alt: 'Password Icon',
  isActive: false,
};

export const PasswordActive = Template.bind({});
PasswordActive.args = {
  type: 'password',
  alt: 'Password Icon (Active)',
  isActive: true,
};

