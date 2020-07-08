import IglooPlusBtn from '@components/IglooPlusBtn';
import ItemCard from '@components/ItemCard';
import * as React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  RecipeListContainer: {
    flex: 1,
  } as ViewStyle,
  RecipeListTitleAndAddButtonContainer: {
    marginTop: 41,
    marginLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  RecipeListTitleText: {
    fontSize: 27,
    fontWeight: 'normal',
    fontStyle: 'normal',
  } as TextStyle,
  RecipeListEmpty: {
    flex: 1,
  } as ViewStyle,
  RecipeListAddButton: {
    marginRight: 18,
  } as ViewStyle,
  RecipeListCategoryFlatList: {
    marginTop: 24,
  } as ViewStyle,
  RecipeListCategoryContainer: {
    flexDirection: 'row',
  } as ViewStyle,
  RecipeListCategoryTitleText: {
    fontSize: 20,
    marginLeft: 19,
    fontWeight: 'normal',
    fontStyle: 'normal',
  } as TextStyle,
  RecipeListCategoryMoreButtton: {
    marginRight: 19,
  } as ViewStyle,
  RecipeListCategoryMoreButttonText: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: colors.brownishGrey,
  } as TextStyle,
  RecipeListRecipesFlatList: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 3,
    paddingTop: 18,
    paddingBottom: 29,
  } as ViewStyle,
  RecipeListRecipesCard: {
    marginLeft: 16,
  } as ViewStyle,
});

const RecipeList: React.FC = () => {
  const [value] = React.useState([
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ]);
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: '추천 레시피',
    });
  }, [navigation]);

  const renderRecipes = React.useCallback(recipe => {
    return recipe.map(() => {
      return <ItemCard style={styles.RecipeListRecipesCard} data={{}} />;
    });
  }, []);

  const renderCategory = React.useCallback(({ item }) => {
    return (
      <View>
        {item.map((recipes: number[]) => {
          return (
            <>
              <View style={styles.RecipeListCategoryContainer}>
                <Text style={styles.RecipeListCategoryTitleText}>냉장고 재료 추천 레시피</Text>
                <View style={styles.RecipeListEmpty} />
                <TouchableOpacity style={styles.RecipeListCategoryMoreButtton}>
                  <Text style={styles.RecipeListCategoryMoreButttonText}>더보기</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.RecipeListRecipesFlatList}
              >
                {renderRecipes(recipes)}
              </ScrollView>
            </>
          );
        })}
      </View>
    );
  }, []);

  return (
    <View style={styles.RecipeListContainer}>
      <View style={styles.RecipeListTitleAndAddButtonContainer}>
        <Text style={styles.RecipeListTitleText}>추천 레시피</Text>
        <View style={styles.RecipeListEmpty} />
        <IglooPlusBtn style={styles.RecipeListAddButton} />
      </View>
      <FlatList
        data={value}
        renderItem={renderCategory}
        // keyExtractor={item => item}
        style={styles.RecipeListCategoryFlatList}
      />
    </View>
  );
};

export default RecipeList;
