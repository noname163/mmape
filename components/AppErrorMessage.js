import React from 'react';
import AppText from './text/AppText';
import { StyleSheet } from 'react-native';
import colors from '../styles/colors';

function AppErrorMessage({error, visible}) {
    if(!visible || !error) return null;

    return (
        <AppText style={styles.error}>
            {error}
        </AppText>
    );
}
const styles = StyleSheet.create({
    error:{
        color:colors.danger
    }
})

export default AppErrorMessage;