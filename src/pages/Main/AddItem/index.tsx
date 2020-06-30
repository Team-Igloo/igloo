import IglooPicker from '@components/IglooPicker';
import IglooTextInput from '@components/IglooTextInput';
import LongBlueBtn from '@components/LongBlueBtn';
import ShortAddBtn from '@components/ShortAddBtn';
import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';

function AddItem() {
  return (
    <View style={{ flex: 1 }}>
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
          상품 추가하기
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}
      >
        <ShortAddBtn
          style={{
            width: (Dimensions.get('window').width - 54) / 2,
          }}
        >
          바코드 리딩
        </ShortAddBtn>
        <ShortAddBtn
          style={{
            width: (Dimensions.get('window').width - 54) / 2,
          }}
        >
          사진 추가
        </ShortAddBtn>
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
              paddingBottom: 29,
            }}
          >
            <IglooTextInput
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
            카테고리
          </Text>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 29,
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
            가격
          </Text>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 29,
            }}
          >
            <IglooTextInput
              style={{
                width: Dimensions.get('window').width - 36,
              }}
            />
          </View>
          <LongBlueBtn
            style={{
              width: Dimensions.get('window').width - 36,
              marginTop: 10,
            }}
          >
            등록하기
          </LongBlueBtn>
        </View>
      </View>
    </View>
  );
}

export default AddItem;
