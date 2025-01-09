import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'text', defaultValue: '' },
    alt: { control: 'text', defaultValue: 'User Avatar' },
    size: { control: 'radio', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '', // Pas de source, l'image par défaut sera utilisée
  alt: 'Default Avatar',
  size: 'medium',
};

export const CustomImage = Template.bind({});
CustomImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Custom Avatar',
  size: 'large',
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  src: '',
  alt: 'Small Default Avatar',
  size: 'small',
};
