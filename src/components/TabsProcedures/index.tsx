import React, { useState, useEffect, useRef } from 'react';
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
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    };

    if (onTabChange) onTabChange(activeTab);
  }, [activeTab]);

  const handleClickTab = (procedure: ProceduresTypes) => {
    setActiveTab(procedure);
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
