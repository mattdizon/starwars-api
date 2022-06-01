import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './reducers/characterReducer';

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});

export default store;
