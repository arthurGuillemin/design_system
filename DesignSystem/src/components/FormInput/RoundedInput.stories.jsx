import React from 'react';
import RoundedInput from './RoundedInput';

export default {
  title: 'Components/FormInput/RoundedInput',
  component: RoundedInput,
  argTypes: {
    label: { control: 'text', defaultValue: 'Label' },
    placeholder: { control: 'text', defaultValue: 'Enter your text...' },
    type: { control: 'text', defaultValue: 'text' },
    error: { control: 'boolean', defaultValue: false },
    errorMessage: { control: 'text', defaultValue: 'Error message' },
    isPassword: { control: 'boolean', defaultValue: false },
  },
};

const Template = (args) => <RoundedInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  placeholder: 'Enter your text...',
  error: false,
  errorMessage: '',
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  isPassword: true,
  error: false,
  errorMessage: '',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Input with Error',
  placeholder: 'Enter your text...',
  error: true,
  errorMessage: 'This field is required.',
};
