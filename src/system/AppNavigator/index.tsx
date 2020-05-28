import React from 'react';
import {View} from 'react-native';

import {FridgeList} from '../../pages/Main';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

// types
type RootStackParamList = {
  Main: undefined;
};

type MainStackParamList = {
  FridgeList: undefined;
};

type FridgeListScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'FridgeList'
>;

type FridgeListProps = {
  navigation: FridgeListScreenNavigationProp;
};

//stacks
const rootStack = createStackNavigator<RootStackParamList>();
const mainStack = createStackNavigator<MainStackParamList>();

function Root() {
  return (
    <rootStack.Navigator initialRouteName="Main" headerMode="none">
      <rootStack.Screen name="Main" component={Main} />
    </rootStack.Navigator>
  );
}

function Main() {
  return (
    <mainStack.Navigator initialRouteName="FridgeList" headerMode="none">
      <mainStack.Screen name="FridgeList" component={renderFridgeList} />
    </mainStack.Navigator>
  );
}

//render functions

function renderFridgeList({navigation}: FridgeListProps) {
  return <FridgeList />;
}

// navigatior

function AppNavigator() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

export default AppNavigator;
