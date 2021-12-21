import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src/components/Input';
import type { InputProps, InputSizeTypes, InputColors } from '../src/components/Input/types';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: { action: 'onChange' },
    label: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['dark', 'default'] as InputColors[],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'default'] as InputSizeTypes[],
      },
    },
    initialValue: {
      control: {
        type: 'text',
      }
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'My Input',
  placeholder: 'Placeholder',
  initialValue: 'Initial value',
} as InputProps;