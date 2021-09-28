import { createSlice } from '@reduxjs/toolkit'
import {fetchMovies} from "../../../requests";

const moviesSlice = createSlice({
	name: 'movie',
	initialState: {
		movies: [],
		loaded: false,
		movieModal: false,
		movieModalData : {}
	},
	reducers: {
		getValue: (state, action) => {
			state.movies = action
		},
		setMovieModal: (state, {payload}) => {
			/*open and close modal with only one function*/
			state.movieModal  = payload
		},
		setMovieModalData : (state, {payload}) => {
			/*this is the movie data*/
			state.movieModalData = payload
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

export const {  getValue, setMovieModal, setMovieModalData } = moviesSlice.actions
export default moviesSlice.reducer