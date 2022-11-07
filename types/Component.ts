import { ChartDefinitionBase } from '..';
import { BindingContext } from './InsightContext';
import { Datatype } from './InsightDefinition';
import { Context } from './InsightDefinition';
import { Settings, Bindings } from '../generated/context';

export type TContext = ChartDefinitionBase & {
  settings: Settings;
  bindings: Bindings;
};

export interface ComponentProps {
  context: Context<TContext>;
  response: ResponseData;
  onDrillDown: onDrillDownFunction;
  appliedPrompts: AppliedPrompts;
}

export type AppliedPrompts = {
  [column: string]: {
    column: string;
    dataType: string;
    default: boolean;
    id: string;
    label: string;
    mandatory: boolean;
    op: string;
    options: {
      caseSensitive?: boolean;
      depth?: number;
    };
    type: string;
    values: string[];
    variable?: string;
  };
};

export type Drill = {
  bindingContext: BindingContext;
  drill: DrillType;
  isMeasureDrill?: boolean;
  value: string;
  operator: string;
  dataType: string;
};

export type onDrillDownFunction = (drilldown: {
  event?: MouseEvent;
  drills: Drill[];
  measureIndex: 0;
  isDimensionGroupDrills?: boolean;
  clearDrillDown?: boolean;
  allowDrillWithoutRows?: boolean;
  field?: string;
}) => void;

export type DrillType = 'row' | 'column' | 'row-column';

export type ResponseData = {
  data: Data;
  rowHeaders?: Header[];
  colHeaders?: Header[];
  measureHeaders: Header[];
  footer?: Footer;
  complete?: boolean;
  subqueryComplete?: boolean;
  isAggregated?: boolean;
  isSampled?: boolean;
  raw?: boolean;
  startRow: number;
  endRow: number;
  totalRows: number;
};

type Data = Cell[][];

type Cell = {
  value: string;
  formatted?: string;
  link?: string;
};

type Header = {
  label: string;
  dataType: Datatype;
  index: number;
  id: string;
};

type Footer = {
  pivotColumnHeaders?: string[][];
};
