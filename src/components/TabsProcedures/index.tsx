import React, { useState } from 'react';
import * as Styles from './styles';

import type{ TabsProceduresProps } from './types';
import type { ProceduresTypes } from '../../types';

export const TabsProcedures = ({
  initialTab = 'STAR',
  onTabChange
}: TabsProceduresProps) => {
  const tabs = [
    'STAR',
    'IAC',
    'TAXI',
    'SID'
  ] as ProceduresTypes[];

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleClickTab = (procedure: ProceduresTypes) => {
    setActiveTab(procedure);
    if (onTabChange) onTabChange(procedure);
  };

  return (
    <Styles.Wrapper>
      {
        tabs.map((tab) => (
          <Styles.Tab
            key={tab}
            type={tab}
            active={tab === activeTab}
            onClick={() => handleClickTab(tab)}
          >
            { tab }
          </Styles.Tab>
        ))
      }
    </Styles.Wrapper>
  );
};
