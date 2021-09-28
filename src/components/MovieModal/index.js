import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'

export default function MovieModal({visible}) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				<Text>I'm the movie modal</Text>
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