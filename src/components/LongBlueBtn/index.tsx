import * as React from 'react';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { longBlueBtnProps } from '../../../@types';

const LongBlueBtn: React.FC<longBlueBtnProps> = ({ children, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: 54,
          borderRadius: 15,
          backgroundColor: 'rgba(22,131,226,1)',
          justifyContent: 'center',
          alignItems: 'center',
        },
        Platform.OS === 'android'
          ? {
              elevation: 3,
            }
          : {
              shadowColor: 'rgba(22, 131, 226, 0.16)',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 6,
            },
        style,
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'normal',
          fontStyle: 'normal',
          color: 'rgba(255,255,255,1)',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default LongBlueBtn;
