import { Datatype } from './InsightDefinition';
import { Context } from './InsightDefinition';

export interface ComponentsProps {
  insight: {
    data: ResponseData;
    context: Context;
  };
  dimensions: {
    height: number;
    width: number;
  };
  locale: {
    locale: string;
    formatMessage(key: string): string;
  };
}

export type ResponseData = {
  data: Data;
  rowHeaders?: ResponseHeader[];
  colHeaders?: ResponseHeader[];
  measureHeaders: ResponseHeader[];
  footer?: ResponseFooter;
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

type ResponseHeader = {
  label: string;
  dataType: Datatype;
  index: number;
  id: string;
};

type ResponseFooter = {
  pivotColumnHeaders?: string[][];
};
