import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuAdminScreen from '../screens/tracabilite/MenuAdminScreen';
import MenuTracabilite from '../screens/tracabilite/MenuTracabilite';
import MenuStatistiques from '../screens/tracabilite/MenuStatistiques';
import MenuSynchronisation from '../screens/tracabilite/MenuSynchronisation';
import Annuler from '../components/Annuler';
import MenuUtilisateur from '../screens/tracabilite/MenuUtilisateur';
import AjoutUtilisateur from '../screens/tracabilite/AjoutUtilisateur';
import CameraScreen from '../screens/tracabilite/CameraScreen';
import MenuEnregistrement from '../screens/tracabilite/MenuEnregistrement';
import FormEnregistrement from '../screens/tracabilite/FormEnregistrement';
import AuthentificationAnimaux from '../screens/tracabilite/AuthentificationAnimaux';
import Confirmation from '../screens/tracabilite/Confirmation';


const Stack = createNativeStackNavigator();

const TracabiliteNavigator = () => {

        return (
            
            <Stack.Navigator initialRouteName="tracabilteHome" screenOptions={{ headerShown: false }}>      
                <Stack.Screen name="tracabilteHome" component={MenuAdminScreen} />
                <Stack.Screen name="MenuTracabilite" component={MenuTracabilite} />
                <Stack.Screen name="MenuStatistiques" component={MenuStatistiques} />
                <Stack.Screen name="MenuSynchronisation" component={MenuSynchronisation} />
                <Stack.Screen name="MenuUtilisateur" component={MenuUtilisateur} />
                <Stack.Screen name="AjoutUtilisateur" component={AjoutUtilisateur} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="MenuEnregistrement" component={MenuEnregistrement} />
                <Stack.Screen name="FormEnregistrement" component={FormEnregistrement} />
                <Stack.Screen name="AuthentificationAnimaux" component={AuthentificationAnimaux} />
                <Stack.Screen name="Confirmation" component={Confirmation} />
            </Stack.Navigator>
        );
}

export default TracabiliteNavigator
