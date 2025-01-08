import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Label' },
    variant: { 
      control: { type: 'radio' }, 
      options: ['default', 'active', 'focus'], 
      defaultValue: 'default' 
    },
    size: { 
      control: { type: 'radio' }, 
      options: ['slim', 'large'], 
      defaultValue: 'slim' 
    },
    width: { 
      control: { type: 'radio' }, 
      options: ['full-width', 'medium-width', 'small-width'], 
      defaultValue: 'medium-width' 
    },
    disabled: { control: 'boolean', defaultValue: false },
    icon: { control: 'text', defaultValue: '➤' },
  },
};

const Template = (args) => <Button {...args} />;

export const Slim = Template.bind({});
Slim.args = {
  children: 'Label',
  variant: 'default',
  size: 'slim',
  icon: '➤',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Label',
  variant: 'default',
  size: 'large',
  icon: '➤',
};
