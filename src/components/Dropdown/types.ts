import { FunctionComponent } from 'react';

type DropDownItem = {
  label: string | number;
  value: unknown;
};

type CustomError = {
  error: boolean;
  errorMsg: string;
};

export type DropDownProps = {
  dropDownItems: DropDownItem[];
  placeholder?: string;
  setParentValue: (value: unknown, val: unknown) => void;
  defaultValue?: unknown;
  error?: CustomError;
  idx?: number;
};
export type DropDownTemplateType = FunctionComponent<DropDownProps>;
