import React from 'react';
import { Typography } from '@mui/material';
import { TypographyTemplateType } from '../types';

export const Paragraph: TypographyTemplateType = ({ children, size, textAlign }) => {
  const fontSize = size === 'small' ? 10 : size === 'large' ? 14 : 12;

  return (
    <Typography fontSize={fontSize} textAlign={textAlign}>
      {children}
    </Typography>
  );
};
