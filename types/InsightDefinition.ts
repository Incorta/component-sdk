import {
  InsightContext,
  BindingContext,
  LayerContext,
  BindingField,
  FilterState
} from './InsightContext';
import { AppContext } from './AppContext';
import { QueryBuilderFactory } from './QueryBuilderFactory';
import { IQueryBuilder } from './QueryBuilder';

export type ChartDefinitionBase = {
  settings: { [key: string]: any };
  bindings: { [key: string]: { [key: string]: any } };
};

export type InsightDefinition<D extends ChartDefinitionBase = ChartDefinitionBase> = {
  /**
   * General info describing the insight
   */
  info: Info<D>;
  /**
   * Insight-level options (e.g. enableLayers)
   * optional.
   */
  options?: InsightOptions<D>;
  /**
   * Fire when user change insight visualization
   * optional.
   */
  onInsightChange?: ContextFunction<InsightContext, D>;
  /**
   * Fire when user leave current insight visualization
   * optional.
   */
  onInsightLeave?: ContextFunction<InsightContext, D>;
  /**
   * Fire when user leave current insight visualization
   * optional.
   */
  onDoubleClickColumn?: (validTrays: Tray[], queryRule: QueryRole) => Tray | undefined;
  /**
   * optional.
   */
  buildInsightQuery?: (
    queryBuilderFactory: QueryBuilderFactory,
    insightContext: InsightContext,
    drilldowns?: FilterState[]
  ) => IQueryBuilder[];
  /**
   * Insight settings e.g. height, title, ....
   */
  insightSettings: Setting<{ [key: string]: any }, D>[];
  /**
   * Insight general setting e.g. legend, auto-refresh
   * optional.
   */
  settings?: SettingsGroup<D['settings'], D>[];
  /**
   * Layer settings
   * optional.
   */
  layerSettings?: SettingsGroup<{ [key: string]: any }, D>[];
  /**
   * Supported trays to add bindings
   * optional.
   */
  bindingsTrays?: {
    [K in keyof D['bindings']]: Tray<D, K & string>;
  }[keyof D['bindings']][];
};

export type Layer = {
  settings: SettingsGroup[];
};

export type Info<D extends ChartDefinitionBase = ChartDefinitionBase> = {
  /**
   * idnetifier of the insight type
   * should be unique across all insights in the system
   * stored in the meta-data of each instance
   */
  id: string;
  /**
   * to be able to convert the insight back to XML in a correct form
   */
  isGraph: boolean;
  /**
   * chart icon
   */
  icon?: string;
  /**
   * insight version
   * stored in the meta-data of each instance
   */
  version: string;
  /**
   * display name
   */
  name: LocaleString;
  /**
   * insight hint e.g. "Use at least 1 column in Dimension and 1 in Measure."
   */
  hint: LocaleString;
  /**
   * author name
   */
  author: string;
  /**
   * description
   * optional.
   */
  description?: LocaleString;
  /**
   * locale
   * optional.
   */
  locale?: any;
  /**
   * Support building a data query for the engine
   * optional. default: false
   */
  supportEngineQuery?: boolean;
  /**
   * Enable query data listing instead of aggregation
   * optional. default: false
   */
  queryDetailedValues?: ContextFunction<boolean, D>;
  /**
   * Force enable showTotals setting regardless of the settings value
   * optional. default: false
   */
  forceRowTotal?: ContextFunction<boolean, D>;
  /**
   * Force enable columnTotal setting regardless of the settings value
   * optional. default: false
   */
  forceColTotal?: ContextFunction<boolean, D>;
};

export type SettingsGroup<
  S = { [key: string]: any },
  D extends ChartDefinitionBase = ChartDefinitionBase
> = {
  /**
   * display name
   */
  name: LocaleString;
  /**
   * settings in the group
   */
  settings: Setting<S, D>[];
  /**
   * Ignore the group based on the context
   * When ignored, the group doesn't show in the UI, nor stored in the meta-data
   * optional. default: false
   */
  isIgnored?: ContextFunction<boolean, D>;
};

export type Setting<
  S = { [key: string]: any },
  D extends ChartDefinitionBase = ChartDefinitionBase
> = {
  /**
   * stored in the meta-data of each instance, in addition to selected values
   * should be unique across insight-settings
   * should be unique across each binding-settings
   */
  metaKey: Extract<keyof S, string>;
  /**
   * legacy XML Path
   */
  xmlPath?: string;
  /**
   * legacy XML boolean map
   */
  xmlValueMap?: {
    [metaKey: string]: any;
  };
  /**
   * XML array path
   */
  xmlArrayPath?: string;
  /**
   * To fix dataType & datatype
   */
  xmlDataTypeCamelCase?: boolean;
  /**
   * display name
   */
  name: LocaleString;
  /**
   * datatype of the setting
   */
  datatype: SettingDataType;
  /**
   * complexDataType
   */
  complexDataType?: Setting[];
  /**
   * Ignore the setting based on the context
   * When ignored, the setting doesn't show in the UI, nor stored in the meta-data
   * optional. default: false
   */
  isIgnored?: ContextFunction<boolean, D>;
  /**
   * Disable the setting based on the context
   * optional. default: false
   */
  isDisabled?: ContextFunction<boolean, D>;
  /**
   * placeholder for undefined value
   * optional.
   */
  placeholder?: LocaleString;
  /**
   * description, should be displayed on info-icon
   * optional.
   */
  description?: LocaleString | ContextFunction<LocaleString, D>;
  /**
   * warning, should be displayed on warning-icon
   * optional.
   */
  warning?: ContextFunction<LocaleString, D>;
  /**
   * reference to the custom UI components
   * optional.
   */
  uiControlKey?: string;
  /**
   * reference to the custom UI components options
   * optional.
   */
  uiControlOptions?: { [key: string]: any };
  /**
   * the role of the setting in data calculation (e.g. sort, filter)
   * optional.
   */
  queryRole?: SettingQueryRole;
  /**
   * allow multiple values
   * optional. default: false
   */
  isMultiple?: boolean;
  /**
   * default value
   * optional.
   */
  defaultValue?:
    | null
    | string
    | number
    | boolean
    | string[] // incase of "isMultiple = true"
    | number[]
    | boolean[]
    | ContextFunction<null | string | number | boolean | string[] | number[] | boolean[], D>;
  /**
   * query default value
   * consumed in the query but not saved in context
   * optional.
   */
  queryDefaultValue?:
    | null
    | string
    | number
    | boolean
    | string[] // incase of "isMultiple = true"
    | number[]
    | boolean[]
    | ContextFunction<null | string | number | boolean | string[] | number[] | boolean[], D>;

  xmlToJsonValue?: (
    xmlObject: any,
    utils: {
      shortid: any;
      getBindingField: (xmlObject: any) => BindingField;
      getKeyValue: (
        path: string,
        object: any,
        dataType: SettingDataType,
        isMultiple?: boolean,
        valueMap?: any
      ) => any;
      escape: (string?: string | undefined) => string | undefined;
    }
  ) => any;

  jsonToXmlValue?: (
    jsonObject: any,
    utils: {
      shortid: any;
      getBindingField: (jsonObject: any) => any;
      setValueInObject: (xmlPath: string, value: any) => any;
      getInsightContext: () => InsightContext;
      getParentField: () => any;
    }
  ) => any;
  /**
   * set of value options to choose from
   * when defined, the user cannot set a value outside of this set
   * optional.
   */
  valueOptions?: ValueOption[] | ContextFunction<ValueOption[], D>;
  /**
   * affects data calculation
   * optional. default: true
   */
  affectsData?: boolean | (<T>(oldValue: T, newValue: T, utils: { _: any }) => boolean);
  /**
   * value validation
   * optional.
   */
  validator?: SettingValidator;
  /**
   * settings hierarchy
   * optional.
   */
  subSettings?: Setting[];
  /**
   * only for insight settings
   * decide to show/hide the setting for different view-moes of the insight
   * optional. default: [] (shows in all view modes)
   */
  supportedViewModes?: InsightViewMode[];

  sideEffect?: (context: Context) => Context;
  valueSuffix?: string;
};

export type Tray<
  D extends ChartDefinitionBase = ChartDefinitionBase,
  K extends keyof D['bindings'] & string = keyof D['bindings'] & string
> = {
  /**
   * stored in the meta-data as a key to collection of bindings
   * should be unique across trays of same insight
   */
  metaKey: K;
  /**
   * legacy XML Path
   */
  xmlPath?: string;
  /**
   * display name
   */
  name: LocaleString;
  /**
   * the role of the tray's bindings in data calculation
   */
  queryRole?: QueryRole;
  /**
   * the settings definition of the tray's bindings
   */
  bindingSettings: SettingsGroup<D['bindings'][K], D>[];
  /**
   * placeholder when the tray is empty
   * optional.
   */
  placeholder?: LocaleString;
  /**
   * description, should be displayed on info-icon
   * optional.
   */
  description?: LocaleString | ContextFunction<LocaleString, D>;
  /**
   * set of binding-types which the tray accepts
   * optional. default: [] (accepts any binding-type)
   */
  allowBindingTypes?: BindingType[];
  /**
   * minimum number of bindings for a valid insight
   * optional. default: 1
   */
  minCount?: number | ContextFunction<number, D>;
  /**
   * maximum number of bindings for a valid insight
   * Incase maxCount is 0, the Tray is disabled
   * optional. default: -1 (unlimited)
   */
  maxCount?: number | ContextFunction<number, D>;
  /**
   * tray icon
   * optional
   */
  icon?: 'geoAttribute' | 'color' | 'tooltip' | 'size';
  /**
   * hasClearButton
   * to display clear all button or not
   * optional
   */
  hasClearButton?: boolean;
  /**
   * isIgnored
   * to show/hide tray based on context function
   * optional
   */
  isIgnored?: ContextFunction<boolean, D>;
  /**
   * allowDisabledBindings
   * to allow disabled binding fields
   * optional
   */
  allowDisabledBindings?: boolean;
  /**
   * trayGroupUiComponent
   * group ui Component e.g. ant design tabs
   * optional
   */
  trayGroupUiComponent?: 'geo-tabs';
  /**
   * trayGroupId
   * the group id for a tray.
   * optional
   */
  trayGroupId?: string;
  /**
   * grayedOut
   * tray bindings should be ignored in data query while exist in the context
   * optional
   */
  grayedOut?: ContextFunction<boolean, D>;

  sideEffect?: ContextFunction<Context, D>;

  canDrop?: (context: Context, draggedItem: any) => boolean;
  /**
   * support Drilldown mode for tray bindings
   * Incase true: Only one binding is selected to be used in the data query (based on prompts)
   * Incase false: All bindings are used in the data query
   * optional. default: false
   */
  supportDrilldown?: boolean;
};

export type Datatype =
  | 'string'
  | 'boolean'
  | 'integer'
  | 'long'
  | 'float'
  | 'double'
  | 'formula'
  | 'date'
  | 'text'
  | 'timestamp'; // TODO: add all datatypes

export enum InsightViewMode {
  maximized,
  personalization
}

export type BindingType = 'dimension' | 'measure' | 'key' | 'formula' | 'dynamic-formula';
export enum QueryRole {
  row,
  column,
  measure,
  filter,
  sort,
  distinctFilter,
  attribute,
  aggregatedFilter
}

export enum SettingQueryRole {
  showDetails,
  rowSubTotal,
  rowSubTotalFlat,
  rowTotal,
  colSubTotal,
  colTotal,
  othersGroupLimit,
  showHeader,
  formatted,
  joinMeasures,
  filter,
  aggregateFilter,
  distinctFilter,
  // dynamicFormulas, // Note: no need, calculated from filters @QueryBuilder
  sorting,
  startRow,
  pageSize,
  maxRowsLimit,
  maxGroups,
  listAggregation, // Note: extra prop
  aggregation,
  isSampled,
  scale,
  runningTotal,
  baseField,
  baseTable,
  url,
  average,
  valueFormat, // Note: query format is calculated from (valueFormat, dateFormat)
  dateFormat, // Note: query format is calculated from (valueFormat, dateFormat)
  conditionalFormatting,
  showEmptyGroups,
  hierarchyEnabled, // Note: extra prop, take/ignore hierarchyLevel in the query
  hierarchyLevel,
  mergeColumns, // Note: extra prop, take/ignore dynamicHierarchy in the query
  hierarchyDepth,
  hierarchyAttributes,
  dynamicGroupByEnabled, // Note: extra prop, take/ignore dynamicGroupBy in the query
  dynamicGroupByOnlyShowSelectedGroup, // Note: extra prop, default to true,
  dynamicMeasuresEnabled,
  excludeParent, // Note: extra prop, used to calc skipSelf in the query
  sortWithinGroups
}

export type SettingValidator = NumericalValidator | SettingValidatorContextFunction;
export type NumericalValidator = {
  min?: number;
  max?: number;
};
export type SettingValidatorContextFunction = (
  value: any,
  context: Context,
  path?: string
) => { isValid: boolean; message: LocaleString };

export type ValueOption =
  /**
   * short-form {label: val, value: val}
   */
  | string
  | {
      /**
       * display text
       */
      label: LocaleString;
      /**
       * the value to be stored in the meta-data
       */
      value: any;
      /**
       * disabled flag
       */
      disabled?: boolean;
      /**
       * the value to be stored in the meta-data
       */
      category?: any;
      /**
       * extra display text (e.g. "valueFormat" setting)
       * optional.
       */
      label2?: LocaleString;
      /**
       * a fallback value to help generating label2 dynamically incase no value (e.g. number/date format)
       * options.
       */
      valueInherited?: any;
    };

export type ContextFunction<T, D extends ChartDefinitionBase = ChartDefinitionBase> = (
  context: Context<D>
) => T;

export type Context<D extends ChartDefinitionBase = ChartDefinitionBase> = {
  insight: InsightContext<D>;
  app: AppContext;
  /**
   * The current binding
   * This is only available for binding settings
   */
  binding?: BindingContext;
  layer?: LayerContext;
};

export type LocaleString =
  /**
   * string message
   */
  | string
  | {
      /**
       * key to localized string message in translations.json
       */
      key: string;
      values?: { [key: string]: string };
      prefix?: string;
    };

export type InsightOptions<D extends ChartDefinitionBase = ChartDefinitionBase> = {
  /**
   * optional. default: false
   */
  enableLayers?: boolean;
  /**
   * optional. default: false
   */
  enableDownloadXLSX?: boolean;
  /**
   * optional. default: false
   */
  enableDownloadCSV?: boolean;
  /**
   * optional.
   */
  enableSQLQuery?: {
    disabled: ContextFunction<boolean, D>;
  };
  /**
   * optional. default false;
   */
  disableSchemaBrowsing?: boolean;
  /**
   * optional. default false;
   */
  hasNoEngineData?: boolean;
  /**
   * optional. default false;
   */
  enableSaveAsBusinessView?: boolean;
};

export type LayerActionIcon = {
  // TO_DO: adding correct type
  component: any;
  end: boolean;
};

export type LayerAction = {
  id: string;
  icon: LayerActionIcon;
  // TO_DO: adding correct type
  method: any;
  visible: boolean;
  tooltipMessage: string;
};

export type SettingDataType = Datatype | 'color' | 'bindingField' | 'complex';
