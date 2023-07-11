import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from 'react-native';
import AppAsyncStore from './assets/data/AppAsyncStore';
import AppNavigator from './navigation/AppNavigator';
import navigationTheme from './navigation/navigationTheme';

const initData = () => {
  AppAsyncStore.storeData();
}
export default function App() {
  return (
    <View style = {styles.container}> 
      <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator/> */}
      <AppNavigator/>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
