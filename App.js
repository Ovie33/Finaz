import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Onboarding from './src/pages/onboarding';
import Onboarding2 from './src/pages/onboarding2';
import Login from './src/pages/login';
import Register from './src/pages/register';
import Dashboard from './src/pages/dashboard';
import Transfer from './src/pages/transfer';
import More from './src/pages/more';
import Request from './src/pages/request';
import AddMoney from './src/pages/addMoney';
import SendMoney from './src/pages/sendMoney';
import TransactionSuccess from './src/pages/transactionSuccess';
import Profile from './src/pages/profile';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  }, []);

  return (
    <>
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          {/* <AppNavigator /> */}
          <NavigationContainer theme={DefaultTheme}>
            <Stack.Navigator initialRouteName="onboard">
              <Stack.Screen
                name="onboard"
                component={Onboarding}
                options={{
                  header: () => null,
                }}
              />
              <Stack.Screen
                name="onboard2"
                options={{
                  header: () => {
                    return null;
                  },
                }}
                component={Onboarding2}
              />
              <Stack.Screen
                name="login"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={Login}
              />
              <Stack.Screen
                name="register"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={Register}
              />
              <Stack.Screen
                name="dashboard"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={Dashboard}
              />
              <Stack.Screen
                name="transfer"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={Transfer}
              />
              <Stack.Screen
                name="addmoney"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={AddMoney}
              />
              <Stack.Screen
                name="request"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={Request}
              />
              <Stack.Screen
                name="more"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={More}
              />
              <Stack.Screen
                name="sendmoney"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={SendMoney}
              />
              <Stack.Screen
                name="success"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={TransactionSuccess}
              />
              <Stack.Screen
                name="profile"
                options={{
                  title: '',
                  header: () => {
                    return null;
                  },
                }}
                component={Profile}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
