import {configureStore} from '@reduxjs/toolkit';
import movieReducer from "../features/MovieSlice"

export const store = configureStore({
    reducer: movieReducer
});

