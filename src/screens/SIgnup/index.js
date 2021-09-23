import React, {useEffect} from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import {fetchMovies} from "../../requests";
import {useDispatch} from "react-redux";

export default function Signup({navigation}) {

	const dispatcher = useDispatch()

	useEffect(() => {
		dispatcher(fetchMovies())
	}, [])

	return (
			<View style={styles.container}>
				<View >
					<Entypo name="ticket" size={150} color="#3c72fb" style={{textAlign: "center"}}/>
					<Text style={styles.title}>TICKETS</Text>
				</View>
				<View>
					<TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Movies')}>
						<Text style={{color: 'white', fontWeight: 'bold'}}>
							Signup
						</Text>
					</TouchableOpacity>
					<Text style={styles.login}>Already hae a account? <Text style={{color: '#3c72fb', fontWeight: 'bold'}}>Log in</Text></Text>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: "space-evenly"
	},
	title: {
		fontSize: 50,
		letterSpacing: 15,
		marginVertical: 50,
		color: '#767373'
	},
	button: {
		backgroundColor: '#3c72fb',
		width: 370,
		padding: 20,
		alignItems: 'center',
		borderRadius: 10,
		marginVertical: 30,
	},
	login:{
		textAlign: 'center',
	}

})