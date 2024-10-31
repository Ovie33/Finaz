import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Iconf from 'react-native-vector-icons/Fontisto';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import Navbar from '../components/navbar';

const Transfer = ({navigation, route}) => {
  const changePage = value => {
    navigation.replace(value);
  };
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <>
      <View
        style={{
          paddingHorizontal: 15,
          flex: 1,
          backgroundColor: '#fff',
        }}>
        {/* profile picture and notifications */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/profile.jpg')}
              style={{
                height: 40,
                width: 40,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#000',
              }}>
              Welcome Oviemo
            </Text>
          </View>
          <Iconf name="bell" size={20} color="black" />
        </View>
        {/* date selection period */}
        <View
          style={{
            gap: 15,
            marginTop: 25,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              backgroundColor: '#fafafa',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                backgroundColor: '#003366',
                borderRadius: 20,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#fff',
                }}>
                Day
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                backgroundColor: '#003366',
                borderRadius: 20,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#fff',
                }}>
                Week
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                backgroundColor: '#003366',
                borderRadius: 20,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#fff',
                }}>
                Month
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                backgroundColor: '#003366',
                borderRadius: 20,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#fff',
                }}>
                Year
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                backgroundColor: '#003366',
                borderRadius: 20,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#fff',
                }}>
                All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              backgroundColor: '#fafafa',
              borderRadius: 10,
            }}>
            <IconE name="chevron-left" size={20} color="#000" />
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontWeight: '400',
              }}>
              July
            </Text>
            <IconE name="chevron-right" size={20} color="#000" />
          </View>
        </View>
        {/* credits and debit cards */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 25,
          }}>
          <View
            style={{
              backgroundColor: '#04AFAF',
              height: 180,
              borderRadius: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '48%',
              position: 'relative',
            }}>
            <Image
              style={{
                height: 105,
                width: '100%',
                position: 'absolute',
                top: 0,
                right: 0,
              }}
              source={require('../../assets/vector2.png')}
            />
            <View
              style={{
                alignSelf: 'flex-end',
                alignItems: 'flex-start',
                gap: 5,
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '400',
                  letterSpacing: 0.25,
                }}>
                Credits
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                +₦400,000.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D16645',
              height: 180,
              borderRadius: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '48%',
              position: 'relative',
            }}>
            <Image
              style={{
                height: 105,
                width: '100%',
                position: 'absolute',
                top: 0,
                right: 0,
              }}
              source={require('../../assets/vector2.png')}
            />
            <View
              style={{
                alignSelf: 'flex-end',
                alignItems: 'flex-start',
                gap: 5,
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '400',
                  letterSpacing: 0.25,
                }}>
                Debits
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                -₦100,000.00
              </Text>
            </View>
          </View>
        </View>
        {/* transaction history section */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: '#000',
              letterSpacing: 0.5,
            }}>
            Transaction History
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '600',
              color: '#003366',
              letterSpacing: 0.25,
            }}>
            See All
          </Text>
        </View>
      </View>
      <Navbar changePage={changePage} />
    </>
  );
};

export default Transfer;
