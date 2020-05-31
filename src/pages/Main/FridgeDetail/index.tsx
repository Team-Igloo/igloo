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

import { LongAddBtn, FreshIndication, ItemCard, ShortAddBtn } from '../../../components';

function rederItems(data: object) {
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
                유효기간이 곧 만료되는 상품
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

function FridgeDetail() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 41, marginLeft: 19, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 27, fontWeight: 'normal', fontStyle: 'normal' }}>냉장고</Text>
        <FreshIndication style={{ marginLeft: 12 }} val={1}></FreshIndication>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <LongAddBtn>상품</LongAddBtn>
      </View>
      <ScrollView style={{ marginTop: 24 }}>
        {/* <ItemCard></ItemCard> */}
        {rederItems()}
      </ScrollView>
    </View>
  );
}

export default FridgeDetail;