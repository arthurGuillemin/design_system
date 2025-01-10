import React from "react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    title: { control: "text" },
    logo: { control: "text" },
    children: { control: "text" },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "My Header",
  logo: "https://via.placeholder.com/150",
  children: <button>Click Me</button>,
};

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  title: "Header Without Logo",
  logo: "",
  children: <button>Click Me</button>,
};
