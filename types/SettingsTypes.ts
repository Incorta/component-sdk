export interface DashboardDrilldownValue {
  includeRuntimeFilters?: boolean;
  dashboardId?: string;
  dashboardName?: string;
  layoutGuid?: string;
  layoutName?: string;
}

export type DrillDown = [DashboardDrilldownValue | undefined];

export interface PlotBand {
  color?: string | null;
  label: string;
  start: number | undefined;
  stop: number | undefined;
}

export interface TrendLinesValue {
  // Average Line
  averageLine?: boolean;
  averageLineStyle?: string;
  // Linear Trend
  enableTrendline?: boolean;
  trendLineStyle?: string;
  // Simple Moving AveragePeriod
  addSMA?: boolean;
  periodSMA?: string;
  SMALineStyle?: string;
  // Exp. Moving Average
  enableEMA?: boolean;
  periodEMA?: string;
  EMALineStyle?: string;
}

export interface Range {
  stop: number;
  color: string;
}

export interface Condition {
  value: string;
  op: string;
  color?: string | null;
  background?: string | null;
}
