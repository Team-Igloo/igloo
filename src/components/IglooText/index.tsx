import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { iglooTextProps } from '@types';
import fonts from '@constants/fonts';

const styles = StyleSheet.create({
  iglooTextEB: {
    fontFamily: fonts.NanumSquareRoundEB,
  },
  iglooTextB: {
    fontFamily: fonts.NanumSquareRoundB,
  },
  iglooTextL: {
    fontFamily: fonts.NanumSquareRoundL,
  },
  iglooTextR: {
    fontFamily: fonts.NanumSquareRoundR,
  },
});

const IglooText: React.FC<iglooTextProps> = ({ children, style, EB, B, L, R }) => {
  return (
    <Text
      style={[
        style,
        EB === true && styles.iglooTextEB,
        B === true && styles.iglooTextB,
        L === true && styles.iglooTextL,
        R === true && styles.iglooTextR,
      ]}
    >
      {children}
    </Text>
  );
};

export default IglooText;
