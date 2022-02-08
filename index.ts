import { ComponentProps, ResponseData } from './types/Component';
import { Context } from './types/InsightDefinition';
import { InsightQuery } from './types/InsightQuery';
import { UseQueryOptions, UseQueryResult } from 'react-query';

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

export function useQueryBuilder(
  context: Context,
  prompts?: ComponentProps['appliedPrompts']
): {
  loading: boolean;
  queryObject: null | InsightQuery;
};

export function useCustomQuery(
  queryObject: null | InsightQuery,
  options?: Omit<UseQueryOptions<any, any, ResponseData, any>, 'queryKey' | 'queryFn'>
): UseQueryResult<ResponseData, any>;

export function useQuery(
  context: Context,
  prompts?: ComponentProps['appliedPrompts'],
  options?: Omit<UseQueryOptions<any, any, ResponseData, any>, 'queryKey' | 'queryFn'>
): UseQueryResult<ResponseData, any> & { queryObject: null | InsightQuery };
