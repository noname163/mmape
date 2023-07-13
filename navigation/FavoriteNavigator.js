import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CardDetailScreen from '../ui/CardDetailScreen';
import FavoriteScreen from '../ui/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoriteNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            presentation: "modal",
        }} >
        <Stack.Screen name='Favorite' component={FavoriteScreen} options={{
            headerShown: false
        }} />
        <Stack.Screen name="Favorite Detail" component={CardDetailScreen} />
    </Stack.Navigator>
)

export default FavoriteNavigator;