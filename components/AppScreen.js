import React from 'react';
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
function AppScreen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground
                style={styles.background}
                resizeMode='cover'
                source={require("../assets/images/background2.jpg")}>
                {children}
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default AppScreen;