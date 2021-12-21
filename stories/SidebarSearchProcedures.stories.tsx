import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SidebarSearchProcedures } from '../src/components/SidebarSearchProcedures';

const meta: Meta = {
  title: 'Sidebar Search Procedures',
  component: SidebarSearchProcedures,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <SidebarSearchProcedures {...args} />;

export const Default = Template.bind({});

Default.args = {};