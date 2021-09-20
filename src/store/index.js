import { configureStore } from '@reduxjs/toolkit'
import movies from './slice/movies/index'

export default configureStore({
	reducer: {
		movies
	}
})