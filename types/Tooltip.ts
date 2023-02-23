export type Position = {
  x: number;
  y: number;
};

export type ContentItem = {
  label: string;
  hasCircularIndicator?: boolean;
  value?: string | JSX.Element;
  color?: string;
};
export type ContentData = string | ContentItem[];

export type Content = { data: ContentData; color?: string; isHTML?: boolean };
export type ExtraProps = Record<string, string> & { withMouseTracking?: boolean };

export type TooltipData = { position: Position; content: Content; options?: ExtraProps };
export type ShowTooltip = (data: TooltipData) => void;
export type HideTooltip = () => void;
