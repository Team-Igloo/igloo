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

import {
  ShortAddBtn,
  IglooTextInput,
  LongBlueBtn,
  IglooPicker,
  LongAddBtn,
  PictureSelectBox,
} from '../../../components';

function AddRecipes() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'normal',
            fontStyle: 'normal',
            marginTop: 41,
            marginLeft: 19,
          }}
        >
          레시피 추가
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          paddingLeft: 18,
          paddingRight: 18,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
          >
            이름
          </Text>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 19,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <IglooTextInput
              style={{
                width: (Dimensions.get('window').width - 51) / 2,
              }}
            />
            <ShortAddBtn
              style={{
                width: (Dimensions.get('window').width - 51) / 2,
              }}
            >
              사진 추가
            </ShortAddBtn>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
          >
            소요 시간(분)
          </Text>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 19,
            }}
          >
            <IglooTextInput
              style={{
                width: Dimensions.get('window').width - 36,
              }}
            ></IglooTextInput>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
          >
            난이도
          </Text>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 32,
            }}
          >
            <IglooPicker
              style={{
                width: Dimensions.get('window').width - 36,
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
          >
            레시피 단계
          </Text>
          <View
            style={{
              paddingTop: 19,
              paddingBottom: 26,
            }}
          >
            <PictureSelectBox
              style={{
                width: Dimensions.get('window').width - 36,
              }}
            />
          </View>
        </View>
        <View>
          <LongAddBtn
            style={{
              width: Dimensions.get('window').width - 36,
            }}
          >
            단계
          </LongAddBtn>
          <LongBlueBtn
            style={{
              width: Dimensions.get('window').width - 36,
              marginTop: 26,
            }}
          >
            등록하기
          </LongBlueBtn>
        </View>
      </View>
    </ScrollView>
  );
}

export default AddRecipes;
