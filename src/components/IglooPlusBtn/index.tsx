import * as React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { plusBtnProps } from '../../../@types';

const IglooPlusBtn: React.FC<plusBtnProps> = ({ style }) => {
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
