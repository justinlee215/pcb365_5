import NavBar from "../components/navBar/NavBar";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "NavBar",
  component: NavBar,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Navbar = (args) => <NavBar {...args} />;

export const Template = (args) => <NavBar {...args} />;

Navbar.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/5AiuW5qbxE1xDpBqGLkLUc/Justin-Lee's-team-library?node-id=411%3A2",
  },
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "NavBar",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "NavBar",
};

export const Large = Template.bind({});
Large.args = {
  label: "NavBar",
  size: "large",
};
