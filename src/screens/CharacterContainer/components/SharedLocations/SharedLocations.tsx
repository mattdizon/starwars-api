import { Box } from '@mui/material';
import { map } from 'lodash';
import React from 'react';
import { Subtitle } from '../../../../components/typography/subtitle/Subtitle';
import { SharedLocationTemplateType } from './types';

export const SharedLocations: SharedLocationTemplateType = ({ films }) => {
  const renderFilms = map(films, (film) => (
    <Subtitle textAlign="center" size="small">
      {film}
    </Subtitle>
  ));

  return (
    <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems="center" alignContent="center">
      {renderFilms}
    </Box>
  );
};
