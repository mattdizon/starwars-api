import { createAction } from '@reduxjs/toolkit';

export const addCharacters = createAction<Character[]>('characters/addCharacters');
