import * as React from 'react';
import { Image, Platform, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

type cardProps = {
  style: StyleProp<ViewStyle>;
  data: unknown;
};

const ItemCard: React.FC<cardProps> = ({ style }) => {
  return (
    <TouchableOpacity
      style={[
        { width: 130, height: 153, borderRadius: 27, backgroundColor: 'rgba(149, 209, 184,1)' },
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
        style,
      ]}
    >
      <View style={{ paddingTop: 10, paddingLeft: 12, paddingRight: 12, paddingBottom: 9 }}>
        <Image source={require('../../dummy/test.png')} style={{ width: '100%', height: 93.4 }} />
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 14, alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,1)',
          }}
        >
          상추
        </Text>
        <View
          style={[
            {
              width: 52,
              height: 24,
              borderRadius: 15,
              backgroundColor: 'rgba(255,255,255,1)',
              marginLeft: 18,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
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
          ]}
        >
          <View
            style={{
              width: 14,
              height: 14,
              backgroundColor: 'black',
            }}
          />
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'normal',
              fontStyle: 'normal',
              marginLeft: 6,
            }}
          >
            7일
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
