import React, {useRef} from 'react'
import {Animated, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Backdrop from "../../components/Backdrop";
import {setMovieModal, setMovieModalData} from "../../store/slice/movies";
import TouchableScale from 'react-native-touchable-scale';

const {width} = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2


export default function Movies({navigation}) {

	const {movies, movieModal} = useSelector(state => state.movies)
	const execute = useDispatch()
	const MOVIES = [{key: 'left-spacer'}, ...movies, {key: 'right-spacer'}]
	const scrollX = useRef(new Animated.Value(0)).current;


	const handleExecutes = (movie) => {
		execute(setMovieModalData(movie))
		execute(setMovieModal(true))
	}


	return (
		<View style={styles.container}>
			<Backdrop movies={MOVIES} scrollX={scrollX}/>
			<StatusBar hidden/>
			<Animated.FlatList
				showsHorizontalScrollIndicator={false}
				data={MOVIES}
				keyExtractor={item => item.key}
				horizontal
				contentContainerStyle={{
					alignItems: 'center'
				}}
				snapToInterval={ITEM_SIZE}
				decelerationRate={0}
				bounces={false}
				onScroll={Animated.event(
					[{nativeEvent: {contentOffset: {x: scrollX}}}],
					{useNativeDriver: true}
				)}
				scrollEventThrottle={16}
				renderItem={({item, index}) => {

					if (!item.poster) {
						return <View style={{
							width: SPACER_ITEM_SIZE,
						}}/>
					}

					const inputRange = [
						(index - 2) * ITEM_SIZE,
						(index - 1) * ITEM_SIZE,
						index * ITEM_SIZE,
					]

					const translateY = scrollX.interpolate({
						inputRange,
						outputRange: [100, 50, 100]
					})

					return (
						<View style={{width: ITEM_SIZE}}>
							<TouchableScale
								onPress={() => navigation.navigate('MoviesDetails', {item})}
								activeScale={0.9}
								tension={20}
								friction={7}
							>
								<Animated.View
									style={{
										marginHorizontal: SPACING,
										padding: SPACING * 2,
										alignItems: 'center',
										backgroundColor: 'white',
										shadowOffset: {
											width: 0,
											height: 4,
										},
										shadowOpacity: 0.30,
										shadowRadius: 4.65,

										elevation: 8,
										borderRadius: 10,
										transform: [{translateY}]
									}}
								>
									<Image
										style={styles.posterImage}
										source={{uri: item.poster}}
										onPress={() => console.log('I´m press now')}
									/>
									<Text
										numberOfLines={1}
										style={{fontSize: 15, fontWeight: 'bold'}}
									>
										{item.title}
									</Text>
								</Animated.View>
							</TouchableScale>
						</View>
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
	posterImage: {
		width: '100%',
		height: ITEM_SIZE * 1.2,
		resizeMode: 'cover',
		borderRadius: 10,
		margin: 0,
		marginBottom: 10,
	}
})