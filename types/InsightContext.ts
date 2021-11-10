import { Datatype, BindingType, ChartDefinitionBase } from './InsightDefinition';

export type InsightContext<D extends ChartDefinitionBase = ChartDefinitionBase> = {
  /**
   * idnetifier of the insight i`nstance
   */
  id: string;
  /**
   * visualization version
   */
  version?: string;
  /**
   * flex number
   */
  numberOfElementsInRow: number;
  /**
   * widthScale
   */
  widthScale: number;
  /**
   * automaticHeight
   */
  automaticHeight: number;
  /**
   * dynamicHeight
   */
  dynamicHeight?: boolean;
  /**
   * exportToExternalApi
   */
  exportToExternalApi?: boolean;
  /**
   * externalApiLabel
   */
  externalApiLabel?: string;
  /**
   * optional.
   */
  title?: string;
  /**
   * optional.
   */
  description?: string;
  /**
   * optional.
   */
  individualFilters?: FilterState[];
  /**
   * optional.
   */
  aggregateFilters?: FilterState[];
  /**
   * optional.
   */
  distinctFilters?: DistinctFiltersState;
  /**
   * optional.
   */
  sort?: SortState[];
  /**
   * settings state obj <setting_key, setting_value>
   * optional.
   */
  settings?: D['settings'];
  /**
   * insight trays bindings state obj <tray_key, tray_bindings_state>
   * Tray key will include layer key in case of layers enabled
   * optional.
   */
  bindings?: { [metaKey in keyof D['bindings']]: BindingContext<D['bindings'][metaKey]>[] };
  /**
   * visual container dimensions
   */
  dimensions: {
    height: number;
    width: number;
  };
};

export type BindingContext<B extends { [key: string]: any } = { [key: string]: any }> = {
  /**
   * idnetifier of the binding
   * new requirement. Needed to identify multiple bindings with same field, also to be used in personalization reordering measures
   */
  id: string;
  name: string;
  /**
   * binding field {Column, Formula}
   */
  field: BindingField;
  /**
   * settings state obj <setting_key, setting_value>
   * optional.
   */
  settings?: B;
};

export type LayerContext = {
  /**
   * idnetifier of the binding
   * new requirement. Needed to identify multiple bindings with same field, also to be used in personalization reordering measures
   */
  id: string;
  name: string;
  /**
   * settings state obj <setting_key, setting_value>
   * optional.
   */
  settings?: {
    [metaKey: string]: any;
  };

  bindings?: { [metaKey: string]: BindingContext[] };
};

export type FilterState = {
  /**
   * idnetifier of the filter
   * new requirement.
   */
  id: string;
  field: BindingField;
  operator: string; // TODO: define set of operators
  name: string;
  values?: string[];
  options?: {
    caseSensitive?: boolean;
    depth?: number;
    aggregation?: string;
    subQuery: string;
    versionColumn?: {
      column: string;
      name: string;
    };
  };
};

export type DistinctFiltersState = {
  op: string;
  fields: {
    id: string;
    field: BindingField;
    name: string;
  }[];
};

export type SortState = {
  /**
   * idnetifier of the sort
   * new requirement.
   */
  id: string;
  field: BindingField;
  name: string;
  order: 'desc' | 'asce';
};

export type BindingField = ColumnField | FormulaField;
export type ColumnField = {
  column: string;
  datatype?: Datatype;
  supportHierarchy?: boolean;
  function?: BindingType;
  disabled?: boolean;

  supportDataParts?: boolean;
  dataParts?: any[];
  dataPartFormula?: string;
  dataPartsColumnLabel?: string;
  dataPartsColumnDatatype?: Datatype;
  isBusinessViewFormula?: boolean;
};
export type FormulaField = {
  formula: string;
  datatype?: Datatype;
  function: 'formula';
  isDynamicFormula?: boolean;
  disabled?: boolean;
};

export type AnalyzerMode =
  | 'dashboard-insight'
  | 'incorta-view'
  | 'incorta-ad-hoc-view'
  | 'alert-condition';
