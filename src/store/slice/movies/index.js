import { createSlice } from '@reduxjs/toolkit'
import {fetchMovies} from "../../../requests";

const moviesSlice = createSlice({
	name: 'movie',
	initialState: {
		movies: [],
		loaded: false
	},
	reducers: {
		getValue: (state, action) => {
			state.movies = action
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

export const {  getValue } = moviesSlice.actions
export default moviesSlice.reducer