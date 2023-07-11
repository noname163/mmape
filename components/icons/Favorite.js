import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

function Favorite({ isFavorite, size }) {

    return (
        <AntDesign
            style={styles.heartIcon}
            name="heart"
            size={size}
            color={isFavorite ? "red" : "gray"}
        />
    );
}

const styles = StyleSheet.create({

})

export default Favorite;