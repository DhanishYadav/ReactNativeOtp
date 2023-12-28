import React, { useState } from 'react';
import {
  Image, LayoutAnimation, Platform, StyleSheet, Text,
  TouchableNativeFeedback, TouchableOpacity, UIManager, View, Alert
} from 'react-native';
import { Container } from '../components/Container';
import { Row } from '../components/Row';
import { constant, drawerMenu } from '../constants/constants';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Styles from '../common/Styles';
import Icon from '../components/Icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const [menuIndex, setMenuIndex] = useState(-1);
  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            AsyncStorage.removeItem('userEmail');
            navigation.navigate("Login")
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <Container>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Profile')}>
        <View style={styles.header}>
          <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.name} >Dhanish Yadav</Text>
            <Text>Software Engineer</Text>
          </View>
        </View>
      </TouchableNativeFeedback>

      {drawerMenu.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={[styles.menu, { backgroundColor: item.bg + '99' }]}
            onPress={() => {
              // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              LayoutAnimation.configureNext(LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'))
              setMenuIndex(menuIndex === index ? -1 : index);
            }}>
            <Row style={styles.item}>
              <Icon type={item.type} name={item.icon} size={22} />
              <Text style={[styles.text, {
                color: menuIndex === index ? Colors.black : Colors.gray,
              }]}>{item.title}</Text>
            </Row>

            {menuIndex === index && (
              <View style={{ borderRadius: constant.borderRadius, backgroundColor: item.bg }}>
                {item.menuList.map((sub, subIndex) => {
                  return (
                    <>
                      <TouchableOpacity
                        key={subIndex}
                        style={styles.subMenu}
                        onPress={() => navigation.navigate(sub.route)}>
                        <Icon type={sub.type} name={sub.icons} size={22} color={"white"} />
                        <Text style={{
                          marginHorizontal: 10, color: "white", fontSize: 14,
                          fontWeight: "bold"
                        }}>{sub.title}</Text>
                      </TouchableOpacity>
                      <View style={styles.spacer} />
                    </>
                  )
                }

                )}

              </View>
            )
            }
          </TouchableOpacity>
        );
      })}
      <View style={[styles.spacer, { marginVertical: 20 }]} />
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.bottom}>
          <Text style={styles.testStyle}>Logout</Text>
          <AntDesign name="logout" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: constant.SPACING,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  header: {
    padding: constant.SPACING,
    ...Styles.rowView,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  testStyle: {
    fontSize: 16,
    fontWeight: "800",
    color: "white",
    marginLeft: 10,
  },
  menu: {
    marginHorizontal: constant.SPACING / 1.7,
    marginVertical: constant.SPACING / 2.5,
    borderRadius: constant.borderRadius,
  },
  item: {
    paddingHorizontal: constant.SPACING / 1.5,
    paddingVertical: constant.SPACING / 1.2,
  },
  text: {
    fontSize: constant.textFontSize,
    paddingHorizontal: constant.SPACING,
  },
  subMenu: {
    paddingHorizontal: constant.SPACING,
    paddingVertical: constant.SPACING / 1,
    flexDirection: "row",
  },
  spacer: {
    width: '90%',
    height: 1,
    backgroundColor: Colors.light,
    alignSelf: 'center',
  },
  bottom: {
    backgroundColor: "#f2612b",
    height: 45,
    flexDirection: "row",
    width: "93%",
    justifyContent: "space-between",
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: "center",
    paddingLeft: 5,
  },
});
