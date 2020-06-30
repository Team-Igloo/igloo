import colors from '@constants/colors';
import * as React from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';

interface IglooTextInputProps {
  style: StyleProp<TextStyle>;
  leftDeco: React.ComponentType;
  rightDeco: React.ComponentType;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  input: {
    height: 41,
    borderRadius: 15,
    backgroundColor: colors.veryLightPink,
    shadowColor: colors.black16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 3,
  } as TextStyle,
});

const IglooTextInput: React.FC<IglooTextInputProps> = ({ leftDeco, style, rightDeco }) => {
  return (
    <View style={styles.container}>
      {leftDeco}
      <TextInput style={[styles.input, style]} />
      {rightDeco}
    </View>
  );
};

export default IglooTextInput;
