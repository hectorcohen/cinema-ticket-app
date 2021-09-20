import React, {useEffect} from 'react'
import {View, Text, Button } from 'react-native'
import {fetchMovies} from "../../requests";
import {useDispatch} from "react-redux";

export default function Signup({navigation}) {

	const dispatcher = useDispatch()

	useEffect(() => {
		dispatcher(fetchMovies())
	}, [])

	return (
		<View>
			<Button title="Movies" onPress={() => navigation.navigate('Movies')}/>
		</View>
	)
}