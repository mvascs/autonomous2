import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// import React from 'react'

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// import Icon from 'react-native-vector-icons/FontAwesome'
// import Teste from './screens/Teste'
// import Teste2 from './screens/Teste2'



// const MenuRoutes = {
//     Teste: {
//         name: 'Teste',
//         screen: Teste,
//         navigationOptions: {
//             title: 'Teste',
//             tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
//         }
//     },
//     Teste2: {
//         name: 'Teste2',
//         screen: Teste2,
//         navigationOptions: {
//             title: 'Teste2',
//             tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
//         }
//     }
// }


// const MenuConfig = {
//     initialRouteName: 'Teste',
//     tabBarOptions: {
//         showLable: false,

//     }
// }


// const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)


// export default MenuNavigator;