import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { DropDown } from '../../components/Dropdown/DropDown';
import { map, intersection } from 'lodash';
import { Button, Grid } from '@mui/material';
import { Paragraph } from '../../components/typography/paragraph/Paragraph';
import { getStarWarsFilms } from '../../utils/service';
import { SharedLocations } from './components/SharedLocations/SharedLocations';
import { useSelector } from 'react-redux';
import { Subtitle } from '../../components/typography/subtitle/Subtitle';

export const CharacterContainer = () => {
  const characters = useSelector((state: CharacterStore) => state.characters.characters);

  const renderCharItems = map(characters, (char) => ({
    label: char.name,
    value: char,
  }));

  const [firstChar, setFirstChar] = useState<Character>();
  const [secondChar, setSecondChar] = useState<Character>();
  const [hasError, setHasError] = useState(false);

  const [commonFilmUrls, setCommonFilmUrls] = useState<string[]>([]);
  const [commonFilmNames, setCommonFilmNames] = useState<string[]>([]);

  const compareChars = () => {
    setCommonFilmNames([]);
    if (firstChar && secondChar) {
      if (firstChar.name === secondChar.name) {
        setHasError(true);
      } else {
        if (
          firstChar.homeworld === secondChar.homeworld ||
          intersection(firstChar.vehicles, secondChar.vehicles).length > 0 ||
          intersection(firstChar.starships, secondChar.starships).length > 0
        ) {
          setCommonFilmUrls(intersection(firstChar.films, secondChar.films));
        }
        setHasError(false);
      }
    }
  };

  useEffect(() => {
    if (commonFilmUrls.length > 0) {
      map(commonFilmUrls, async (url) => {
        await getStarWarsFilms(url as string).then((resp) => {
          setCommonFilmNames((prev) => [...prev, resp]);
        });
      });
    }
  }, [commonFilmUrls]);

  useEffect(() => {
    if (commonFilmNames.length > 0) {
      setCommonFilmUrls([]);
      setCommonFilmNames([]);
    }
  }, [firstChar, secondChar]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={4} width={'65%'}>
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <Box>
            <Subtitle>First Character</Subtitle>
            <DropDown
              dropDownItems={renderCharItems}
              setParentValue={(id) => setFirstChar(id as Character)}
              placeholder={'Select a char'}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Subtitle>Second Character</Subtitle>
            <DropDown
              dropDownItems={renderCharItems}
              setParentValue={(id) => setSecondChar(id as Character)}
              placeholder={'Select a char'}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <Button
                onClick={() => compareChars()}
                variant="contained"
                sx={{
                  paddingX: 3,
                  marginY: 4,
                }}
              >
                Submit
              </Button>
            </Box>
            {hasError && <Paragraph>Cannot compare the same user</Paragraph>}
          </Box>
        </Grid>
        <Grid item xs={12}>
          {commonFilmNames.length > 0 && <SharedLocations films={commonFilmNames} />}
        </Grid>
      </Grid>
    </Box>
  );
};
