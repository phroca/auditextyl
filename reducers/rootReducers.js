// rootReducer.js

import { combineReducers } from 'redux';
import visiteurReducer from './visiteurReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  visiteur: visiteurReducer,
  form: formReducer
});

export default rootReducer;
