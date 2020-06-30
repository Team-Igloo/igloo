import * as React from 'react';
import {
  Platform,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type boxProps = {
  style: StyleProp<ViewStyle>;
};

function PictureSelectBox({ style }: boxProps) {
  return (
    <View
      style={[
        {
          height: 106,
          borderRadius: 15,
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 6,
          paddingRight: 11,
          flexDirection: 'row',
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
      <TouchableOpacity
        style={[
          {
            height: 98,
            width: 98,
            borderRadius: 25,
            backgroundColor: 'rgba(242,242,242,1)',
            justifyContent: 'center',
          },
          Platform.OS === 'android'
            ? {
                elevation: 3,
              }
            : {
                shadowColor: 'rgba(0, 0, 0, 0.16)',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 6,
              },
        ]}
      >
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 21,
              width: 21,
              backgroundColor: 'red',
            }}
          />
          <Text
            style={{
              marginTop: 9,
              fontSize: 16,
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
          >
            사진 추가
          </Text>
        </View>
      </TouchableOpacity>
      <TextInput
        textAlignVertical='top'
        placeholder='단계 상세설명을 적어주세요'
        style={[
          { height: 77, borderRadius: 15, flex: 1, marginLeft: 11 },
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
        ]}
      />
    </View>
  );
}

export default PictureSelectBox;
