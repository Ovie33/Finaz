import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Iconf from 'react-native-vector-icons/Fontisto';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import Navbar from '../components/navbar';
import {HISTORY} from '../utilities/data';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = ({navigation, AppState}) => {
  const changePage = value => {
    navigation.push(value);
  };

  const RenderItems = ({data}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: '#fafafa',
          marginVertical: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 25,
          }}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              alignItems: 'flex-start',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#000',
                letterSpacing: 0.25,
              }}>
              {data.type}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#000',
              }}>
              {data.date}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: data.type == 'Received Money' ? 'green' : 'red',
              letterSpacing: 0.25,
            }}>
            {data.amount}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              color: '#000',
              letterSpacing: 0.25,
            }}>
            {data.time}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          flex: 1,
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              console.log('you refreshed');
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        data={[{}]}
        renderItem={({item}) => {
          return (
            <>
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
              {/* balance setion */}
              <LinearGradient
                colors={['#003366', '#04AFAF']}
                style={{
                  marginVertical: 25,
                  height: 110,
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
                start={{x: 0.35, y: 0}}
                end={{x: 1, y: 0}}>
                <Image
                  style={{
                    height: 110,
                    width: 150,
                    position: 'absolute',
                    top: 0,
                    right: 1,
                  }}
                  source={require('../../assets/Vector.png')}
                />
                <View
                  style={{
                    alignItems: 'flex-start',
                    gap: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#fff',
                      fontWeight: '400',
                      letterSpacing: 0.25,
                    }}>
                    Current Balance
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#fff',
                      fontWeight: '800',
                      letterSpacing: 0.5,
                    }}>
                    ₦700,000.00
                  </Text>
                </View>
                <TouchableOpacity>
                  <IconA name="eyeo" size={18} color="#fff" />
                </TouchableOpacity>
              </LinearGradient>
              {/* options section */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('sendmoney');
                  }}
                  style={{
                    alignItems: 'center',
                    gap: 3,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#003366',
                      alignItems: 'center',
                      height: 65,
                      width: 65,
                      borderRadius: 100,
                      justifyContent: 'center',
                    }}>
                    <IconA name="arrowup" size={25} color="#fff" />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#000',
                      letterSpacing: 0.25,
                    }}>
                    Send
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('addmoney');
                  }}
                  style={{
                    alignItems: 'center',
                    gap: 3,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FAFAFA',
                      alignItems: 'center',
                      height: 65,
                      width: 65,
                      borderRadius: 100,
                      justifyContent: 'center',
                    }}>
                    <IconA name="plus" size={25} color="#003366" />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#000',
                      letterSpacing: 0.25,
                    }}>
                    Add Money
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('request');
                  }}
                  style={{
                    alignItems: 'center',
                    gap: 3,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FAFAFA',
                      alignItems: 'center',
                      height: 65,
                      width: 65,
                      borderRadius: 100,
                      justifyContent: 'center',
                    }}>
                    <IconA name="arrowdown" size={25} color="#003366" />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#000',
                      letterSpacing: 0.25,
                    }}>
                    Request
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('more');
                  }}
                  style={{
                    alignItems: 'center',
                    gap: 3,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FAFAFA',
                      alignItems: 'center',
                      height: 65,
                      width: 65,
                      borderRadius: 100,
                      justifyContent: 'center',
                    }}>
                    <IconE
                      name="dots-three-horizontal"
                      size={25}
                      color="#003366"
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#000',
                      letterSpacing: 0.25,
                    }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
              {/* history section */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '700',
                    color: '#000',
                    letterSpacing: 0.5,
                  }}>
                  Recent Activity
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
              {HISTORY.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 10,
                      backgroundColor: '#fafafa',
                      marginVertical: 8,
                      borderRadius: 8,
                      elevation: 0.25,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 25,
                      }}>
                      <Image
                        source={require('../../assets/profile.jpg')}
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 100,
                        }}
                      />
                      <View
                        style={{
                          alignItems: 'flex-start',
                          gap: 5,
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#000',
                            letterSpacing: 0.25,
                          }}>
                          {data.type} Money
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: '#000',
                          }}>
                          {data.date}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        alignItems: 'flex-end',
                        gap: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          color: data.type == 'Received' ? 'green' : 'red',
                          letterSpacing: 0.25,
                        }}>
                        {data.type == 'Received'
                          ? `+ ${data.amount}`
                          : `- ${data.amount}`}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '300',
                          color: '#000',
                          letterSpacing: 0.25,
                        }}>
                        {data.time}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </>
          );
        }}
      />

      <Navbar changePage={changePage} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
