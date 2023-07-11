import AsyncStorage from '@react-native-async-storage/async-storage';

const data = {

  data1: [
    {
    id:'1',
    title: 'Taichung beauty',
    subtitle: 'Cattleya',
    weight: 120,
    rating: '5.0',
    price: 39,
    isTopOfTheWeek: true,
    image: 'https://i.pinimg.com/originals/25/13/3d/25133df91301e29bcd36eec3949009ff.jpg',
    color: 'pink',
    bonus: 'a pot',
    origin: 'Taiwan',

  },
  {
    id:'2',
    title: 'Young Min',
    subtitle: 'Cattleya',
    weight: 150,
    rating: '4.5',
    price: 29,
    isTopOfTheWeek: false,
    image: 'https://cdn.shopify.com/s/files/1/0382/3940/4076/products/933F6DD9-E739-4198-8C8F-E18560C4EA7B_250x250@2x.jpg',
    color: 'orange',
    bonus: 'a pot',
    origin: 'Thailand',

  },
  {
    id:'3',
    title: 'Hawaii Wedding Songs',
    subtitle: 'Cattleya',
    weight: 250,
    rating: '4.2',
    price: 49,
    isTopOfTheWeek: false,
    image: 'https://cdn11.bigcommerce.com/s-r26j4fi927/images/stencil/1280x1280/products/3589/4042/C._Hawaiian_Wedding_Song_Virgin_HCC_copy__15631.1654784280.jpg',
    color: 'white',
    bonus: 'No',
    origin: 'Taiwan',

  },
  {
    id:'4',
    title: 'White lady',
    subtitle: 'Phalaenopsis',
    weight: 200,
    rating: '5.0',
    price: 299,
    isTopOfTheWeek: true,
    image: 'https://res.cloudinary.com/ufn/image/upload/c_pad,f_auto,fl_progressive,h_500,w_445/mkxrvxkdaboxn6xjq5f4.jpg',
    color: 'white',
    bonus: 'a big pot',
    origin: 'Taiwan',

  },
  {
    id:'5',
    title: 'Pink secret',
    subtitle: 'Phalaenopsis',
    weight: 500,
    rating: '4.5',
    price: 199,
    isTopOfTheWeek: false,
    image: 'https://i.pinimg.com/originals/75/08/24/7508245c78cfe5bd288d5608b4d11e62.jpg',
    color: 'pink',
    bonus: 'no',
    origin: 'Taiwan',

  },
  {
    id:'6',
    title: 'Yellow Moth',
    subtitle: 'Phalaenopsis',
    weight: 150,
    rating: '4.2',
    price: 99,
    isTopOfTheWeek: false,
    image: 'https://theplantladysf.com/cdn/shop/products/image_3d172f07-c919-4acb-99be-55d83a722716.jpg',
    color: 'Yellow',
    bonus: 'Small orchid',
    origin: 'Vietnam',

  },
  {
    id:'7',
    title: 'Blue Spin',
    subtitle:'Dendrobium',
    weight: 250,
    rating: '5.0',
    price: 69,
    isTopOfTheWeek: true,
    image: 'https://live.staticflickr.com/65535/48630313466_592b1989d9_b.jpg',
    color: 'pink',
    bonus: 'a thin Orchid',
    origin: 'Vietnam',

  },
  {
    id:'8',
    title: 'Daerei',
    subtitle:'Dendrobium',
    weight: 300,
    rating: '4.5',
    price: 59,
    isTopOfTheWeek: false,
    image: 'https://orchidroots.com/static/utils/images/species/spc_000027949_000057578.jpg',
    color: 'white',
    bonus: 'a pot',
    origin: 'Thailand',

  },
  {
    id:'9',
    title: 'Thongchai Gold',
    subtitle:'Dendrobium',
    weight: 350,
    rating: '4.2',
    price: 19,
    isTopOfTheWeek: false,
    image: 'https://cdn.shopify.com/s/files/1/0659/0834/3004/files/Dendrobium-Thongchai-Gold-X-Dendrobium-Candy-Stripe-La-Foresta-Orchids-267.jpg',
    color: 'yellow',
    bonus: 'no',
    origin: 'Thailan',

  },],
  categories: [
    { label: "All", value: "all" },
    { label: "Dendrobium", value: "Dendrobium" },
    { label: "Cattleya", value: "Cattleya" },
    { label: "Phalaenopsis", value: "Phalaenopsis" }
  ]
};



const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('myData', jsonValue);
    console.log('Data stored successfully.');
  } catch (error) {
    console.log('Error storing data:', error);
  }
};

const retrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    const retrievedData = JSON.parse(jsonValue);
    if (jsonValue !== null) {
      return retrievedData;
    } else {
      console.log('No data found.');
      return null;
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
    return null;
  }
};

const updateDataItem = async (updatedItem) => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    if (jsonValue !== null) {
      const retrievedData = JSON.parse(jsonValue);
      const updatedDataset = retrievedData.data1.map((item) => {
        if (item.id == updatedItem.id) {
          return { ...item, ...updatedItem };
        }
        return item;
      });
      retrievedData.data1 = updatedDataset;
      const updatedJsonValue = JSON.stringify(retrievedData);
      await AsyncStorage.setItem('myData', updatedJsonValue);
      console.log('Data item updated successfully. ');
    } else {
      console.log('No data found.');
    }
  } catch (error) {
    console.log('Error updating data item:', error);
  }
};
const updateDataset = async (updatedItems) => {
  try {
    const jsonValue = await AsyncStorage.getItem('myData');
    if (jsonValue !== null) {
      const retrievedData = JSON.parse(jsonValue);
      const updatedDataset = retrievedData.data1.map((item) => {
        const updatedItem = updatedItems.find((updated) => updated.id === item.id);
        if (updatedItem) {
          return { ...item, ...updatedItem };
        }
        return item;
      });
      retrievedData.data1 = updatedDataset;
      const updatedJsonValue = JSON.stringify(retrievedData);
      await AsyncStorage.setItem('myData', updatedJsonValue);
    } else {
      console.log('No data found.');
    }
  } catch (error) {
    console.log('Error updating data item:', error);
  }
};



export default {
  storeData,
  retrieveData,
  updateDataItem,
  updateDataset
};
