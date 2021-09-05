import { Datatype } from './InsightDefinition';
import { Context } from './InsightDefinition';

export interface VisualProps {
  insight: {
    data: ResponseData;
    context: Context;
  };
  dimension: {
    height: number;
    width: number;
  };
}

export type ResponseData = {
  data: FlatJSONData;
  rowHeaders?: FlatResponseHeader[];
  colHeaders?: FlatResponseHeader[];
  measureHeaders: FlatResponseHeader[];
  footer?: FlatResponseFooter;
  complete?: boolean;
  subqueryComplete?: boolean;
  isAggregated?: boolean;
  isSampled?: boolean;
  raw?: boolean;
  startRow: number;
  endRow: number;
  totalRows: number;
};

type FlatJSONData = FlatJSONCell[][];

type FlatJSONCell = {
  value: string;
  formatted?: string;
  link?: string;
};

type FlatResponseHeader = {
  label: string;
  dataType: Datatype;
  index: number;
  id: string;
};

type FlatResponseFooter = {
  pivotColumnHeaders?: string[][];
};
