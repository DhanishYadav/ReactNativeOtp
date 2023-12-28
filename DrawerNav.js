import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { constant } from '../constants/constants';
import Colors from '../constants/Colors';
import CustomDrawer from './CustomDrawer';
import Icon from '../components/Icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from "../screens/Home"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  const navigation = useNavigation();
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
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: "#2f7dee",
        drawerItemStyle: styles.drawerItemStyles,
        drawerActiveTintColor: Colors.white,
        drawerLabelStyle: styles.drawerLabelStyles,
        drawerInactiveBackgroundColor: "#f2612b",
        drawerInactiveTintColor: "gray"
      }
      }
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#f2612b'
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerTintColor: 'white',
          headerTitle: "Kwic Pay",
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <View style={{ marginRight: 10 }}>
                <AntDesign name="logout" size={24} color="white" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({
  drawerStyle: {
    width: 240,
  },
  drawerItemStyles: {
    borderRadius: constant.borderRadius,
  },
  drawerLabelStyles: {
    fontSize: constant.textFontSize,
    marginHorizontal: -constant.SPACING,
  },
})