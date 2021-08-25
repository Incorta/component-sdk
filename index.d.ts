import { Context } from './types/InsightDefinition';

export { AppContext } from './types/AppContext';

export {
  AnalyzerMode,
  BindingContext,
  BindingField,
  ColumnField,
  DistinctFiltersState,
  FilterState,
  FormulaField,
  InsightContext,
  LayerContext,
  SortState
} from './types/InsightContext';

export {
  BindingType,
  ChartDefinitionBase,
  Context,
  ContextFunction,
  Datatype,
  Info,
  InsightDefinition,
  InsightOptions,
  InsightViewMode,
  Layer,
  LayerAction,
  LayerActionIcon,
  LocaleString,
  NumericalValidator,
  QueryRole,
  Setting,
  SettingQueryRole,
  SettingsGroup,
  SettingValidator,
  SettingValidatorContextFunction,
  Tray,
  ValueOption,
  SettingDataType
} from './types/InsightDefinition';

export {
  JoinRule,
  AggregateFilter,
  AuditingInfo,
  ColumnDimension,
  ConditionalFormat,
  DistinctFilter,
  Field,
  FieldFormat,
  Filter,
  Hierarchy,
  InsightQuery,
  InsightQueryQueryExecutionModeEnum,
  Measure,
  Options,
  QueryField,
  RowDimension,
  Search,
  SortRequest,
  Value,
  VarKey
} from './types/InsightQuery';

export { PluginsGroup } from './types/PluginsGroup';

export {
  DashboardDrilldownValue,
  DrillDown,
  PlotBand,
  TrendLinesValue
} from './types/SettingsTypes';

export { QueryBuilderFactory } from './types/QueryBuilderFactory';

export {
  IQueryBuilder,
  QueryColumnSettings,
  QueryMeasureSettings,
  QueryRowSettings,
  QueryRunner,
  QuerySettings,
  QueryType
} from './types/QueryBuilder';

export { Condition } from './types/ConditionalFormatting';

/**
 * Visual
 */
export interface VisualProps {
  data: any;
  context: Context;
  drillDown: () => void;
  prompts: any[];
}

/**
 * Tooltip
 */
export const tooltip: TooltipService;

export interface TooltipService {
  show: () => void;
  hide: () => void;
  changePosition: (x: number, y: number) => void;
}
