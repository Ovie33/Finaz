import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {User} from '../redux';
import Iconf from 'react-native-vector-icons/Fontisto';
import Navbar from '../components/navbar';
import Example from '../../assets/example.svg';

const Profile = ({navigation}) => {
  const changePage = value => {
    navigation.push(value);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
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
            Edit Profile
          </Text>
          <Iconf name="bell" size={20} color="black" />
        </View>
        {/* image section */}
        <Image
          source={require('../../assets/profile.jpg')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            marginTop: 35,
            alignSelf: 'center',
          }}
        />
        {/* input section */}
        <KeyboardAvoidingView
          style={{
            marginTop: 35,
            gap: 25,
          }}>
          <View
            style={{
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: 'lightgrey',
              position: 'relative',
              borderRadius: 10,
            }}>
            <TextInput
              style={{
                fontSize: 14,
                color: '#000',
                letterSpacing: 0.5,
              }}
              value="Obukohwo Oviemo"
            />
            <Text
              style={{
                position: 'absolute',
                top: -9,
                left: 20,
                color: '#003366',
                fontSize: 12,
                backgroundColor: '#fff',
              }}>
              Name
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: 'lightgrey',
              position: 'relative',
              borderRadius: 10,
            }}>
            <TextInput
              style={{
                fontSize: 14,
                color: '#000',
                letterSpacing: 0.5,
              }}
              value="obukohwooviemo33@gmail.com"
            />
            <Text
              style={{
                position: 'absolute',
                top: -9,
                left: 20,
                color: '#003366',
                fontSize: 12,
                backgroundColor: '#fff',
              }}>
              Email
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: 'lightgrey',
              position: 'relative',
              borderRadius: 10,
            }}>
            <TextInput
              style={{
                fontSize: 14,
                color: '#000',
                letterSpacing: 0.5,
              }}
              value="07045866108"
            />
            <Text
              style={{
                position: 'absolute',
                top: -9,
                left: 20,
                color: '#003366',
                fontSize: 12,
                backgroundColor: '#fff',
              }}>
              Phone Number
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: 'lightgrey',
              position: 'relative',
              borderRadius: 10,
            }}>
            <TextInput
              style={{
                fontSize: 14,
                color: '#000',
                letterSpacing: 0.5,
              }}
              value="03 April, 2000"
            />
            <Text
              style={{
                position: 'absolute',
                top: -9,
                left: 20,
                color: '#003366',
                fontSize: 12,
                backgroundColor: '#fff',
              }}>
              Date of Birth
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
      <Navbar changePage={changePage} />
    </>
  );
};

export default Profile;
