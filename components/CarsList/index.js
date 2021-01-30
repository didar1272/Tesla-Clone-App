import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';

import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = (props) => {
    return (
        <View styles={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default CarsList;