import * as React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { longAddBtnProps } from '../../../@types';

const styles = StyleSheet.create({
  longAddBtnContainer: {
    width: Dimensions.get('window').width - 36,
    height: 54,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  longAddBtnTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  longAddBtnIcon: {
    width: 22,
    height: 22,
    backgroundColor: 'red',
  },
  longAddBtnText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});

const LongAddBtn: React.FC<longAddBtnProps> = ({ children, style, navigation, toPageName }) => {
  return (
    <TouchableOpacity
      style={[styles.longAddBtnContainer, style]}
      onPress={() => navigation.push(toPageName)}
    >
      <View style={styles.longAddBtnTextContainer}>
        <View style={styles.longAddBtnIcon} />
        <Text style={styles.longAddBtnText}>{children} 추가하기</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LongAddBtn;
