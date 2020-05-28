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

function renderAddBtn() {
  return (
    <TouchableOpacity
      style={[
        {
          width: Dimensions.get('window').width - 36,
          height: 54,
          borderRadius: 15,
          marginTop: 26,
          justifyContent: 'center',
          alignItems: 'center',
        },
        Platform.OS == 'android'
          ? { elevation: 3 }
          : {
              shadowColor: 'rgba(0, 0, 0, 0.16)',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 6,
              shadowOpacity: 1,
            },
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 22, height: 22, backgroundColor: 'red' }} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}
        >
          냉장고 추가하기
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function renderFridges() {
  const [Fridges] = useState([1, 2, 3]);

  return Fridges.map(function(val: number) {
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
                shadowOpacity: 1,
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
          {val === 1 && (
            <View
              style={{
                width: 40,
                height: 23,
                borderRadius: 6,
                backgroundColor: 'rgba(51, 175, 19,1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  color: 'rgba(255,255,255,1)',
                }}
              >
                신선
              </Text>
            </View>
          )}
          {val === 2 && (
            <View
              style={{
                width: 40,
                height: 23,
                borderRadius: 6,
                backgroundColor: 'rgba(239, 202, 0,1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  color: 'rgba(255,255,255,1)',
                }}
              >
                보통
              </Text>
            </View>
          )}
          {val === 3 && (
            <View
              style={{
                width: 40,
                height: 23,
                borderRadius: 6,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  color: 'rgba(255,255,255,1)',
                }}
              >
                나쁨
              </Text>
            </View>
          )}
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
                  ? 'red'
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
        {renderAddBtn()}
      </ScrollView>
    </View>
  );
}

export default FridgeList;
