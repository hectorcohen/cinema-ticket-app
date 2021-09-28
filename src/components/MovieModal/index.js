import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'
import {useDispatch} from 'react-redux'
import {setMovieModal} from "../../store/slice/movies";

export default function MovieModal({visible, movieData}) {

	const execute = useDispatch()


	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.container}>
				<Text
					onPress={()=> execute(setMovieModal(false))}
				>I'm the movie modal</Text>
				<Text>{movieData.title}</Text>
				<Text>{movieData.description}</Text>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})