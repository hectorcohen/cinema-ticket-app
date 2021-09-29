import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function MovieDetails({navigation, route}) {

	const {item} = route.params;

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={()=> navigation.goBack()}
				style={styles.backButton}
			>
				<Ionicons name="ios-arrow-back-circle" size={35} color="white" style={styles.backButtonIcon} />
			</TouchableOpacity>
			<Image source={{uri: item.poster}} style={styles.posterImage}/>
			<View style={styles.containerDetails}>
				<View style={styles.containerTitle}>
					<Text
						numberOfLines={2}
						style={{
							fontSize: 25,
							fontWeight: 'bold',
							color: 'black',
						}}
					>{item.title}</Text>
				</View>
				<View
					style={{
						borderColor: 'black',
						borderWidth: 1,
						borderRadius: 20,
						padding: 8,
						marginVertical: 10,
						alignSelf: 'flex-start',
					}}
				>
					<Text
						style={{
							fontWeight: 'bold',
							color: '#4d4d4d',
						}}
					>
						IMDb 8.6
					</Text>
				</View>
				<View
					style={{
						width: '100%',
						height: 40,
					}}
				>
					<FlatList
						data={item.genres}
						horizontal
						keyExtractor={item => item}
						renderItem={({item}) => {
							return (
								<View>
									<Text
										style={{
											margin: 5,
											fontSize: 15,
											borderColor: 'black',
											borderWidth: 1,
											padding: 5,
											borderRadius: 15

										}}
									>{item}</Text>
								</View>
							)
						}}
					/>
				</View>
				<View
					style={{
						marginVertical: 10,
						width: '100%',
						height: '35%',
					}}
				>
					<Text
						numberOfLines={5}
						style={{
							fontSize: 16,
							color: "#1a1a1a"
						}}
					>{item.description}</Text>
				</View>
				<View style={{width: '100%'}}>
					<TouchableOpacity
						onPress={() => navigation.navigate('BuyTickets', {item})}
						style={{
							backgroundColor: '#007AFF',
							padding: 15,
							borderRadius: 25
						}}
					>
						<Text style={{textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold'}}>Buy Now</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	backButton:{
		position: 'absolute',
		left: 32,
		top: 64,
		zIndex: 100
	},
	backButtonIcon: {
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,

		elevation: 8,
	},
	posterImage: {
		width: '100%',
		height: '60%',
		borderRadius: 30
	},
	genres: {
		borderColor: 'red',
		borderWidth: 1,
		height: 20
	},
	containerDetails: {
		flexDirection: 'column',
		height: '40%',
		alignItems: 'center',
		width: '100%',
		padding: 10
	},
	containerTitle:{
		alignSelf: "flex-start",
	}
})