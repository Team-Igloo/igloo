import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';

import { ItemCard, IglooPlusBtn } from '../../../components';

function rederRecipes(data: object) {
  const [value] = useState([
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
              <View style={{ flex: 1 }}></View>
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
              horizontal={true}
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingLeft: 3,
                paddingTop: 18,
                paddingBottom: 29,
              }}
            >
              {category.map(function (item: number) {
                return <ItemCard style={{ marginLeft: 16 }}></ItemCard>;
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
        ></View>
        <IglooPlusBtn style={{ marginRight: 18 }}></IglooPlusBtn>
      </View>
      <ScrollView style={{ marginTop: 24 }}>{rederRecipes()}</ScrollView>
    </View>
  );
}

export default RecipeList;
