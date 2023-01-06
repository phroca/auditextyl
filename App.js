import { Amplify } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigators/AppNavigator';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;

