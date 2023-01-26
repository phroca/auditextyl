import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuAdminScreen from '../screens/Tracabilité/MenuAdminScreen';
import MenuTracabilite from '../screens/Tracabilité/MenuTracabilite';
import MenuStatistiques from '../screens/Tracabilité/MenuStatistiques';
import MenuSynchronisation from '../screens/Tracabilité/MenuSynchronisation';
import Annuler from '../components/Annuler';
import MenuUtilisateur from '../screens/Tracabilité/MenuUtilisateur'


const Stack = createNativeStackNavigator();

const TracabiliteNavigator = () => {

        return (
            
            <Stack.Navigator initialRouteName="tracabilteHome" screenOptions={{ headerShown: false }}>      
                <Stack.Screen name="tracabilteHome" component={MenuAdminScreen} />
                <Stack.Screen name="MenuTracabilite" component={MenuTracabilite} />
                <Stack.Screen name="MenuStatistiques" component={MenuStatistiques} />
                <Stack.Screen name="MenuSynchronisation" component={MenuSynchronisation} />
                <Stack.Screen name="MenuUtilisateur" component={MenuUtilisateur} />
            </Stack.Navigator>
        );
}

export default TracabiliteNavigator
