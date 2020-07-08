import * as React from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ItemCard from '@components/ItemCard';
import { useNavigation } from '@react-navigation/native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  myPageHomeContainer: {
    flex: 1,
  } as ViewStyle,
  myPageHomeUserInfoContainer: {
    flexDirection: 'row',
    marginLeft: 19,
  } as ViewStyle,
  myPageHomeUserImage: {
    height: 62,
    width: 62,
    borderRadius: 31,
  } as ImageStyle,
  myPageHomeUserNameAndEmailContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  } as ViewStyle,
  myPageHomeUserNameText: { fontSize: 18, fontWeight: 'normal', fontStyle: 'normal' },
  myPageHomeUserEmailText: { fontSize: 18, fontWeight: 'normal', fontStyle: 'normal' },
  myPageHomeCategoryContainer: {
    flexDirection: 'row',
  } as ViewStyle,
  myPageHomeCategoryTitleText: {
    fontSize: 20,
    marginLeft: 19,
    fontWeight: 'normal',
    fontStyle: 'normal',
  } as TextStyle,
  myPageHomeCategoryFlatList: {
    marginTop: 36,
  } as ViewStyle,
  myPageHomeEmpty: {
    flex: 1,
  } as ViewStyle,
  myPageHomeCategoryMoreButtton: {
    marginRight: 19,
  } as ViewStyle,
  myPageHomeCategoryMoreButttonText: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: colors.brownishGrey,
  } as TextStyle,
  myPageHomeRecipesFlatList: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 3,
    paddingTop: 18,
    paddingBottom: 29,
  } as ViewStyle,
  myPageHomeRecipesCard: {
    marginLeft: 16,
  } as ViewStyle,
});

const MyPageHome: React.FC = () => {
  const [value] = React.useState([
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ]);
  const navigation = useNavigation();

  const renderRecipes = React.useCallback(recipe => {
    return recipe.map(() => {
      return <ItemCard style={styles.myPageHomeRecipesCard} data={{}} />;
    });
  }, []);

  const renderCategory = React.useCallback(({ item }) => {
    return (
      <View>
        {item.map((recipes: number[]) => {
          return (
            <>
              <View style={styles.myPageHomeCategoryContainer}>
                <Text style={styles.myPageHomeCategoryTitleText}>북마크 레시피</Text>
                <View style={styles.myPageHomeEmpty} />
                <TouchableOpacity style={styles.myPageHomeCategoryMoreButtton}>
                  <Text style={styles.myPageHomeCategoryMoreButttonText}>더보기</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.myPageHomeRecipesFlatList}
              >
                {renderRecipes(recipes)}
              </ScrollView>
            </>
          );
        })}
      </View>
    );
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      title: '마이 페이지',
    });
  }, [navigation]);
  return (
    <View style={styles.myPageHomeContainer}>
      <View style={styles.myPageHomeUserInfoContainer}>
        <Image
          source={require('../../../dummy/test.png')}
          style={styles.myPageHomeUserImage}
        />
        <View style={styles.myPageHomeUserNameAndEmailContainer}>
          <Text style={styles.myPageHomeUserNameText}>user</Text>
          <Text style={styles.myPageHomeUserEmailText}>useremail@gmail.com</Text>
        </View>
      </View>
      <FlatList
        data={value}
        renderItem={renderCategory}
        // keyExtractor={item => item}
        style={styles.myPageHomeCategoryFlatList}
      />
    </View>
  );
};
export default MyPageHome;
