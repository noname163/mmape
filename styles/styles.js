import { Platform } from 'react-native';
import colors from '../styles/colors';

export default {
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    logo:{
        width:'40%',
        height:'30%',
        marginBottom:5,
    }
}
