import { createReducer } from '@reduxjs/toolkit';
import { addCharacters } from '../actions/characterActions';

const initialState = { characters: [] as Character[] };

const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(addCharacters, (state, action) => {
    state.characters = action.payload;
  });
});

export default characterReducer;
