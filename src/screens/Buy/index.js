import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CinemaChairs from "../../components/CinemaChairs";
import {Ionicons} from "@expo/vector-icons";

export default function BuyTickets({navigation, route}) {

	const {item} = route.params

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{position: 'absolute', left:32, top: 64}}
				onPress={() => navigation.goBack()}>
				<Ionicons name="ios-arrow-back-circle" size={35} color="white" style={styles.backButtonIcon} />
			</TouchableOpacity>
			<View>
				<Text
					numberOfLines={3}
					style={{fontSize: 30, fontWeight: 'bold', margin: 20}}
				>
					{item.title}
				</Text>
			</View>
			<View>
				<Text
					style={{fontSize: 20, fontWeight: 'bold'}}
				>{item.price} USD per Ticket</Text>
				<Text
					style={{fontSize: 20, fontWeight: 'bold'}}
				>Total: 0</Text>
				<CinemaChairs price={item.price}/>
			</View>
			<View style={{width: '100%'}}>
				<TouchableOpacity
					style={{
						backgroundColor: 'white',
						padding: 15,
						borderRadius: 20
					}}
				>
					<Text style={{fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}}>Pay</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#007AFF'
	}
})