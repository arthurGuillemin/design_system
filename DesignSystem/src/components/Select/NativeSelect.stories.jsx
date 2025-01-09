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
  label: 'Choose a Pet:',
  name: 'pets',
  id: 'pets-select',
  options: [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'hamster', label: 'Hamster' },
    { value: 'parrot', label: 'Parrot' },
    { value: 'spider', label: 'Spider' },
    { value: 'goldfish', label: 'Goldfish' },
  ],
  value: '',
  placeholder: '--Please choose an option--',
  isCustom: false,
  disabled: false,
};
