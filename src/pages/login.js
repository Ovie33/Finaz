import React from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const Login = ({navigation, route, AppState}) => {
  let app = AppState;
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          paddingTop: 50,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: '#000',
            letterSpacing: 0.75,
            marginTop: 15,
          }}>
          Welcome !
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#000',
            letterSpacing: 1,
            marginTop: 5,
          }}>
          Sign in to continue
        </Text>
        {/* input section */}
        <KeyboardAvoidingView
          style={{
            marginTop: 30,
            gap: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#000',
                letterSpacing: 1,
                marginTop: 5,
              }}>
              Email
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 10,
                borderRadius: 13,
                letterSpacing: 2,
                marginTop: 5,
              }}
              placeholder="example@gmail.com"
              placeholderTextColor="grey"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#000',
                letterSpacing: 1,
                marginTop: 5,
              }}>
              Password
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 10,
                borderRadius: 13,
                letterSpacing: 2.5,
                marginTop: 5,
              }}
              placeholder="************"
              placeholderTextColor="grey"
            />
          </View>
        </KeyboardAvoidingView>
        {/* forgotten password */}
        <TouchableOpacity>
          <Text
            style={{
              color: '#003366',
              alignSelf: 'flex-end',
              marginTop: 8,
            }}>
            Forget password?
          </Text>
        </TouchableOpacity>
        {/* button */}
        <TouchableOpacity
          onPress={() => {
            navigation.replace('dashboard');
          }}
          style={{
            paddingVertical: 15,
            backgroundColor: '#003366',
            width: '100%',
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
              letterSpacing: 0.5,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        {/* sign up button */}
        <TouchableOpacity
          onPress={() => {
            navigation.replace('register');
          }}>
          <Text
            style={{
              color: '#000',
              marginTop: 10,
              textAlign: 'center',
              letterSpacing: 0.5,
            }}>
            Don't have an account?{' '}
            <Text
              style={{
                color: '#003366',
              }}>
              Create account
            </Text>
          </Text>
        </TouchableOpacity>
        {/* or sign up options */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View
            style={{
              height: 2,
              width: '40%',
              backgroundColor: 'grey',
            }}></View>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              letterSpacing: 0.5,
            }}>
            or with
          </Text>
          <View
            style={{
              height: 2,
              width: '40%',
              backgroundColor: 'grey',
            }}></View>
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => {
  return {
    AppState: state.user,
  };
};

const mapDispatchToProps = (dispatch, encoded) => {
  return {
    dispSgin: payload => dispatch(User(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
