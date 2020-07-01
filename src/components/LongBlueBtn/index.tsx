import * as React from 'react';
import { Platform, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

type BtnProps = {
  children: string;
  style: StyleProp<ViewStyle>;
};

const LongBlueBtn: React.FC<BtnProps> = ({ children, style }) => {
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
