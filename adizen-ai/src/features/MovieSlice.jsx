import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    favoriteMovies: [],
};

export const movieSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const movieToAdd = action.payload;
            
            // Check if the movie is not already in the array
            if (!state.favoriteMovies.some(movie => movie.id === movieToAdd.id)) {
                state.favoriteMovies.push(movieToAdd);
            }
        },
        removeFavorite: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload.id)
        },
    },
});

export const { addFavorite, removeFavorite } = movieSlice.actions;

export default movieSlice.reducer;


