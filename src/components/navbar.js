import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome6';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const Navbar = ({changePage}) => {
  return (
    <View
      style={{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        backgroundColor: '#fff',
        alignSelf: 'baseline',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
      }}>
      <TouchableOpacity
        onPress={() => {
          changePage('dashboard');
        }}
        style={{
          alignItems: 'center',
          gap: 3,
        }}>
        <IconA name="home" size={20} color="#003366" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000',
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          changePage('transfer');
        }}
        style={{
          alignItems: 'center',
          gap: 3,
        }}>
        <IconM name="bank-transfer" size={20} color="#003366" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000',
          }}>
          Transfer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          changePage('profile');
        }}
        style={{
          alignItems: 'center',
          gap: 3,
        }}>
        <IconF name="user" size={20} color="#003366" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000',
          }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
