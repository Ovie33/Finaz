import {legacy_createStore as createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../state/reducer';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const AllReducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

let store = createStore(AllReducers);
let persistor = persistStore(store);

export default () => {
  return {
    store,
    persistor,
  };
};
