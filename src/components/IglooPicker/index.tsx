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
import { Picker } from '@react-native-community/picker';

type BtnProps = {
  children: string;
  style: object;
  data: string;
};

function IglooPicker({ children, style }: BtnProps) {
  const [select, setSelect] = useState('');
  return (
    <View
      style={[
        {
          height: 41,
          borderRadius: 15,
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

        style,
      ]}
    >
      <Picker
        selectedValue={select}
        onValueChange={(itemValue, itemIndex) => {
          setSelect(itemValue);
        }}
      >
        <Picker.Item label='육류' value='meats' />
        <Picker.Item label='생선류' value='fishes' />
      </Picker>
    </View>
  );
}

export default IglooPicker;
