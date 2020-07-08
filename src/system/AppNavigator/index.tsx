import colors from '@constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { MyPageHome, MypageMoreItems } from '@pages/MyPage';
import { AddFridge, AddItem, FridgeDetail, FridgeList, FridgeMoreItems } from '../../pages/Main';
import { AddRecipes, RecipeDetail, RecipeList } from '../../pages/Recipes';

interface RootStackParamList extends Record<string, Record<string, unknown> | undefined> {
  RecipeList: Record<string, unknown>;
  AddRecipes: Record<string, unknown>;
  RecipeDetail: Record<string, unknown>;
  FridgeList: Record<string, unknown>;
  FridgeDetail: Record<string, unknown>;
  AddFridge: Record<string, unknown>;
  AddItem: Record<string, unknown>;
  FridgeMoreItems: Record<string, unknown>;
  Recipes: Record<string, unknown>;
  MyPageHome: Record<string, unknown>;
  Fridge: Record<string, unknown>;
  MypageMoreItems: Record<string, unknown>;
}

type FridgeStackScreenNameList =
  | 'FridgeList'
  | 'FridgeDetail'
  | 'AddItem'
  | 'AddFridge'
  | 'FridgeMoreItems';
type RecipesStackScreenNameList = 'RecipeDetail' | 'RecipeList' | 'AddRecipes';

type MypageStackScreenNameList = 'MyPageHome' | 'MypageMoreItems';

// stacks
const RootStack = createStackNavigator<RootStackParamList>();
const FridgeStack = createStackNavigator<Pick<RootStackParamList, FridgeStackScreenNameList>>();
const RecipesStack = createStackNavigator<Pick<RootStackParamList, RecipesStackScreenNameList>>();
const MyPageStack = createStackNavigator<Pick<RootStackParamList, MypageStackScreenNameList>>();

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
    <FridgeStack.Navigator initialRouteName='AddFridge' screenOptions={screenOptions}>
      <FridgeStack.Screen name='FridgeList' component={FridgeList} />
      <FridgeStack.Screen name='FridgeDetail' component={FridgeDetail} />
      <FridgeStack.Screen name='FridgeMoreItems' component={FridgeMoreItems} />
      <FridgeStack.Screen name='AddItem' component={AddItem} />
      <FridgeStack.Screen name='AddFridge' component={AddFridge} />
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

function MyPage() {
  return (
    <MyPageStack.Navigator screenOptions={screenOptions}>
      <MyPageStack.Screen name='MyPageHome' component={MyPageHome} />
      <MyPageStack.Screen name='MypageMoreItems' component={MypageMoreItems} />
    </MyPageStack.Navigator>
  );
}

function Root() {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen name='FridgeMoreItems' component={FridgeMoreItems} />
      <RootStack.Screen name='MyPage' component={MyPage} />

      <RootStack.Screen name='Fridge' component={Fridge} options={{ headerShown: false }} />
      <RootStack.Screen name='Recipes' component={Recipes} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
}

// navigatior
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default AppNavigator;
