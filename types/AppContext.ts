export type AppContext = {
  color_palette: string[];
  features: { [key: string]: boolean };
  loginInfo: { [key: string]: any };
  locale: {
    locale: string;
    formatMessage(key: string): string;
  };
};
