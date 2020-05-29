import React from 'react';

import { FridgeList, FridgeDetail, AddItem } from '../../pages/Main';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// types
type RootStackParamList = {
  Main: undefined;
};

type MainStackParamList = {
  FridgeList: undefined;
  FridgeDetail: undefined;
  AddItem: undefined;
};

type FridgeListScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeList'>;
type FridgeDetailScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeDetail'>;
type AddItemScreenNavigationProp = StackNavigationProp<MainStackParamList, 'AddItem'>;

type FridgeListProps = {
  navigation: FridgeListScreenNavigationProp;
};
type FridgeDetailProps = {
  navigation: FridgeDetailScreenNavigationProp;
};

type AddItemProps = {
  navigation: AddItemScreenNavigationProp;
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
    <mainStack.Navigator initialRouteName='AddItem' headerMode='none'>
      <mainStack.Screen name='FridgeList' component={renderFridgeList} />
      <mainStack.Screen name='FridgeDetail' component={renderFridgeDetail} />
      <mainStack.Screen name='AddItem' component={renderAddItem} />
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

function renderAddItem({ navigation }: AddItemProps) {
  return <AddItem />;
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
