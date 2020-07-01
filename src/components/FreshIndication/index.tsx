import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { indicationProps } from '../../../@types';

const styles = StyleSheet.create({
  indicatorContainer1: {
    width: 40,
    height: 23,
    borderRadius: 6,
    backgroundColor: 'rgba(51, 175, 19,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer2: {
    width: 40,
    height: 23,
    borderRadius: 6,
    backgroundColor: 'rgba(239, 202, 0,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer3: {
    width: 40,
    height: 23,
    borderRadius: 6,
    backgroundColor: 'rgba(207, 85, 61,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: 'rgba(255,255,255,1)',
  },
});

const FreshIndication: React.FC<indicationProps> = ({ val, style }) => {
  if (val === 1) {
    return (
      <View style={[styles.indicatorContainer1, style]}>
        <Text style={styles.indicatorText}>신선</Text>
      </View>
    );
  }
  if (val === 2) {
    return (
      <View style={[styles.indicatorContainer2, style]}>
        <Text style={styles.indicatorText}>보통</Text>
      </View>
    );
  }
  return (
    <View style={[styles.indicatorContainer3, style]}>
      <Text style={styles.indicatorText}>나쁨</Text>
    </View>
  );
};

export default FreshIndication;
