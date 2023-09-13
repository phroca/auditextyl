import React from 'react';
import { Amplify } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducers';
import AppNavigator from './navigators/AppNavigator';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

// Créez votre store Redux
const store = createStore(rootReducer);

const App = () => {
return (
<Provider store={store}>
<NavigationContainer>
<AppNavigator />
</NavigationContainer>
</Provider>
);
};

export default App;