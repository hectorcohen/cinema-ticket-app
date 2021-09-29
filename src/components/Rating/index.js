import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Rating (){
	return (
		<View>
			<Text>Stars</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})