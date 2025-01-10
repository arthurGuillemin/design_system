import React from 'react';
import NativeSelect from './NativeSelect';

export default {
  title: 'Components/NativeSelect',
  component: NativeSelect,
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    isCustom: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' }, // Use action to log the change event
  },
};

const Template = (args) => <NativeSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Security question:',
  name: 'Questions',
  id: 'Question-select',
  options: [
    { value: 'What is your mother’s maiden name?', label: 'What is your mother’s maiden name? ? ' },
    { value: 'What was the name of your first pet?', label: 'What was the name of your first pet?' },
    { value: 'What was your childhood nickname?', label: 'What was your childhood nickname?' },
    { value: 'What is the name of your favorite teacher?', label: 'What is the name of your favorite teacher?' },
    { value: 'In what city were you born ?', label: 'In what city were you born?' },
    { value: 'What is the name of the street you grew up on?', label: 'What is the name of the street you grew up on?' },
  ],
  value: '',
  placeholder: '--Please choose an option--',
  isCustom: false,
  disabled: false,
};
