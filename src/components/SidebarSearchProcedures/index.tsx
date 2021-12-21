import React from 'react';
import * as Styles from './styles';

import { Input } from '../Input';
import { TabsProcedures } from '../TabsProcedures';
import { ListProcedures } from '../ListProcedures';

export const SidebarSearchProcedures = () => {

  return (
    <Styles.Wrapper>
      <Styles.SearchForm>
        <Input
          label="Search"
          placeholder="Search for airport ICAO"
        />
      </Styles.SearchForm>
      <Styles.ProceduresTabWrapper>
        <TabsProcedures initialTab='STAR'/>
      </Styles.ProceduresTabWrapper>
      <Styles.FilterProceduresWrapper>
        <Input
          placeholder="Filter by procedure name"
          color='dark'
          size='small'
        />
      </Styles.FilterProceduresWrapper>
      <ListProcedures
        onClickProcedure={id => console.log(`Clicked Item ${id}`)}
        onClickProcedurePin={id => console.log(`Clicked Item Pin ${id}`)}
        procedures={[
          {
            group: "RW08",
            id: "1",
            name: "Chart 1",
            type: "STAR",
            pinned: true,
            selected: true,
          },
          {
            group: "RW08",
            id: "2",
            name: "Chart 2",
            type: "STAR",
            pinned: false,
            selected: false,
          },
          {
            group: "RW09",
            id: "3",
            name: "Chart 3",
            type: "SID",
            pinned: false,
            selected: false,
          },
          {
            group: "RW09",
            id: "4",
            name: "Chart 4",
            type: "SID",
            pinned: false,
            selected: false,
          },
          {
            group: "RW09",
            id: "5",
            name: "Chart 5",
            type: "SID",
            pinned: false,
            selected: false,
          },
          {
            group: "RW08",
            id: "6",
            name: "Chart 6",
            type: "SID",
            pinned: false,
            selected: false,
          }
        ]}
        status='default'
      />
    </Styles.Wrapper>
  )
};
