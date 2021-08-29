import { Context } from './types/InsightDefinition';

export * from './types/AppContext';

export * from './types/InsightContext';

export * from './types/InsightDefinition';

export * from './types/InsightQuery';

export * from './types/PluginsGroup';

export * from './types/SettingsTypes';

export * from './types/QueryBuilderFactory';

export * from './types/QueryBuilder';

export * from './types/ConditionalFormatting';

/**
 * Visual
 */
export interface VisualProps {
  data: any;
  context: Context;
  drillDown: () => void;
  prompts: any[];
}
