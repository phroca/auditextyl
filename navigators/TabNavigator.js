import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons  } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import HomeNavigator from './HomeNavigator';
import ProfilNavigator from './ProfilNavigator';
import OrganisationProductionScreen from '../screens/OrganisationProductionScreen';
import TracabiliteScreen from '../screens/TracabiliteScreen';

const activeColor = "#1a9cd4";
const inactiveColor = "#283c46";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(  
            <Tab.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === "Tracabilité") {
                    iconName = focused ? 'form-select' : 'form-select';
                } else if (route.name === "Organisation") {
                    iconName = focused ? 'handshake' : 'handshake-outline';
                } else if(route.name === "Profil") {
                    iconName = focused ? 'cog' : 'cog-outline';
                } else if(route.name === "Accueil") {
                    iconName = focused ? 'home' : 'home-outline';
                }

                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                headerShown: false})}
 initialRouteName="Accueil">
                <Tab.Screen name="Accueil" component={HomeNavigator} />
                <Tab.Screen name="Tracabilité" component={TracabiliteScreen} />
                <Tab.Screen name="Organisation" component={OrganisationProductionScreen} />
                <Tab.Screen name="Profil" component={ProfilNavigator} /> 
            </Tab.Navigator> 
    );
}

export default TabNavigator;