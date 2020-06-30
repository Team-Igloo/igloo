import colors from '@constants/colors';
import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ShortAddBtnProps {
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: 27,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.black16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
  } as ViewStyle,
});

const ShortAddBtn: React.FC<ShortAddBtnProps> = ({ children, style, textStyle }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, style]}>
      <View
        style={{
          width: 25,
          height: 25,
          backgroundColor: 'red',
        }}
      />
      <Text
        style={[
          {
            marginLeft: 14,
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ShortAddBtn;
