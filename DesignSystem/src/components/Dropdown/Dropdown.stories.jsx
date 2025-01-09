import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    menuItems: {
      control: {
        type: "array",
      },
      defaultValue: ["mon panier", "parametre", "aides & contact"],
    },
    isActive: {
        control: {
          type: 'boolean',
        },
      },
    onItemClick: { action: "itemClicked" 
    },
    onToggle: { action: "toggled"
     },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: ["mon panier", "parametre", "aides & contact"],
  isActive: false,
};