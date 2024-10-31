import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Navbar from '../components/navbar';
import IconE from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {User} from '../redux';
import Iconf from 'react-native-vector-icons/Fontisto';

const More = ({navigation, route, dispLogout}) => {
  // function to change the page
  const changePage = value => {
    navigation.replace(value);
  };

  return (
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
          More
        </Text>

        <Iconf name="bell" size={20} color="black" />
      </View>
      {/* options */}
      <View
        style={{
          marginTop: 30,
          gap: 10,
        }}>
        <TouchableOpacity
          style={{
            padding: 13,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: '400',
            }}>
            Profile
          </Text>
          <IconE name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: '400',
            }}>
            Settings
          </Text>
          <IconE name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: '400',
            }}>
            Support
          </Text>
          <IconE name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: '400',
            }}>
            Terms & Conditions
          </Text>
          <IconE name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: '400',
            }}>
            Privacy Policy
          </Text>
          <IconE name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: '400',
            }}>
            Help
          </Text>
          <IconE name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('login');
          }}
          style={{
            padding: 13,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'red',
              fontWeight: '400',
            }}>
            Logout
          </Text>
          <IconE name="chevron-right" size={20} color="red" />
        </TouchableOpacity>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(More);
