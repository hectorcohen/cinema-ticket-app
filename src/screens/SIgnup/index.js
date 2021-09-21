import React, {useEffect} from 'react'
import {View, Text, Button, StyleSheet } from 'react-native'
import {fetchMovies} from "../../requests";
import {useDispatch} from "react-redux";

export default function Signup({navigation}) {

	const dispatcher = useDispatch()

	useEffect(() => {
		dispatcher(fetchMovies())
	}, [])

	return (
		<View style={styles.container}>
			<Text>Soy la pantalla de Signup</Text>
			<Button title="Movies" onPress={() => navigation.navigate('Movies')}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})