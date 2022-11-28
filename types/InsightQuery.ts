// TODO: these types are copied from 'services/bff/client', should be extracted at bff generation in separate types file

/**
 *
 * @export
 * @interface InsightQuery
 */
export interface InsightQuery {
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  showDetails?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  rowTotal?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  rowSubTotal?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  colTotal?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  colSubTotal?: boolean;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  othersGroupLimit?: number;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  showHeader?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  isSampled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  formatted?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  joinMeasures?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  ensureParentSubtotal?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  skipSelf?: boolean;
  /**
   *
   * @type {Array<Filter>}
   * @memberof InsightQuery
   */
  filters?: Array<Filter>;
  /**
   *
   * @type {Array<AggregateFilter>}
   * @memberof InsightQuery
   */
  aggregateFilters?: Array<AggregateFilter>;
  /**
   *
   * @type {DistinctFilter}
   * @memberof InsightQuery
   */
  distinctFilter?: DistinctFilter;
  /**
   *
   * @type {Array<string>}
   * @memberof InsightQuery
   */
  dynamicFormulas?: Array<string>;
  /**
   *
   * @type {Array<SortRequest>}
   * @memberof InsightQuery
   */
  sorting?: Array<SortRequest>;
  /**
   *
   * @type {Search}
   * @memberof InsightQuery
   */
  search?: Search;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  startRow?: number;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  endRow?: number;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  maxRows?: number;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  maxGroups?: number;
  /**
   *
   * @type {AuditingInfo}
   * @memberof InsightQuery
   */
  auditingInfo?: AuditingInfo;
  /**
   *
   * @type {Array<JoinRule>}
   * @memberof InsightQuery
   */
  joinRules?: Array<JoinRule>;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  version: number;
  /**
   *
   * @type {Array<Measure>}
   * @memberof InsightQuery
   */
  measures: Array<Measure>;
  /**
   *
   * @type {Array<RowDimension>}
   * @memberof InsightQuery
   */
  rows?: Array<RowDimension>;
  /**
   *
   * @type {Array<ColumnDimension>}
   * @memberof InsightQuery
   */
  columns?: Array<ColumnDimension>;
  /**
   *
   * @type {string}
   * @memberof InsightQuery
   */
  queryType?: string;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  usingNewQP?: boolean;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  pageSize?: number;
  /**
   *
   * @type {number}
   * @memberof InsightQuery
   */
  maxRowsLimit?: number;
  /**
   *
   * @type {boolean}
   * @memberof InsightQuery
   */
  debugging?: boolean;
  queryExecutionMode?: InsightQueryQueryExecutionModeEnum;
  mlOptions?: any[];
  sortWithinGroups?: boolean;
  subQueries?: { [key: string]: InsightQuery };
  format?: InsightQueryFormatEnum | undefined;
}

/**
 *
 * @export
 * @interface Filter
 */
export interface Filter {
  /**
   *
   * @type {string}
   * @memberof Filter
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof Filter
   */
  fieldKey?: string;
  /**
   *
   * @type {string}
   * @memberof Filter
   */
  formulaKey?: string;
  /**
   *
   * @type {VarKey}
   * @memberof Filter
   */
  varKey?: VarKey;
  /**
   *
   * @type {Value}
   * @memberof Filter
   */
  value?: Value;
  /**
   *
   * @type {boolean}
   * @memberof Filter
   */
  prompt?: boolean;
  /**
   *
   * @type {string}
   * @memberof Filter
   */
  label?: string;
}

/**
 *
 * @export
 * @interface AggregateFilter
 */
export interface AggregateFilter {
  /**
   *
   * @type {string}
   * @memberof AggregateFilter
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof AggregateFilter
   */
  field?: string;
  /**
   *
   * @type {string}
   * @memberof AggregateFilter
   */
  op?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof AggregateFilter
   */
  values?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof AggregateFilter
   */
  aggregation?: string;
}

/**
 *
 * @export
 * @interface DistinctFilter
 */
export interface DistinctFilter {
  /**
   *
   * @type {string}
   * @memberof DistinctFilter
   */
  op?: string;
  /**
   *
   * @type {Array<Field>}
   * @memberof DistinctFilter
   */
  fields?: Array<Field>;
}

/**
 *
 * @export
 * @interface SortRequest
 */
export interface SortRequest {
  /**
   *
   * @type {string}
   * @memberof SortRequest
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof SortRequest
   */
  field?: string;
  /**
   *
   * @type {string}
   * @memberof SortRequest
   */
  label?: string;
  /**
   *
   * @type {string}
   * @memberof SortRequest
   */
  formula?: string;
  /**
   *
   * @type {string}
   * @memberof SortRequest
   */
  dir?: string;
}

/**
 *
 * @export
 * @interface AuditingInfo
 */
export interface AuditingInfo {
  /**
   *
   * @type {string}
   * @memberof AuditingInfo
   */
  dashboardGuid?: string;
  /**
   *
   * @type {string}
   * @memberof AuditingInfo
   */
  insightGuid?: string;
  /**
   *
   * @type {string}
   * @memberof AuditingInfo
   */
  dashboardLayoutGuid?: string;
  /**
   *
   * @type {string}
   * @memberof AuditingInfo
   */
  dashboardName?: string;
  /**
   *
   * @type {string}
   * @memberof AuditingInfo
   */
  insightName?: string;
}

/**
 *
 * @export
 * @interface JoinRule
 */
export interface JoinRule {
  /**
   *
   * @type {string}
   * @memberof JoinRule
   */
  child: string;
  /**
   *
   * @type {string}
   * @memberof JoinRule
   */
  parent: string;
  /**
   *
   * @type {string}
   * @memberof JoinRule
   */
  joinPath: string;
}

/**
 *
 * @export
 * @interface Measure
 */
export interface Measure {
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  field?: string;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  formula?: string;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  label?: string;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  aggregation?: string;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  scale?: string;
  /**
   *
   * @type {boolean}
   * @memberof Measure
   */
  runningTotal?: boolean;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  baseField?: string;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  url?: string;
  /**
   *
   * @type {boolean}
   * @memberof Measure
   */
  average?: boolean;
  /**
   *
   * @type {Array<FieldFormat>}
   * @memberof Measure
   */
  formats?: Array<FieldFormat>;
  /**
   *
   * @type {Array<Filter>}
   * @memberof Measure
   */
  filters?: Array<Filter>;
  /**
   *
   * @type {Array<string>}
   * @memberof Measure
   */
  dynamicFormulas?: Array<string>;
  /**
   *
   * @type {Array<ConditionalFormat>}
   * @memberof Measure
   */
  conditionalFormatting?: Array<ConditionalFormat>;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  baseTable?: string;
  /**
   *
   * @type {string}
   * @memberof Measure
   */
  sourceField?: string;
}

/**
 *
 * @export
 * @interface Field
 */
export interface Field {
  /**
   *
   * @type {string}
   * @memberof Field
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Field
   */
  label?: string;
  /**
   *
   * @type {string}
   * @memberof Field
   */
  name?: string;
}

/**
 *
 * @export
 * @interface ConditionalFormat
 */
export interface ConditionalFormat {
  /**
   *
   * @type {string}
   * @memberof ConditionalFormat
   */
  operator?: string;
  /**
   *
   * @type {string}
   * @memberof ConditionalFormat
   */
  value?: string;
  /**
   *
   * @type {string}
   * @memberof ConditionalFormat
   */
  textColor?: string;
  /**
   *
   * @type {string}
   * @memberof ConditionalFormat
   */
  backgroundColor?: string;
  /**
   *
   * @type {string}
   * @memberof ConditionalFormat
   */
  formula?: string;
}

/**
 *
 * @export
 * @interface RowDimension
 */
export interface RowDimension {
  /**
   *
   * @type {string}
   * @memberof RowDimension
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof RowDimension
   */
  field?: string;
  /**
   *
   * @type {string}
   * @memberof RowDimension
   */
  formula?: string;
  /**
   *
   * @type {string}
   * @memberof RowDimension
   */
  label?: string;
  /**
   *
   * @type {Array<FieldFormat>}
   * @memberof RowDimension
   */
  formats?: Array<FieldFormat>;
  /**
   *
   * @type {Array<SortRequest>}
   * @memberof RowDimension
   */
  sorting?: Array<SortRequest>;
  /**
   *
   * @type {string}
   * @memberof RowDimension
   */
  url?: string;
  /**
   *
   * @type {boolean}
   * @memberof RowDimension
   */
  showEmptyGroups?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RowDimension
   */
  datePart?: boolean;
  /**
   *
   * @type {Hierarchy}
   * @memberof RowDimension
   */
  hierarchy?: Hierarchy;
  /**
   *
   * @type {boolean}
   * @memberof RowDimension
   */
  rowSubTotal?: boolean;
  /**
   *
   * @type {GeoInformation}
   * @memberof RowDimension
   */
  geoInformation?: GeoInformation;
}

/**
 *
 * @export
 * @interface VarKey
 */
export interface VarKey {
  /**
   *
   * @type {string}
   * @memberof VarKey
   */
  variable?: string;
  /**
   *
   * @type {string}
   * @memberof VarKey
   */
  dataType?: string;
  /**
   *
   * @type {string}
   * @memberof VarKey
   */
  column?: string;
}

/**
 *
 * @export
 * @interface Hierarchy
 */
export interface Hierarchy {
  /**
   *
   * @type {number}
   * @memberof Hierarchy
   */
  level?: number;
  /**
   *
   * @type {number}
   * @memberof Hierarchy
   */
  depth?: number;
  /**
   *
   * @type {boolean}
   * @memberof Hierarchy
   */
  excludeParent?: boolean;
  /**
   *
   * @type {Array<Field>}
   * @memberof Hierarchy
   */
  attributes?: Array<Field>;
}
/**
 *
 * @export
 * @interface ColumnDimension
 */
export interface ColumnDimension {
  /**
   *
   * @type {string}
   * @memberof ColumnDimension
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ColumnDimension
   */
  field?: string;
  /**
   *
   * @type {string}
   * @memberof ColumnDimension
   */
  formula?: string;
  /**
   *
   * @type {string}
   * @memberof ColumnDimension
   */
  label?: string;
  /**
   *
   * @type {Array<FieldFormat>}
   * @memberof ColumnDimension
   */
  formats?: Array<FieldFormat>;
  /**
   *
   * @type {Array<SortRequest>}
   * @memberof ColumnDimension
   */
  sorting?: Array<SortRequest>;
  /**
   *
   * @type {boolean}
   * @memberof ColumnDimension
   */
  datePart?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ColumnDimension
   */
  colSubTotal?: boolean;
}
/**
 *
 * @export
 * @interface Value
 */
export interface Value {
  /**
   *
   * @type {Array<string>}
   * @memberof Value
   */
  values?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof Value
   */
  op?: string;
  /**
   *
   * @type {Options}
   * @memberof Value
   */
  options?: Options;
}

/**
 *
 * @export
 * @interface Options
 */
export interface Options {
  /**
   *
   * @type {boolean}
   * @memberof Options
   */
  caseSensitive?: boolean;
  /**
   *
   * @type {number}
   * @memberof Options
   */
  depth?: number;
  /**
   *
   * @type {number}
   * @memberof Options
   */
  level?: number;
}

/**
 *
 * @export
 * @interface QueryField
 */
export interface QueryField {
  /**
   *
   * @type {string}
   * @memberof QueryField
   */
  field?: string;
  /**
   *
   * @type {string}
   * @memberof QueryField
   */
  formula?: string;
  /**
   *
   * @type {string}
   * @memberof QueryField
   */
  label?: string;
  /**
   *
   * @type {Array<FieldFormat>}
   * @memberof QueryField
   */
  formats?: Array<FieldFormat>;
}

/**
 *
 * @export
 * @interface Search
 */
export interface Search {
  /**
   *
   * @type {string}
   * @memberof Search
   */
  value?: string;
  /**
   *
   * @type {Array<QueryField>}
   * @memberof Search
   */
  fields?: Array<QueryField>;
}

/**
 *
 * @export
 * @interface FieldFormat
 */
export interface FieldFormat {
  /**
   *
   * @type {string}
   * @memberof FieldFormat
   */
  format?: string;
  /**
   *
   * @type {string}
   * @memberof FieldFormat
   */
  type?: string;
}

/**
 *
 * @export
 * @interface GeoInformation
 */
export interface GeoInformation {
  /**
   *
   * @type {string}
   * @memberof GeoInformation
   */
  role: string;
  /**
   *
   * @type {string}
   * @memberof GeoInformation
   */
  required: boolean;
}

export enum InsightQueryQueryExecutionModeEnum {
  AUTO = 'AUTO',
  INCORTAENGINE = 'INCORTA_ENGINE',
  SPARKSQLENGINE = 'SPARK_SQL_ENGINE',
  INCORTASQLENGINE = 'INCORTA_SQL_ENGINE'
}

export enum InsightQueryFormatEnum {
  Json = 'json',
  Csv = 'csv',
  Xlsx = 'xlsx'
}
