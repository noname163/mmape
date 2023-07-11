import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import Favorite from '../icons/Favorite';
import AppText from '../text/AppText';

function AppCard({ title, subtitle, price,image, isFavorite, handleFavorite, onPress, renderRightActions }) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri:image}} />
                <Swipeable renderRightActions={renderRightActions}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.textContainer}>
                            <AppText style={styles.title}>{title} - {subtitle}</AppText>
                            <AppText style={styles.subtitle}>{price} $</AppText>
                        </View>
                        <Pressable onPress={handleFavorite} style={styles.heartIcon}>
                            <Favorite isFavorite={isFavorite} size={24} />
                        </Pressable>
                    </View>
                </Swipeable>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.while,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
        flexDirection: "row"
    },
    textContainer: {
        marginBottom: 10,
    },
    title: {
        marginBottom: 5,
        fontSize:18,
        fontWeight: "bold"
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    heartIcon: {
        marginLeft: "auto",
        marginVertical: 15
    },
});

export default AppCard;
