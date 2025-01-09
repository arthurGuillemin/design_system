import React from 'react';
import Button from './Button';
import IconButton from '../IconBtn/IconButton'; // Exemple d'icône personnalisée

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Button Label' },
    variant: { control: 'radio', options: ['default', 'active', 'focus'] },
    size: { control: 'radio', options: ['slim', 'large'] },
    disabled: { control: 'boolean', defaultValue: false },
    icon: { control: false },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'default',
  size: 'slim',
};

export const Active = Template.bind({});
Active.args = {
  children: 'Active Button',
  variant: 'active',
  size: 'large',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button with Icon',
  variant: 'default',
  size: 'slim',
  icon: <IconButton type="arrow" alt="Arrow Icon" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'default',
  size: 'slim',
  disabled: true,
};

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  children: 'Large Button',
  variant: 'active',
  size: 'large',
  icon: <IconButton type="account" alt="Account Icon" />,
};
