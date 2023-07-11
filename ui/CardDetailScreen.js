import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import colors from '../styles/colors';

import Favorite from '../components/icons/Favorite';
import AppText from '../components/text/AppText';
import AppAsyncStore from '../assets/data/AppAsyncStore';

function CardDetailScreen({ route }) {
  const [data, setData] = useState(route.params.item);

  const handleFavorite = async (data) => {
    const newData = { ...data, favorite: !data.favorite }
    setData(newData);
    await AppAsyncStore.updateDataItem(newData);
  };
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.image }} />
        <View style={styles.detailsContainer}>
          <View style={styles.headerContainer}>
            <AppText style={styles.title}>{data.title} - {data.subtitle}</AppText>
            <Pressable onPress={() => handleFavorite(data)}>
              <Favorite isFavorite={data.favorite} size={30} />
            </Pressable>
          </View>
          <AppText style={styles.price}>Price: {data.price} $</AppText>
          <AppText style={{ fontWeight: "bold" }}>Product Information</AppText>
          <View>
            <AppText>- Origin: {data?.origin} </AppText>
            <AppText>
              - Color:  
              <View
                style={[styles.color, { backgroundColor: data?.color }]}>
              </View>
            </AppText>
            <AppText>- Weight: {data?.weight}</AppText>
          </View>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderColor: colors.while,
    borderWidth: 5,
    aspectRatio: 5 / 3
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    width: "100%",
    marginRight: 10,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  color: {
    width: 20,
    height: 20,
    paddingLeft:50,
    borderRadius: 25,
    alignItems: "center",
    alignContent: "center"
  }
});

export default CardDetailScreen;
