import colors from '@constants/colors';
import * as React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { FreshIndicationProps } from '../../../@types';

const styles = StyleSheet.create({
  indicatorContainer: {
    width: 40,
    height: 23,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  indicatorText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: colors.white,
  } as TextStyle,
});

const FreshIndication: React.FC<FreshIndicationProps> = ({ color, status, style }) => {
  const indicationStyle = React.useMemo(
    () => [
      styles.indicatorContainer,
      {
        backgroundColor: color,
      },
      style,
    ],
    [color, style]
  );

  return (
    <View style={indicationStyle}>
      <Text style={styles.indicatorText}>{status}</Text>
    </View>
  );
};

export default FreshIndication;
