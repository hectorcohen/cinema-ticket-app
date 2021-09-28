import { createSlice } from '@reduxjs/toolkit'
import {fetchMovies} from "../../../requests";

const moviesSlice = createSlice({
	name: 'movie',
	initialState: {
		movies: [],
		loaded: false,
		movieModal: false
	},
	reducers: {
		getValue: (state, action) => {
			state.movies = action
		},
		setMovieModal: (state, {payload}) => {
			/*open and close modal with only one function*/
			state.movieModal  = payload
		}
	},
	extraReducers: {
		[fetchMovies.pending] : (state) => {
			state.loading = true
		},
		[fetchMovies.fulfilled] : (state, {payload}) => {
			state.movies = payload
		},

	}
})

export const {  getValue, setMovieModal } = moviesSlice.actions
export default moviesSlice.reducer