import { Datatype } from './InsightDefinition';
import { Context } from './InsightDefinition';

export interface ComponentProps {
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
