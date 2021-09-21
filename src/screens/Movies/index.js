import React, {useRef} from 'react'
import {View,
	Text,
	StyleSheet,
	StatusBar,
	FlatList,
	Image,
	Animated,
	Dimensions,
	Platform,
	SafeAreaView
} from 'react-native'
import {useSelector} from "react-redux";
const SPACING = 10;
const { width } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;


export default  function Movies() {
	const {movies} = useSelector(state => state.movies)

	return (
			<View style={styles.container}>
				<Text>Hello world</Text>
				<Animated.FlatList
					data={movies}
					horizontal
					bounces={false}
					contentContainerStyle={{ marginVertical: 60 }}
					decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
					keyExtractor={(item) => item.key}
					renderItem={({item}) => {
						return (
							<Animated.View style={{width: ITEM_SIZE}}>
								<View style={{
									marginHorizontal: SPACING,
									padding: 10 * 2,
									alignItems: 'center',
									backgroundColor: 'white',
									borderRadius: 34
								}}>
									<Image
										style={styles.posterImage}
										source={{uri: item.poster}}
									/>
									<Text style={{ fontSize: 24 }} numberOfLines={1}>
										{item.title}
									</Text>
									<Text style={{ fontSize: 12 }} numberOfLines={3}>
										{item.description}
									</Text>
								</View>
							</Animated.View>
						)
					}}
				/>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	posterImage:{
		width: '100%',
		height: ITEM_SIZE * 1.2,
		resizeMode: 'cover',
		borderRadius: 24,
		margin: 0,
		marginBottom: 10,
	}
})