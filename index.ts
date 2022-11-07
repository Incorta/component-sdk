import React from 'react';
import {
  AppliedPrompts,
  ComponentProps,
  onDrillDownFunction,
  ResponseData
} from './types/Component';
import { ChartDefinitionBase, Context } from './types/InsightDefinition';
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
  prompts: AppliedPrompts;
  drillDown: onDrillDownFunction;
  presentationVariables: any[];
  setPresentationVariableValue: (key, value) => void;
};

export function useQueryBuilder<T extends ChartDefinitionBase>(
  context: Context<T>,
  prompts?: AppliedPrompts
): UseQueryResult<InsightQuery, any>;

export function useCustomQuery(
  queryObject: null | undefined | InsightQuery,
  options?: Omit<UseQueryOptions<any, any, ResponseData, any>, 'queryKey' | 'queryFn'>
): UseQueryResult<ResponseData, any>;

export function useQuery<T extends ChartDefinitionBase>(
  context: Context<T>,
  prompts?: AppliedPrompts,
  options?: Omit<UseQueryOptions<any, any, ResponseData, any>, 'queryKey' | 'queryFn'>
): UseQueryResult<ResponseData, any> & {
  queryBuilderResult: UseQueryResult<ResponseData, any>;
  context: null | Context<T>;
  prompts: null | AppliedPrompts;
};

export function usePrivateData(): {
  privateData: any;
  setPrivateData: (privateData: any) => void;
};

type LoaderOverlayProps = React.PropsWithChildren<{
  data?: any;
  isLoading?: boolean;
}>;

export function LoadingOverlay(props: LoaderOverlayProps): any;

type ErrorOverlayProps = React.PropsWithChildren<{
  isError?: boolean;
  error?: any;
}>;

export function ErrorOverlay(props: ErrorOverlayProps): any;
