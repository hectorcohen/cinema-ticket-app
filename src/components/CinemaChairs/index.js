import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {useSelector, useDispatch} from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {getChairs} from "../../store/slice/movies";
import TouchableScale from 'react-native-touchable-scale'


export default function CinemaChairs() {

	const {chairs} = useSelector(state => state.movies)
	const execute = useDispatch()



	return (
		<View style={styles.container}>
			<View style={{width :'50%', height: 10, borderRadius: 10, backgroundColor: '#4faada', alignSelf: 'center', marginBottom: 30, marginTop: 30}}/>
				<FlatList
					data={chairs}
					scrollEnabled={false}
					numColumns={8}
					keyExtractor={item => item.position}
					renderItem={({item, index}) => {
						return (
							<TouchableScale
								activeScale={0.5}
								tension={20}
								friction={7}
								onPress={() => execute(getChairs(index))}>
								<MaterialCommunityIcons name="chair-rolling" size={40} color={item.state === true ? '#24da6d' : '#1e1d1d'} />
							</TouchableScale>
						)
					}}
				/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '60%'
	}
})