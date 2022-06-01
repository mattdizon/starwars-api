import React from 'react';
import { Typography } from '@mui/material';
import { TypographyTemplateType } from '../types';

export const Subtitle: TypographyTemplateType = ({ children, size, textAlign }) => {
  const fontSize = size === 'small' ? 16 : size === 'large' ? 20 : 18;

  return (
    <Typography fontSize={fontSize} textAlign={textAlign}>
      {children}
    </Typography>
  );
};
