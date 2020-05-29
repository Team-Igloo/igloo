import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
  TextInput,
} from 'react-native';

type BtnProps = {
  children: string;
  style: object;
};

function LongBlueBtn({ children, style }: BtnProps) {
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
}

export default LongBlueBtn;
