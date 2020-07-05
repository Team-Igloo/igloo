import RecipeCard from '@components/RecipeCard';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  recipeDetailContainer: {
    flex: 1,
  },
  recipeDetailMainImage: {
    width: '100%',
    height: 263,
  },
  recipeDetailImageOpacity: {
    width: '100%',
    height: 263,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.41,
    flexDirection: 'column-reverse',
  },
  recipeDetailNameTimeContainer: {
    width: '100%',
    height: 263,
    position: 'absolute',
    flexDirection: 'column-reverse',
  },
  recipeDetailNameTimeContainer2: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  recipeDetailNameText: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginLeft: 18,
  },
  recipeDetailEmpty: {
    flex: 1,
  },
  recipeDetailTimeContainer: { flexDirection: 'row', alignItems: 'center', marginRight: 23 },
  recipeDetailTimeIcon: {
    width: 22,
    height: 22,
    backgroundColor: 'red',
  },
});

function RenderRecipeCards() {
  const [process] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'normal',
          fontStyle: 'normal',
        }}
      >
        총 7단계, 난이도 최상
      </Text>
      {process.map(() => {
        return <RecipeCard style={{ marginTop: 19 }} data={{}} />;
      })}
    </View>
  );
}

const RecipeDetail: React.FC = () => {
  return (
    <View style={styles.recipeDetailContainer}>
      <View>
        <Image source={require('../../../dummy/test.png')} style={styles.recipeDetailMainImage} />
        <View style={styles.recipeDetailImageOpacity} />
        <View style={styles.recipeDetailNameTimeContainer}>
          <View style={styles.recipeDetailNameTimeContainer2}>
            <Text style={styles.recipeDetailNameText}>상추 레시피</Text>
            <View style={styles.recipeDetailEmpty} />
            <View style={styles.recipeDetailTimeContainer}>
              <View style={styles.recipeDetailTimeIcon} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  marginLeft: 3,
                }}
              >
                15분
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{}}
        contentContainerStyle={{
          paddingLeft: 18,
          paddingRight: 18,
          paddingBottom: 10,
          paddingTop: 19,
        }}
      >
        <RenderRecipeCards />
      </ScrollView>
    </View>
  );
};

export default RecipeDetail;
