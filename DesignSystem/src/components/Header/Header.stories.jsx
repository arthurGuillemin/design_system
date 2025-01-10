import React from "react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    logo: { control: "text" },
    title: { control: "text" },
    onAccountClick: { action: "Account icon clicked!" },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: "https://via.placeholder.com/48",
  title: "BLOOM",
};
