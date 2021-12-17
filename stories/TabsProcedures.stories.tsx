import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TabsProcedures } from '../src/components/TabsProcedures';

import type { ProceduresTypes } from '../src/types';
import type { TabsProceduresProps } from '../src/components/TabsProcedures/types';

const meta: Meta = {
  title: 'Tabs Procedures',
  component: TabsProcedures,
  argTypes: {
    initialTab: {
      control: {
        type: 'select',
        options: ['STAR', 'IAC', 'TAXI', 'SID'] as ProceduresTypes[],
      },
    },
    onTabChange: { action: 'onTabChange' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TabsProceduresProps> = args => <TabsProcedures {...args} />;

export const Default = Template.bind({});

Default.args = {
  initialTab: 'STAR'
} as TabsProceduresProps;
