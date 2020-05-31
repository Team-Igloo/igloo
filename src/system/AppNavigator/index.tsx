import React from 'react';

import { FridgeList, FridgeDetail, AddItem } from '../../pages/Main';
import { RecipeList } from '../../pages/Recipes';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

/// types
type RootStackParamList = {
  Main: undefined;
  Recipes: undefined;
};

//

type MainStackParamList = {
  FridgeList: undefined;
  FridgeDetail: undefined;
  AddItem: undefined;
};

type RecipesStackParamList = {
  RecipeList: undefined;
};

//

type FridgeListScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeList'>;
type FridgeDetailScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeDetail'>;
type AddItemScreenNavigationProp = StackNavigationProp<MainStackParamList, 'AddItem'>;

type RecipeListScreenNavigationProp = StackNavigationProp<RecipesStackParamList, 'RecipeList'>;

type FridgeListProps = {
  navigation: FridgeListScreenNavigationProp;
};
type FridgeDetailProps = {
  navigation: FridgeDetailScreenNavigationProp;
};
type AddItemProps = {
  navigation: AddItemScreenNavigationProp;
};

type RecipeListProps = {
  navigation: RecipeListScreenNavigationProp;
};

//stacks
const rootStack = createStackNavigator<RootStackParamList>();
const mainStack = createStackNavigator<MainStackParamList>();
const recipesStack = createStackNavigator<RecipesStackParamList>();

function Root() {
  return (
    <rootStack.Navigator initialRouteName='Recipes' headerMode='none'>
      <rootStack.Screen name='Main' component={Main} />
      <rootStack.Screen name='Recipes' component={Recipes} />
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

function Recipes() {
  return (
    <recipesStack.Navigator initialRouteName='RecipeList' headerMode='none'>
      <recipesStack.Screen name='RecipeList' component={renderRecipeList} />
    </recipesStack.Navigator>
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

function renderRecipeList({ navigation }: RecipeListProps) {
  return <RecipeList />;
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
