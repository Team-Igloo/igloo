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

function IglooTextInput({ children, style }: BtnProps) {
  return (
    <TextInput
      style={[
        {
          height: 41,
          borderRadius: 15,
          backgroundColor: 'rgba(242,242,242,1)',
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

        style,
      ]}
    ></TextInput>
  );
}

export default IglooTextInput;
