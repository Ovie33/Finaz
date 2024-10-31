import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {initAuth} from '../redux';

const Onboarding2 = ({navigation, route, disInit}) => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#fff',
          paddingHorizontal: 15,
        }}>
        <Image
          style={{
            alignSelf: 'center',
            marginTop: 50,
            height: 450,
            width: '95%',
          }}
          source={require('../../assets/image2.jpg')}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: '#000',
            marginTop: 30,
            letterSpacing: 0.5,
          }}>
          Manage your finance effortlessly
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: '#000',
            letterSpacing: 0.5,
          }}>
          Secrue and easy transactions
        </Text>
        <TouchableOpacity
          onPress={() => {
            disInit();
            navigation.replace('login');
          }}
          style={{
            paddingVertical: 15,
            backgroundColor: '#003366',
            width: '100%',
            borderRadius: 15,
            marginTop: 100,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
              letterSpacing: 0.5,
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
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
    disInit: payload => dispatch(initAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding2);
