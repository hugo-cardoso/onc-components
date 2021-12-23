import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from '../src/components/Text';
import type { TextProps } from '../src/components/Text/types';

const meta: Meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'My text',
} as TextProps;