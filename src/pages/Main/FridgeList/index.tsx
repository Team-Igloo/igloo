import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

function renderFridges() {
  const [Fridges] = useState([1, 2, 3]);

  return Fridges.map(function(index) {
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
                shadowOpacity: 1,
              },
        ]}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}>
            냉장고
          </Text>
          <View style={{flex: 1}} />
          <View
            style={{
              width: 40,
              height: 23,
              borderRadius: 6,
              backgroundColor: 'rgba(51, 175, 19,1)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                fontStyle: 'normal',
                color: 'rgba(255,255,255,1)',
              }}>
              신선
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: 'red'}}>
          <View
            style={{
              flex: 1,
              borderRadius: 5,
              height: 21,
              backgroundColor: 'rgba(195, 193, 193,1)',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  });
}

function FridgeList() {
  return (
    <View style={{flex: 1}}>
      <View style={{marginLeft: 18, marginTop: 41}}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}>
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
        }}>
        {renderFridges()}
      </ScrollView>
    </View>
  );
}

export default FridgeList;
