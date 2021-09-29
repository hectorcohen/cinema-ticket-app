import { createSlice } from '@reduxjs/toolkit'
import {fetchMovies} from "../../../requests";

const moviesSlice = createSlice({
	name: 'movie',
	initialState: {
		movies: [],
		loaded: false,
		chairs: [
			{position: 1, state: false},
			{position: 2, state: false},
			{position: 3, state: false},
			{position: 4, state: false},
			{position: 5, state: false},
			{position: 6, state: false},
			{position: 7, state: false},
			{position: 8, state: false},
			{position: 9, state: false},
			{position: 10, state: false},
			{position: 11, state: false},
			{position: 12, state: false},
			{position: 13, state: false},
			{position: 14, state: false},
			{position: 15, state: false},
			{position: 16, state: false},
			{position: 17, state: false},
			{position: 18, state: false},
			{position: 19, state: false},
			{position: 20, state: false},
			{position: 21, state: false},
			{position: 22, state: false},
			{position: 23, state: false},
			{position: 24, state: false},
			{position: 25, state: false},
			{position: 26, state: false},
			{position: 27, state: false},
			{position: 28, state: false},
			{position: 29, state: false},
			{position: 30, state: false},
			{position: 31, state: false},
			{position: 32, state: false},
			{position: 33, state: false},
			{position: 34, state: false},
			{position: 35, state: false},
			{position: 36, state: false},
			{position: 37, state: false},
		],
		price: 0
	},
	reducers: {
		getValue: (state, action) => {
			state.movies = action
		},
		getChairs: (state, {payload}) => {
			/*change or update value array*/
			state.chairs[payload].state = !state.chairs[payload].state
		},
		incrementPrice : (state, {payload}) => {
			state.price += payload
		},
		decrementPrice : (state, {payload}) => {
			state.price -= payload
			console.log(state.price)
		}
	},
	extraReducers: {
		[fetchMovies.pending] : (state) => {
			state.loading = true
		},
		[fetchMovies.fulfilled] : (state, {payload}) => {
			state.movies = payload
		}

	}
})

export const {  getValue, getChairs, incrementPrice, decrementPrice} = moviesSlice.actions
export default moviesSlice.reducer