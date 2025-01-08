import React from 'react';
import RoundedInput from './RoundedInput';

export default {
  title: 'Components/FormInput/RoundedInput',
  component: RoundedInput,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'This is a placeholder',
    },
    type: {
      control: { type: 'text' },
      defaultValue: 'text',
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    errorMessage: {
      control: { type: 'text' },
      defaultValue: 'This is an error message',
    },
    isPassword: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

const Template = (args) => <RoundedInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'This is a placeholder',
  error: false,
  errorMessage: '',
};

export const PasswordVisible = Template.bind({});
PasswordVisible.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  isPassword: true,
  error: false,
};

export const PasswordError = Template.bind({});
PasswordError.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  isPassword: true,
  error: true,
  errorMessage: 'Password is incorrect',
};
