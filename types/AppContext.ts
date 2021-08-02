import { AnalyzerMode } from './InsightContext';

export type AppContext = {
  color_palette: string[];
  features: { [key: string]: boolean };
  loginInfo: { [key: string]: any };
  analyzerMode?: AnalyzerMode;
};
