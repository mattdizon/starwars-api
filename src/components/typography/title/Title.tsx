import React from 'react';
import { Typography } from '@mui/material';
import { TypographyTemplateType } from '../types';

export const Title: TypographyTemplateType = ({ children, size, textAlign }) => {
  const fontSize = size === 'small' ? 22 : size === 'large' ? 28 : 24;

  return (
    <Typography fontSize={fontSize} textAlign={textAlign}>
      {children}
    </Typography>
  );
};
