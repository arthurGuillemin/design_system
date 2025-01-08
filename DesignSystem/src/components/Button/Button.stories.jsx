import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'small-white'], // Les variantes disponibles
    },
    width: {
      control: { type: 'select' },
      options: ['full-width', 'medium-width', 'small-width'], // Les tailles disponibles
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  variant: 'default',
  width: 'medium-width',
  disabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  variant: 'outline',
  width: 'medium-width',
  disabled: false,
};

export const SmallWhite = Template.bind({});
SmallWhite.args = {
  label: 'Small White Button',
  variant: 'small-white',
  width: 'small-width',
  disabled: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  variant: 'default',
  width: 'full-width',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: 'default',
  width: 'medium-width',
  disabled: true,
};
