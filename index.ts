import { ComponentProps } from './types/Component';
import { Context } from './types/InsightDefinition';

export * from './types/AppContext';

export * from './types/InsightContext';

export * from './types/InsightDefinition';

export * from './types/InsightQuery';

export * from './types/PluginsGroup';

export * from './types/SettingsTypes';

export * from './types/QueryBuilderFactory';

export * from './types/QueryBuilder';

export * from './types/Component';

export function useLocale(): {
  locale: string;
  formatMessage(key: string): string;
};

export function useContext(): ComponentProps['context'];

export function usePrompts(): {
  prompts: ComponentProps['appliedPrompts'];
  drillDown: ComponentProps['onDrillDown'];
};

export function useQueryBuilder(context: Context, prompts?: any): any;

export function useQuery(queryObject: any): any;
