import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Subtitle } from '../../components/typography/subtitle/Subtitle';

export const LoadingScreen = () => {
  return (
    <Box display="flex" flexDirection="column" alignContent="center" alignItems="center" justifyContent="center">
      <CircularProgress sx={{ marginBottom: 2 }} />
      <Subtitle size="small">Getting All Characters Please Wait.</Subtitle>
    </Box>
  );
};
