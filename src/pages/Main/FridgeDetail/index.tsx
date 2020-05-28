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

import { LongAddBtn, FreshIndication, ItemCard } from '../../../components';

// function rederItems() {

//   return (

//   )
// }

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
      <ItemCard></ItemCard>
    </View>
  );
}

export default FridgeDetail;
