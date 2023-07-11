import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    size={40}
                    color={colors.while} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 40,
        borderColor: colors.while,
        borderWidth: 2,
        bottom: 20,
        width: 80,
        height: 80,
        justifyContent: "center"
    }
})
export default NewListingButton;