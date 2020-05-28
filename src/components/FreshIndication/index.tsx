import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';

type indicationProps = {
  val: number;
  style: object;
};

function FreshIndication({ val, style }: indicationProps) {
  if (val === 1) {
    return (
      <View
        style={[
          {
            width: 40,
            height: 23,
            borderRadius: 6,
            backgroundColor: 'rgba(51, 175, 19,1)',
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,1)',
          }}
        >
          신선
        </Text>
      </View>
    );
  } else if (val === 2) {
    return (
      <View
        style={[
          {
            width: 40,
            height: 23,
            borderRadius: 6,
            backgroundColor: 'rgba(239, 202, 0,1)',
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,1)',
          }}
        >
          보통
        </Text>
      </View>
    );
  } else {
    return (
      <View
        style={[
          {
            width: 40,
            height: 23,
            borderRadius: 6,
            backgroundColor: 'rgba(207, 85, 61,1)',
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,1)',
          }}
        >
          나쁨
        </Text>
      </View>
    );
  }
}

export default FreshIndication;
