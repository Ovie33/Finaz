import React, {useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';

const Onboarding = ({navigation, route, AppState}) => {
  let app = AppState.initialized;

  // Use useEffect to handle navigation side effect
  useEffect(() => {
    if (app) {
      navigation.navigate('login');
    }
  }, [app, navigation]); // Dependency array includes app and navigation to run effect when they change

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
          source={require('../../assets/image1.jpg')}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: '#000',
            marginTop: 30,
            letterSpacing: 0.5,
          }}>
          Welcome to Finaz
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: '#000',
            letterSpacing: 0.5,
          }}>
          Your trusted finical partner
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push('onboard2');
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
            Next
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
    dispSgin: payload => dispatch(User(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
