import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';

type BtnProps = {
  children: string;
  style: object;
};

function ShortAddBtn({ children, style }: BtnProps) {
  return (
    <TouchableOpacity
      style={[
        {
          height: 54,
          borderRadius: 27,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
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
              shadowRadius: 6,
            },
        style,
      ]}
    >
      <View
        style={{
          width: 25,
          height: 25,
          backgroundColor: 'red',
        }}
      ></View>
      <Text
        style={{
          marginLeft: 14,
          fontSize: 20,
          fontWeight: 'normal',
          fontStyle: 'normal',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default ShortAddBtn;
