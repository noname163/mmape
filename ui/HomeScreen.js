import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import { Ionicons } from '@expo/vector-icons';
import routes from '../navigation/routes';
import AppCard from './../components/card/AppCard';
import ListItemReport from './../components/list/ListItemReport';
import AppAsyncStore from '../assets/data/AppAsyncStore';
import EmptyList from '../components/list/EmptyList';

function HomeScreen({ navigation }) {
    const [filterData, setFilterData] = useState([]);
    const [topOfTheWeek, setTopOfTheWeek] = useState([]);
    const [categories, setCategories] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');


    useEffect(() => {
        retrieveData();
        storeData();
    }, []);

    useEffect(() => {
        console.log(selectedCategory)
        const unsubscribe = navigation.addListener('focus', () => {
            handleCategoryPress(selectedCategory)
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        retrieveData();
        setRefreshing(false);
    }, [refreshing]);

    useEffect(() => {
        handleCategoryPress(selectedCategory);
    }, [selectedCategory]);

    const storeData = async () => {
        try {
            await AppAsyncStore.storeData();
        } catch (error) { }
    };

    const retrieveData = async () => {
        try {
            const { data1, itemDataset, categories } = await AppAsyncStore.retrieveData();
            setFilterData(data1);
            setTopOfTheWeek(data1.filter((item) => item.isTopOfTheWeek == true))
            console.log("Top Of the week ", topOfTheWeek)
            console.log("Data  ", filterData)
            setCategories(categories);
        } catch (error) {
            console.log('Error retrieving data:', error);
        }
    };

    const handleDelete = (data) => {
        setFilterData((prevData) => prevData.filter((d) => d.id !== data.id));
    };

    const handleFavorite = async (data) => {
        const updatedData = filterData.map((item) =>
            item.id === data.id ? { ...item, favorite: !item.favorite } : item
        );
        data.favorite = !data.favorite;
        setFilterData(updatedData);
        await AppAsyncStore.updateDataItem(data);
    };

    const handleCategoryPress = async (itemValue) => {
        setSelectedCategory(itemValue);
        const { itemDataset, data1 } = await AppAsyncStore.retrieveData();
        const filteredData =
            itemValue === 'all'
                ? data1
                : data1.filter((item) => item.subtitle === itemValue);

        setFilterData(filteredData);
    };

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                item.value === selectedCategory && styles.selectedCategoryItem,
            ]}
            onPress={() => handleCategoryPress(item.value)}
        >
            <Text
                style={[
                    styles.categoryItemText,
                    item.value === selectedCategory && styles.selectedCategoryItemText,
                ]}
            >
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <AppCard
            handleFavorite={() => handleFavorite(item)}
            isFavorite={item.favorite}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            onPress={() => navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, { item })}
            image={item.image}
            renderRightActions={() => (
                <ListItemReport icon="report" onPress={() => handleDelete(item)} />
            )}
        />
    );
    const renderTopItem = ({ item }) => (
        <TouchableNativeFeedback
            onPress={() => navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, { item })}
        >
            <View style={styles.topItemContainer}>
                <Image style={styles.topItemImage} source={{ uri: item.image }} />
                <Text style={styles.topItemTitle}>{item.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );





    return (
        <AppScreen>
            <View style={styles.categoriesContainer}>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.value.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderCategoryItem}
                />
            </View>
            <View style={styles.topItemContainerView}>
                <View style={styles.topItemBadge}>
                    <Text style={styles.topItemBadgeText}>Top of the Week</Text>
                </View>
                <FlatList
                    data={topOfTheWeek}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderTopItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.container}>
                {filterData.length > 0 ? (
                    <FlatList
                        data={filterData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        refreshing={refreshing}
                        onRefresh={() => setRefreshing(true)}
                    />
                ) : (
                    <EmptyList />
                )}
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    categoryItem: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#f2f2f2',
    },
    selectedCategoryItem: {
        backgroundColor: '#007bff',
    },
    categoryItemText: {
        fontSize: 16,
        color: '#333',
    },
    selectedCategoryItemText: {
        color: '#fff',
    },
    container: {
        flex: 1,
        width: "90%"
    },
    topItemContainerView: {
        alignItems: 'center',
        width: '100%',
        height: '25%',
        marginBottom: 5
    },
    topItemContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
    topItemImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 4,
    },
    topItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    topItemPrice: {
        fontSize: 14,
        color: '#888',
    },
    topItemBadge: {
        backgroundColor: 'gold',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
        marginBottom: 4,
    },
    topItemBadgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default HomeScreen;
