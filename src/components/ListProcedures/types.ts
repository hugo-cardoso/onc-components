import type { ProceduresTypes } from '../../types';

export type ListProceduresStatus = 'default' | 'loading' | 'error' | 'empty';

export type Procedure = {
  id: string;
  name: string;
  type: ProceduresTypes;
  group: string;
  pinned: boolean;
  selected: boolean;
}

export type ProceduresGroups = {
  [key: string]: Procedure[];
}

export type ListProceduresProps = {
  procedures: Procedure[];
  status: ListProceduresStatus;
  onClickProcedure?: (id: string) => void;
  onClickProcedurePin?: (id: string) => void;
};