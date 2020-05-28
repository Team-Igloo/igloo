import React from 'react';

import { FridgeList, FridgeDetail } from '../../pages/Main';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// types
type RootStackParamList = {
  Main: undefined;
};

type MainStackParamList = {
  FridgeList: undefined;
  FridgeDetail: undefined;
};

type FridgeListScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeList'>;
type FridgeDetailScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeDetail'>;

type FridgeListProps = {
  navigation: FridgeListScreenNavigationProp;
};
type FridgeDetailProps = {
  navigation: FridgeDetailScreenNavigationProp;
};

//stacks
const rootStack = createStackNavigator<RootStackParamList>();
const mainStack = createStackNavigator<MainStackParamList>();

function Root() {
  return (
    <rootStack.Navigator initialRouteName='Main' headerMode='none'>
      <rootStack.Screen name='Main' component={Main} />
    </rootStack.Navigator>
  );
}

function Main() {
  return (
    <mainStack.Navigator initialRouteName='FridgeDetail' headerMode='none'>
      <mainStack.Screen name='FridgeList' component={renderFridgeList} />
      <mainStack.Screen name='FridgeDetail' component={renderFridgeDetail} />
    </mainStack.Navigator>
  );
}

//render functions

function renderFridgeList({ navigation }: FridgeListProps) {
  return <FridgeList />;
}

function renderFridgeDetail({ navigation }: FridgeDetailProps) {
  return <FridgeDetail />;
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
