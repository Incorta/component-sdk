export type Position = {
  x: number;
  y: number;
};

type BoundingRect = Position & {
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

type ContentItem = {
  label: string;
  hasCircularIndicator?: boolean;
  value?: string | JSX.Element;
  color?: string;
};
type ContentData = string | ContentItem[];

type Content = { data: ContentData; color?: string; isHTML?: boolean };
type Options = Record<string, string> & {
  withMouseTracking?: boolean;
  withWrapper?: boolean;
  isCentered?: boolean;
  showDelay?: number;
  hideDelay?: number;
  offset?: number;
  /** Always snap tooltip to viewport */
  snapToViewPort?: boolean;
};

export type TooltipData = { position: BoundingRect; content: Content; options?: Options };
export type ShowTooltip = (data: TooltipData) => void;
export type HideTooltip = () => void;
