import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Pressable } from 'react-native';
import colors from '../../styles/colors';
import { Swipeable } from 'react-native-gesture-handler';
import AppText from '../text/AppText';
import Favorite from '../icons/Favorite';

function ListItem({ image, title, subtitle, handleFavorite, isFavorite, onPress, renderRightActions }) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={colors.while}>
            <Swipeable renderRightActions={renderRightActions}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <View style={styles.detailsContainer}>
                        <View style={styles.textContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppText style={styles.subtitle}>{subtitle}</AppText>
                        </View>
                        <Pressable onPress={handleFavorite} style={styles.heartIcon}>
                            <Favorite isFavorite={isFavorite} size={24} />
                        </Pressable>
                    </View>
                </View>
            </Swipeable>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent:"center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
        marginTop:10
    },
    detailsContainer: {
        padding: 20,
        flexDirection: "row"
    },
    title: {
        marginBottom: 5,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    textContainer: {
        justifyContent:"center",
        width:200,
        marginRight:25
    },
    heartIcon: {
        marginLeft: "auto",
        marginVertical: 15
    },
})
export default ListItem;