import * as React from 'react';
import {
  Dimensions,
  Platform,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type BtnProps = {
  children: string;
  style: StyleProp<ViewStyle>;
};

function LongAddBtn({ children, style }: BtnProps) {
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
}

export default LongAddBtn;
