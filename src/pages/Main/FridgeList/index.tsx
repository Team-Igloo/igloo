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

import { LongAddBtn, FreshIndication } from '../../../components';

function renderFridges() {
  const [fridges] = useState([1, 2, 3]);

  return fridges.map(function (val: number) {
    const [value] = useState(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(value, {
        toValue:
          val === 1
            ? Dimensions.get('window').width - 66
            : val === 2
            ? (Dimensions.get('window').width - 66) * (2 / 3)
            : val === 3
            ? (Dimensions.get('window').width - 66) * (1 / 3)
            : 0,
        useNativeDriver: false,
      }).start();
    });

    return (
      <TouchableOpacity
        style={[
          {
            height: 106,
            width: Dimensions.get('window').width - 36,
            borderRadius: 12,
            marginTop: 17,
            paddingTop: 24,
            paddingBottom: 24,
            paddingLeft: 14,
            paddingRight: 14,
          },
          Platform.OS == 'android'
            ? {
                elevation: 3,
              }
            : {
                shadowColor: 'rgba(0, 0, 0, 0.16)',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 12,
              },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
          >
            냉장고
          </Text>
          <View style={{ flex: 1 }} />
          <FreshIndication val={val}></FreshIndication>
        </View>
        <View>
          <Animated.View
            style={{
              width: value,
              borderRadius: 5,
              height: 21,
              marginTop: 16,
              backgroundColor:
                val === 1
                  ? 'rgba(0, 175, 20, 1)'
                  : val === 2
                  ? 'rgba(239, 202, 0,1)'
                  : val === 3
                  ? 'rgba(207, 85, 61,1)'
                  : 'rgba(195, 193, 193,1)',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  });
}

function FridgeList() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginLeft: 18, marginTop: 41 }}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}
        >
          냉장고를 선택해주세요.
        </Text>
      </View>
      <ScrollView
        style={{
          marginTop: 13,
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        {renderFridges()}
        <View style={{ marginTop: 26 }}>
          <LongAddBtn>냉장고</LongAddBtn>
        </View>
      </ScrollView>
    </View>
  );
}

export default FridgeList;
