import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner } from '../src/components/Spinner';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    controls: { expanded: false },
  },
};

export default meta;

const Template: Story = args => <Spinner {...args} />;

export const Default = Template.bind({});