import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Title } from './components/typography/title/Title';
import { CharacterContainer } from './screens/CharacterContainer/CharacterContainer';
import { getStarWarsPeople } from './utils/service';
import { LoadingScreen } from './screens/LoadingScreen/LoadingScreen';
import { addCharacters } from './store/actions/characterActions';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: CharacterStore) => state.characters.characters);

  useEffect(() => {
    getStarWarsPeople().then((resp) => {
      dispatch(addCharacters(resp));
    });
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box marginY={2}>
        <Title size="large">Star Wars Api Checker</Title>
      </Box>
      {characters.length > 0 ? <CharacterContainer /> : <LoadingScreen />}
    </Box>
  );
};
