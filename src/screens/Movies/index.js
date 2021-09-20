import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import {useSelector} from "react-redux";

export default  function Movies() {
	const {movies, loaded} = useSelector(state => state.movies)

	console.log(loaded, 'SOY LAS MOVIES')

	return (
		<View>
			{
				loaded && <Text>LOADING ...</Text>
			}
			
		</View>
	)
}