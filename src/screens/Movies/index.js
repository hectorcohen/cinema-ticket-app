import React, {useRef} from 'react'
import {View, FlatList, Text, StyleSheet, StatusBar, Dimensions, Image, Animated} from 'react-native'
import {useSelector} from 'react-redux'
import Backdrop from "../../components/Backdrop";



const {width, height} = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2


export default function Movies(){

	const {movies} = useSelector(state => state.movies)
	const MOVIES = [{key: 'left-spacer'}, ...movies, {key: 'right-spacer'}]
	const scrollX = useRef(new Animated.Value(0)).current;

	return (
		<View style={styles.container}>
			<Backdrop movies={MOVIES} scrollX={scrollX}/>
			<StatusBar hidden />
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

					if(!item.poster){
						return <View  style={{
							width: SPACER_ITEM_SIZE,
						}}/>
					}

					const inputRange = 	[
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
							<Animated.View
								style={{
									marginHorizontal: SPACING,
									padding: SPACING * 2,
									alignItems: 'center',
									backgroundColor: 'white',
									borderRadius: 20,
									transform: [{ translateY}]
								}}
							>
								<Image
									style={styles.posterImage}
									source={{uri: item.poster}}
								/>
								<Text>
									{item.title}
								</Text>
							</Animated.View>
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
		borderRadius: 24,
		margin: 0,
		marginBottom: 10,
	}
})