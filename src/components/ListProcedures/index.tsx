import React, { Fragment } from 'react'
import * as Styles from './styles';

import type { 
  ListProceduresProps,
  ListProceduresStatus,
  ProceduresGroups,
  Procedure,
} from './types';

export const ListProcedures = (props: ListProceduresProps) => {
  const { procedures } = props;
  const proceduresByGroup = procedures.reduce((acc: ProceduresGroups, procedure) => {
    const { group } = procedure;
    if (!acc[group]) acc[group] = [];
    acc[group].push(procedure);
    return acc;
  }, {});
  const groupsNames = Object.keys(proceduresByGroup);

  const handleClickProcedure = (event: React.MouseEvent<HTMLElement>, procedure: Procedure) => {
    event.stopPropagation();
    if (props.onClickProcedure) props.onClickProcedure(procedure.id);
  }

  const handleClickProcedurePin = (event: React.MouseEvent<HTMLElement>, procedure: Procedure) => {
    event.stopPropagation();
    if (props.onClickProcedurePin) props.onClickProcedurePin(procedure.id);
  }

  if (props.status === 'loading') {
    return (
      <Styles.Wrapper>
        <Styles.Loader />
      </Styles.Wrapper>
    )
  }

  if (props.status !== 'default') {
    const messages = {
      empty: 'No procedures found',
      error: 'Something went wrong',
      message: props.message,
    } as {
      [key in ListProceduresStatus]: string;
    }

    return (
      <Styles.Wrapper>
        <Styles.Message>{ messages[props.status] }</Styles.Message>
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper>
      {
        groupsNames.map((group) => (
          <Fragment key={proceduresByGroup[group][0].group}>
            { 
              groupsNames.length > 1 && (
                <Styles.GroupLabel>
                  { proceduresByGroup[group][0].group }
                </Styles.GroupLabel>
              )
            }
            { 
              proceduresByGroup[group].map((procedure) => (
                <Styles.Item
                  key={ procedure.id }
                  isActive={ procedure.selected }
                  onClick={(event) => handleClickProcedure(event, procedure)}
                >
                  <Styles.ItemText>{ procedure.name }</Styles.ItemText>
                  <Styles.ItemBtn onClick={(event) => handleClickProcedurePin(event, procedure)}>
                    <i className={`ri-pushpin-2-${ procedure.pinned ? 'fill' : 'line' }`}></i>
                  </Styles.ItemBtn>
                </Styles.Item>
              ))
            }
          </Fragment>
        ))
      }
    </Styles.Wrapper>
  )
}
