import {
  ConditionalFormat,
  FieldFormat,
  Filter,
  Hierarchy,
  InsightQuery,
  InsightQueryQueryExecutionModeEnum,
  JoinRule,
  QueryField,
  SortRequest
} from './InsightQuery';
import { BindingField, DistinctFiltersState, FilterState, SortState } from './InsightContext';

export type QuerySettings = {
  showDetails?: boolean;
  rowSubTotal?: boolean;
  rowTotal?: boolean;
  colSubTotal?: boolean;
  colTotal?: boolean;
  othersGroupLimit?: number;
  showHeader?: boolean;
  formatted?: boolean;
  joinMeasures?: boolean;
  startRow?: number;
  pageSize?: number;
  maxRowsLimit?: number;
  maxGroups?: number;
  version?: number;
  isSampled?: boolean;
  sortWithinGroups?: boolean;
};

export type QueryMeasureSettings = {
  aggregation?: string;
  scale?: string;
  runningTotal?: boolean;
  baseField?: string;
  url?: string;
  formats?: Array<FieldFormat>;
  conditionalFormatting?: ConditionalFormat[];
};

export type QueryRowSettings = {
  url?: string;
  showEmptyGroups?: boolean;
  formats?: Array<FieldFormat>;
  hierarchy?: Hierarchy;
  subTotal?: boolean;
};

export type QueryColumnSettings = {
  formats?: Array<FieldFormat>;
  subTotal?: boolean;
};

export enum QueryType {
  Analyze = 'analyze',
  View = 'view'
}

export type QueryRunner = (query: InsightQuery) => Promise<any>;

export interface IQueryBuilder {
  query: InsightQuery;
  dynamicGroupByEnabled: boolean;
  dynamicGroupByOnlyShowSelectedGroup: boolean;
  dynamicGroupByFieldIndex: number;

  setSettings(settings: QuerySettings, merge: boolean): void;

  addMeasure(
    id: string,
    label: string,
    field: BindingField,
    settings: QueryMeasureSettings,
    filters: FilterState[],
    sourceField?: string
  ): void;

  addRow(
    id: string,
    label: string,
    field: BindingField,
    settings: QueryRowSettings,
    sorts: SortState[]
  ): void;

  addColumn(
    id: string,
    label: string,
    field: BindingField,
    settings: QueryColumnSettings,
    sorts: SortState[]
  ): void;

  setFilters(filters: FilterState[]): void;

  setSorts(sorts: SortState[]): void;

  setAggregateFilters(filters: FilterState[]): void;

  setDistinctFilters(distinctFilter?: DistinctFiltersState): void;

  setJoinRules(joinRules: JoinRule[]): void;

  addFilters(filters: Filter[]): void;

  setDynamicGroupBySettings(
    dynamicGroupByEnabled: boolean,
    dynamicGroupByOnlyShowSelectedGroup: boolean
  ): void;

  setDynamicGroupByFieldIndex(index: number): void;
  setPaginationStartRow(startRow: number): void;
  setPrioritySort(sort: SortRequest): void;

  setQueryAudit(
    dashboardGuid: string,
    dashboardLayoutGuid: string,
    insightGuid: string,
    dashboardName: string,
    insightName: string
  ): void;

  setFind(value: string, fields: QueryField[]): void;

  setQueryExecutionMode(queryExecutionMode: InsightQueryQueryExecutionModeEnum): void;

  toQuery(queryRunner: QueryRunner): Promise<InsightQuery>;
}
