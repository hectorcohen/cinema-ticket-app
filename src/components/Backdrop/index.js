import React from 'react'
import {View, Dimensions,FlatList, Animated, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view'
import Svg, {Rect} from 'react-native-svg'

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = width * 0.72;
const BACKDROP_HEIGHT = height * 0.6;

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

export default function Backdrop({movies, scrollX}){
	return (
		<View style={{position: 'absolute', width, height: BACKDROP_HEIGHT}}>
			<FlatList
				data={movies}
				keyExtractor={item => item.key + '-backdrop'}
				removeClippedSubviews={false}
				contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
				inverted={true}
				renderItem={({item, index})=> {


					if(!item.backdrop){
						console.log(item)
					}

					const inputRange = [
						(index - 2) * ITEM_SIZE,
						(index - 1) * ITEM_SIZE
					]

					const translateX = scrollX.interpolate({
						inputRange,
						outputRange:[-width, 0]
					})
					return (
						<View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
							<MaskedView
								style={{position: 'absolute'}}
								maskElement={
									<AnimatedSvg
										width={width}
										height={height}
										viewBox={`0 0 ${width} ${height}`}
										style={{transform: [{translateX}]}}
									>
										<Rect
											x="0"
											y="0"
											width={width}
											height={height}
											fill='red'
										/>
									</AnimatedSvg>
								}
							>
								<Image
									source={{uri: item.backdrop}}
									style={{width, height: BACKDROP_HEIGHT, resizeMode: 'cover'}}
								/>
							</MaskedView>
						</View>
					)
				}}
			/>
			<LinearGradient colors={['transparent', 'white']} style={{
				width,
				height: BACKDROP_HEIGHT,
				position: 'absolute',
				bottom: 0
			}}/>
		</View>
	)
}