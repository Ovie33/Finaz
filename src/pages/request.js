import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {User} from '../redux';
import Iconf from 'react-native-vector-icons/Fontisto';

const Request = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        position: 'relative',
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <IconE name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
            letterSpacing: 0.5,
          }}>
          Request
        </Text>
        <Iconf name="bell" size={20} color="black" />
      </View>
      {/* input section */}
      <KeyboardAvoidingView
        style={{
          marginTop: 30,
          gap: 15,
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
            Recepient Account
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 13,
              letterSpacing: 1,
              marginTop: 5,
            }}
            placeholder="2133641576"
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
            Recipent Bank
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 13,
              letterSpacing: 1,
              marginTop: 5,
            }}
            placeholder="UBA"
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
            Amount
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 13,
              letterSpacing: 1,
              marginTop: 5,
            }}
            placeholder="₦50,000.00"
            placeholderTextColor="grey"
          />
        </View>
      </KeyboardAvoidingView>
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
          position: 'absolute',
          bottom: 60,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: 0.5,
          }}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    AppState: state.user,
  };
};

const mapDispatchToProps = (dispatch, encoded) => {
  return {
    dispLogout: payload => dispatch(User(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
