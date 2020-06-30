import IglooPlusBtn from '@components/IglooPlusBtn';
import ItemCard from '@components/ItemCard';
import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

function RenderRecipes() {
  const [value] = React.useState([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]);
  return (
    <View>
      {value.map(function (category: number[]) {
        return (
          <>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{ fontSize: 20, marginLeft: 19, fontWeight: 'normal', fontStyle: 'normal' }}
              >
                냉장고 재료 추천 레시피
              </Text>
              <View style={{ flex: 1 }} />
              <TouchableOpacity
                style={{
                  marginRight: 19,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: 'rgba(112,112,112,1)',
                  }}
                >
                  더보기
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingLeft: 3,
                paddingTop: 18,
                paddingBottom: 29,
              }}
            >
              {category.map(function () {
                return <ItemCard style={{ marginLeft: 16 }} data={{}} />;
              })}
            </ScrollView>
          </>
        );
      })}
    </View>
  );
}

function RecipeList() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 41, marginLeft: 19, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 27, fontWeight: 'normal', fontStyle: 'normal' }}>추천 레시피</Text>
        <View
          style={{
            flex: 1,
          }}
        />
        <IglooPlusBtn style={{ marginRight: 18 }} />
      </View>
      <ScrollView style={{ marginTop: 24 }}>
        <RenderRecipes />
      </ScrollView>
    </View>
  );
}

export default RecipeList;
