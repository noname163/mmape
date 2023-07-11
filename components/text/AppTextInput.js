import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import defaultStyle from '../../config/styles';
function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} style={styles.icon} color={colors.medium} size= {20} />}
            <TextInput style ={defaultStyle.text}  {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '95%',
        padding: 15,
        marginVertical: 10
    },
    icon:{
        marginRight:10,
        marginVertical:10
    }
})

export default AppTextInput;
