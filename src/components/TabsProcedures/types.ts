import type { ProceduresTypes } from '../../types';

export type TabsProceduresProps = {
  initialTab: ProceduresTypes;
  onTabChange?: (procedure: ProceduresTypes) => void;
};
