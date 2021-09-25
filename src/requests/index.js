import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";

const API_KEY = '8b67451101f84ced178e08649de3ba0e'

const genres = {
	12: 'Adventure',
	14: 'Fantasy',
	16: 'Animation',
	18: 'Drama',
	27: 'Horror',
	28: 'Action',
	35: 'Comedy',
	36: 'History',
	37: 'Western',
	53: 'Thriller',
	80: 'Crime',
	99: 'Documentary',
	878: 'Science Fiction',
	9648: 'Mystery',
	10402: 'Music',
	10749: 'Romance',
	10751: 'Family',
	10752: 'War',
	10770: 'TV Movie',
};

const getImagePath = (path) =>
	`https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
	`https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const fetchMovies = createAsyncThunk('fetch/movies', async()=>{
	const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
	return data.results.map(
		({
			 id,
			 original_title,
			 poster_path,
			 bacdrop_path,
			 vote_average,
			 overview,
			 release_date,
			 genre_ids
		 }) => ({
			key: String(id),
			title: original_title,
			poster: getImagePath(poster_path),
			bacdrop: getBackdropPath(bacdrop_path),
			rating: vote_average,
			description: overview,
			releaseDate: release_date,
			genres: genre_ids.map((genre) => genres[genre])
		})
	)
})