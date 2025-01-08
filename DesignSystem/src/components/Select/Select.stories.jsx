// Select.stories.jsx
import React, { useState } from 'react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <Select {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Security Question',
  options: [
    { label: 'What is your mother’s maiden name?', value: 'What is your mother’s maiden name?' },
    { label: 'What was the name of your first pet?', value: 'What was the name of your first pet?' },
    { label: 'What is your favorite movie?', value: 'What is your favorite movie?' },
  ],
  placeholder: 'Security Question',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Select',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  placeholder: 'Select an option',
  disabled: true,
};
