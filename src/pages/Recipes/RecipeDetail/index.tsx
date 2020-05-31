import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
  Image,
} from 'react-native';

import { RecipeCard } from '../../../components';

function renderRecipeCards() {
  const [process] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
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
      {process.map(function () {
        return <RecipeCard style={{ marginTop: 19 }}></RecipeCard>;
      })}
    </View>
  );
}

function RecipeDetail() {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          source={require('../../../dummy/test.png')}
          style={{ width: '100%', height: 263 }}
        ></Image>
        <View
          style={{
            width: '100%',
            height: 263,
            position: 'absolute',
            backgroundColor: 'black',
            opacity: 0.41,
            flexDirection: 'column-reverse',
          }}
        ></View>
        <View
          style={{
            width: '100%',
            height: 263,
            position: 'absolute',
            flexDirection: 'column-reverse',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 27,
                fontWeight: 'normal',
                fontStyle: 'normal',
                marginLeft: 18,
              }}
            >
              상추 레시피
            </Text>
            <View style={{ flex: 1 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 23 }}>
              <View style={{ width: 22, height: 22, backgroundColor: 'red' }}></View>
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
        {renderRecipeCards()}
      </ScrollView>
    </View>
  );
}

export default RecipeDetail;
