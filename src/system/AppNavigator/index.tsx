import React from 'react';

import { FridgeList, FridgeDetail, AddItem } from '../../pages/Main';
import { RecipeList, AddRecipes, RecipeDetail } from '../../pages/Recipes';

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
  AddRecipes: undefined;
  RecipeDetail: undefined;
};

//

type FridgeListScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeList'>;
type FridgeDetailScreenNavigationProp = StackNavigationProp<MainStackParamList, 'FridgeDetail'>;
type AddItemScreenNavigationProp = StackNavigationProp<MainStackParamList, 'AddItem'>;

type RecipeListScreenNavigationProp = StackNavigationProp<RecipesStackParamList, 'RecipeList'>;
type AddRecipesScreenNavigationProp = StackNavigationProp<RecipesStackParamList, 'AddRecipes'>;
type RecipeDetailScreenNavigationProp = StackNavigationProp<RecipesStackParamList, 'RecipeDetail'>;

//
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
type AddRecipesProps = {
  navigation: AddRecipesScreenNavigationProp;
};
type RecipeDetailProps = {
  navigation: RecipeDetailScreenNavigationProp;
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
    <recipesStack.Navigator initialRouteName='RecipeDetail' headerMode='none'>
      <recipesStack.Screen name='RecipeList' component={renderRecipeList} />
      <recipesStack.Screen name='AddRecipes' component={renderAddRecipes} />
      <recipesStack.Screen name='RecipeDetail' component={renderRecipeDetail} />
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

function renderAddRecipes({ navigation }: AddRecipesProps) {
  return <AddRecipes />;
}

function renderRecipeDetail({ navigation }) {
  return <RecipeDetail />;
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
