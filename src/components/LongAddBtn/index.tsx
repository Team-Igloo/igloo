import * as React from 'react';
import { Dimensions, Platform, Text, TouchableOpacity, View } from 'react-native';
import { longAddBtnProps } from '../../../@types';

const LongAddBtn: React.FC<longAddBtnProps> = ({ children, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: Dimensions.get('window').width - 36,
          height: 54,
          borderRadius: 15,
          justifyContent: 'center',
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
              shadowOpacity: 1,
            },
        style,
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
          {children} 추가하기
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LongAddBtn;
