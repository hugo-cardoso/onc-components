import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/components/Button';
import type { ButtonProps, ButtonColorTypes, ButtonSizeTypes } from '../src/components/Button/types';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    text: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'] as ButtonColorTypes[],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'] as ButtonSizeTypes[],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'MyButton',
} as ButtonProps;