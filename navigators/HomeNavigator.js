import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();


const HomeNavigator = () => {

        return (
            
            <Stack.Navigator initialRouteName="Accueil-Bis" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Accueil-Bis" component={HomeScreen} />
            </Stack.Navigator>
        );
}

export default HomeNavigator