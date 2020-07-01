import * as React from 'react';
import { Platform, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

type BtnProps = {
  style: StyleProp<ViewStyle>;
};

const IglooPlusBtn: React.FC = style => {
  return (
    <TouchableOpacity
      style={[
        {
          width: 50,
          height: 50,
          borderRadius: 25,
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
            },
        style,
      ]}
    >
      <View style={{ width: 21, height: 21, backgroundColor: 'red' }} />
    </TouchableOpacity>
  );
};

export default IglooPlusBtn;
