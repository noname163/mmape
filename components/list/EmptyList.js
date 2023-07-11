import { Ionicons } from '@expo/vector-icons';
import { View,StyleSheet, Text } from 'react-native';
const EmptyList = () => (
    <View style={styles.emptyContainer}>
        <Ionicons name="sad-outline" size={60} color="#888" />
        <Text style={styles.emptyText}>No items found.</Text>
    </View>
);

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
        marginTop: 10,
    },
})
export default EmptyList