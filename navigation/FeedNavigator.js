import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CardDetailScreen from '../ui/CardDetailScreen';
import HomeScreen from '../ui/HomeScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            presentation: "modal",
        }}>
        <Stack.Screen name='Home'
            component={HomeScreen}
            options={{
                headerShown: false,
            }} />
        <Stack.Screen name='Product Detail'
            options={{
                headerShown: true,
            }}
            component={CardDetailScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;