import React from 'react'
import { View, Modal, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import {setMovieModal} from "../../store/slice/movies";

export default function MovieModal({visible}) {

	const execute = useDispatch()
	const { movieModalData } = useSelector(state => state.movies)


	return (
		<Modal visible={visible} animationType="slice">
			<View style={styles.container}>
				<TouchableOpacity style={styles.closeModal} onPress={() => execute(setMovieModal(false))}>
					<Ionicons name="ios-close-circle-sharp" size={35} color="white" />
				</TouchableOpacity>
				<Image source={{uri: movieModalData.poster}}
					style={styles.posterImage}
				/>
				<View style={styles.imdb}>
					<Text>IMDb 8.0</Text>
				</View>
				<View style={styles.title}>
					<Text>{movieModalData.title}</Text>
					<FlatList
						data={movieModalData.genres}
						keyExtractor={item => item}
						scrollEnabled={false}
						horizontal
						renderItem={({item}) => {
							return (
								<View>
									<Text>{item}</Text>
								</View>
							)
						}}
					/>
				</View>

			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
	},
	posterImage: {
		width: '100%',
		height: '70%',
		borderRadius: 30
	},
	closeModal: {
		position: 'absolute',
		right: 32,
		top: 64,
		zIndex: 100
	},
})