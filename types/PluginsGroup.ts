import { InsightDefinition, LocaleString } from './InsightDefinition';

export type PluginsGroup = {
  groupName: LocaleString;
  plugins: InsightDefinition<any>[];
};

export default PluginsGroup;
