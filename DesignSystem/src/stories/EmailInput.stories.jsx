import React, { useState } from 'react';
import EmailInput from './EmailInput';

export default {
  title: 'Components/FormInput/EmailInput',
  component: EmailInput,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <EmailInput {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  value: '',
  error: '',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  value: 'invalid-email',
  error: 'Votre Email est invalide',
};

export const Focused = Template.bind({});
Focused.args = {
  label: 'Email',
  value: '',
  error: '',
};
Focused.parameters = {
  pseudo: { focus: true },
};
