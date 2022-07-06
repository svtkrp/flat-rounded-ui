import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'FlatRoundedUI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  title: 'Hello world!',
  outlined: true
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  title: 'Click me!',
  danger: true
};
