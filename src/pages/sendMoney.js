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
import IconF from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

const SendMoney = ({navigation}) => {
  return (
    <ScrollView
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
          Send Money
        </Text>
        <Iconf name="bell" size={20} color="black" />
      </View>
      {/* card section */}
      <KeyboardAvoidingView
        style={{
          marginTop: 30,
          gap: 15,
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#fafafa',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 13,
        }}>
        <TextInput
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            letterSpacing: 0.5,
            marginTop: 5,
            width: '80%',
          }}
          placeholder="VISA **** **** **** 1234"
          placeholderTextColor="grey"
        />
        <View
          style={{
            alignItems: 'center',
            width: '20%',
          }}>
          <IconE name="chevron-small-up" size={15} color="black" />
          <IconE name="chevron-small-down" size={15} color="black" />
        </View>
      </KeyboardAvoidingView>
      {/* choose transaction */}
      <Text
        style={{
          fontSize: 14,
          color: '#000',
          fontWeight: '500',
          marginTop: 20,
        }}>
        Choose Transaction
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#003366',
            padding: 20,
            justifyContent: 'center',
            height: 110,
            width: '31%',
            borderBottomLeftRadius: 25,
            borderTopRightRadius: 25,
            gap: 8,
          }}>
          <IconF name="credit-card-alt" size={20} color="#fff" />
          <Text
            style={{
              fontSize: 12,
              color: '#fff',
              fontWeight: '400',
              letterSpacing: 0.5,
            }}>
            Transfer via card number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#a0a0a0',
            padding: 20,
            justifyContent: 'center',
            height: 110,
            width: '31%',
            borderBottomLeftRadius: 25,
            borderTopRightRadius: 25,
            gap: 8,
          }}>
          <IconE name="user" size={23} color="#fff" />
          <Text
            style={{
              fontSize: 12,
              color: '#fff',
              fontWeight: '400',
              letterSpacing: 0.5,
            }}>
            Transfer to same bank
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#a0a0a0',
            padding: 20,
            justifyContent: 'center',
            height: 110,
            width: '31%',
            borderBottomLeftRadius: 25,
            borderTopRightRadius: 25,
            gap: 8,
          }}>
          <IconF name="bank" size={20} color="#fff" />
          <Text
            style={{
              fontSize: 12,
              color: '#fff',
              fontWeight: '400',
              letterSpacing: 0.5,
            }}>
            Transfer to other banks
          </Text>
        </TouchableOpacity>
      </View>
      {/* choose beneficiary */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#000',
            fontWeight: '500',
            marginTop: 20,
          }}>
          Choose beneficiary
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#66CCFF',
            fontWeight: '500',
            marginTop: 20,
          }}>
          Favorite
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#8B8B8B',
            paddingHorizontal: 15,
            justifyContent: 'center',
            height: 120,
            borderRadius: 8,
            width: '28%',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              height: 60,
              width: 60,
              borderRadius: 100,
              justifyContent: 'center',
            }}>
            <IconA name="plus" size={25} color="#a0a0a0" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            justifyContent: 'center',
            height: 120,
            borderRadius: 8,
            width: '33%',
            alignItems: 'center',
            backgroundColor: '#fafafa',
            gap: 10,
          }}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              color: '#000',
            }}>
            Emma
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            justifyContent: 'center',
            height: 120,
            borderRadius: 8,
            width: '33%',
            alignItems: 'center',
            backgroundColor: '#fafafa',
            gap: 10,
          }}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              color: '#000',
            }}>
            Danielle
          </Text>
        </TouchableOpacity>
      </View>
      {/* input setion */}
      <KeyboardAvoidingView
        style={{
          gap: 10,
          padding: 15,
          elevation: 1,
          marginTop: 20,
          backgroundColor: '#fff',
          borderRadius: 10,
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 13,
            letterSpacing: 1,
            marginTop: 5,
            borderColor: 'lightgrey',
          }}
          placeholder="Full name"
          placeholderTextColor="grey"
        />
        <TextInput
          style={{
            borderWidth: 1,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 13,
            letterSpacing: 1,
            marginTop: 5,
            borderColor: 'lightgrey',
          }}
          keyboardType="numeric"
          placeholder="Account Number"
          placeholderTextColor="grey"
        />
        <TextInput
          style={{
            borderWidth: 1,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 13,
            letterSpacing: 1,
            marginTop: 5,
            borderColor: 'lightgrey',
          }}
          keyboardType="numeric"
          placeholder="Amount"
          placeholderTextColor="grey"
        />
        {/* button */}
        <TouchableOpacity
          onPress={() => {
            navigation.replace('success');
          }}
          style={{
            paddingVertical: 15,
            backgroundColor: '#003366',
            width: '100%',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 50,
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
      </KeyboardAvoidingView>
    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SendMoney);
