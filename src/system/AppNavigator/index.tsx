import colors from '@constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { AddItem, FridgeDetail, FridgeList } from '../../pages/Main';
import { AddRecipes, RecipeDetail, RecipeList } from '../../pages/Recipes';

interface RootStackParamList extends Record<string, Record<string, unknown> | undefined> {
  RecipeList: Record<string, unknown>;
  AddRecipes: Record<string, unknown>;
  RecipeDetail: Record<string, unknown>;
  FridgeList: Record<string, unknown>;
  FridgeDetail: Record<string, unknown>;
  AddItem: Record<string, unknown>;
  Recipes: Record<string, unknown>;
  Fridge: Record<string, unknown>;
}

type FridgeStackScreenNameList = 'FridgeList' | 'FridgeDetail' | 'AddItem';
type RecipesStackScreenNameList = 'RecipeDetail' | 'RecipeList' | 'AddRecipes';

// stacks
const RootStack = createStackNavigator<RootStackParamList>();
const FridgeStack = createStackNavigator<Pick<RootStackParamList, FridgeStackScreenNameList>>();
const RecipesStack = createStackNavigator<Pick<RootStackParamList, RecipesStackScreenNameList>>();

const screenOptions: StackNavigationOptions = {
  headerTitleStyle: {
    fontSize: 27,
    lineHeight: 31,
    color: colors.black,
  },
  headerTitleAlign: 'left',
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  cardStyle: {
    backgroundColor: colors.white,
    flex: 1,
  },
};

function Fridge() {
  return (
    <FridgeStack.Navigator screenOptions={screenOptions}>
      <FridgeStack.Screen name='FridgeDetail' component={FridgeDetail} />
      <FridgeStack.Screen name='AddItem' component={AddItem} />
    </FridgeStack.Navigator>
  );
}

function Recipes() {
  return (
    <RecipesStack.Navigator screenOptions={screenOptions}>
      <RecipesStack.Screen name='RecipeDetail' component={RecipeDetail} />
      <RecipesStack.Screen name='RecipeList' component={RecipeList} />
      <RecipesStack.Screen name='AddRecipes' component={AddRecipes} />
    </RecipesStack.Navigator>
  );
}

function Root() {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen name='FridgeList' component={FridgeList} />
      <RootStack.Screen name='Fridge' component={Fridge} />
      <RootStack.Screen name='Recipes' component={Recipes} />
    </RootStack.Navigator>
  );
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
