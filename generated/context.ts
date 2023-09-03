export interface Settings {
  applyRunTimeFilters: boolean;
  componentType: string;
  multiple: boolean;
  multipleSelection: boolean;
  vertical: boolean;
  lov: boolean;
  inputFields: boolean;
  singleValue: boolean;
  showValues: boolean;
}

export interface Bindings {
  field: {
    dateFormat: string;
  };
}
