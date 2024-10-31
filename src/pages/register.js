import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {User} from '../redux';

const Register = ({navigation, route, dispSgin}) => {
  // State variables to store form inputs,
  // errors, and form validity
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   // Trigger form validation when name,
  //   // email, or password changes
  //   validateForm();
  // }, [name, email, password]);

  // const validateForm = () => {
  //   let errors = {};

  //   // Validate name field
  //   if (!name) {
  //     errors.name = 'Name is required.';
  //   }

  //   // Validate email field
  //   if (!email) {
  //     errors.email = 'Email is required.';
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = 'Email is invalid.';
  //   }

  //   // Validate password field
  //   if (!password) {
  //     errors.password = 'Password is required.';
  //   } else if (password.length < 6) {
  //     errors.password = 'Password must be at least 6 characters.';
  //   }

  //   if (!password2) {
  //     errors.password2 = 'Confirm password is required.';
  //   } else if (password && password2 !== password) {
  //     errors.password2 = 'Passwords do not match.';
  //   }

  //   // Set the errors and update form validity
  //   setErrors(errors);
  //   setIsFormValid(Object.keys(errors).length === 0);
  // };

  const handleSubmit = () => {
    let userData = {
      name,
      password,
      email,
    };
    dispSgin(userData);
    navigation.replace('dashboard');
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          color: '#000',
          letterSpacing: 0.75,
          marginTop: 55,
        }}>
        Hello There!
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '400',
          color: '#000',
          letterSpacing: 1,
          marginTop: 5,
        }}>
        Create a new account
      </Text>
      {/* input section */}
      <KeyboardAvoidingView
        style={{
          marginTop: 20,
          gap: 10,
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
            Full name
          </Text>
          <TextInput
            onChangeText={setName}
            style={{
              borderWidth: 1,
              paddingHorizontal: 8,
              paddingVertical: 10,
              borderRadius: 13,
              letterSpacing: 2,
              marginTop: 5,
            }}
            placeholder="Rachael oberniokuma"
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
            Email
          </Text>
          <TextInput
            onChangeText={setEmail}
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
            keyboardType="email-address"
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
            onChangeText={setPassword}
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
            secureTextEntry={true}
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
            Confirm Password
          </Text>
          <TextInput
            onChangeText={setPassword2}
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
            secureTextEntry={true}
          />
        </View>
      </KeyboardAvoidingView>
      {/* button */}
      <TouchableOpacity
        onPress={() => {
          handleSubmit();
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
          Create Account
        </Text>
      </TouchableOpacity>
      {/* Login up button */}
      <TouchableOpacity
        onPress={() => {
          navigation.replace('login');
        }}>
        <Text
          style={{
            color: '#000',
            marginTop: 10,
            textAlign: 'center',
            letterSpacing: 0.5,
          }}>
          Already have an account?{' '}
          <Text
            style={{
              color: '#003366',
            }}>
            Login
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
