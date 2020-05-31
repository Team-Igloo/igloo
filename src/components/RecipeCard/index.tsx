import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from 'react-native';

type cardProps = {
  style: object;
  data: object;
};

function RecipeCard({ style, data }: cardProps) {
  return (
    <TouchableOpacity
      style={[
        {
          width: Dimensions.get('window').width - 36,
          height: 106,
          borderRadius: 15,
          flexDirection: 'row',
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 6,
          paddingRight: 15,
          alignItems: 'center',
        },
        Platform.OS === 'android'
          ? { elevation: 3 }
          : {
              shadowColor: 'rgba(0, 0, 0, 0.16)',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 6,
            },
        style,
      ]}
    >
      <Image source={require('../../dummy/test.png')} style={{ width: 98, height: 98 }}></Image>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}
        >
          상추를 신용카드 할부 3개월로 구매합니다. 우리의 통장은 소중 하니까요.
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default RecipeCard;
