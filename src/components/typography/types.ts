import { FunctionComponent } from 'react';

export type TypographyProps = {
  size?: 'small' | 'medium' | 'large';
  textAlign?: 'left' | 'right' | 'center';
};

export type TypographyTemplateType = FunctionComponent<TypographyProps>;
