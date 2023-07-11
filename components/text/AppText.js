import React from 'react';
import { Text } from 'react-native';
import styleConfig from '../../styles/styles'

function AppText({ children, style }) {
    return <Text numberOfLines={5} style={[styleConfig.text, style]}>{children}</Text>;
}

export default AppText;