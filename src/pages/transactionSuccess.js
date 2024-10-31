import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Iconf from 'react-native-vector-icons/Fontisto';
import IconE from 'react-native-vector-icons/Entypo';

const TransactionSuccess = ({navigation}) => {
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
          Success
        </Text>
        <Iconf name="bell" size={20} color="black" />
      </View>
      {/* image */}
      <Image
        style={{
          height: 230,
          width: 400,
          alignSelf: 'center',
          marginTop: 150,
        }}
        source={require('../../assets/image3.jpg')}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: '#000',
          letterSpacing: 0.5,
          marginTop: 45,
          textAlign: 'center',
        }}>
        Your transaction is successful!
      </Text>
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
          alignSelf: 'center',
          marginTop: 50,
          position: 'absolute',
          bottom: 50,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: 0.5,
          }}>
          Go back Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionSuccess;
