
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from './TabNavigator';
import ConfirmationSignUpScreen from '../screens/ConfirmationSignUpScreen'
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ForgotPasswordEmailSubmitScreen from '../screens/ForgotPasswordEmailSubmitScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false, presentation: 'fullScreenModal' }}>
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name="Signin" component={SignInScreen} />
          <Stack.Screen name="Confirmation Code" component={ConfirmationSignUpScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Mdp Oublié" component={ForgotPasswordScreen} />
          <Stack.Screen name="Changement Mdp" component={ForgotPasswordEmailSubmitScreen} />
        </Stack.Navigator>
    );
  }

export default AppNavigator;