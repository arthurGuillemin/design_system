import IconButton from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['account', 'arrow', 'password'],
      },
    },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <IconButton {...args} />;

export const SmallAccountIcon = Template.bind({});
SmallAccountIcon.args = {
  type: 'account',
  alt: 'Small Account Icon',
  isActive: false,
  size: 'small',
};

export const LargeAccountIcon = Template.bind({});
LargeAccountIcon.args = {
  type: 'account',
  alt: 'Large Account Icon',
  isActive: true,
  size: 'large',
};

export const SmallArrowIcon = Template.bind({});
SmallArrowIcon.args = {
  type: 'arrow',
  alt: 'Small Arrow Icon',
  isActive: false,
  size: 'small',
};

export const LargeArrowIcon = Template.bind({});
LargeArrowIcon.args = {
  type: 'arrow',
  alt: 'Large Arrow Icon',
  isActive: true,
  size: 'large',
};

export const SmallPasswordIcon = Template.bind({});
SmallPasswordIcon.args = {
  type: 'password',
  alt: 'Small Password Icon',
  isActive: false,
  size: 'small',
};

export const LargePasswordIcon = Template.bind({});
LargePasswordIcon.args = {
  type: 'password',
  alt: 'Large Password Icon',
  isActive: true,
  size: 'large',
};
