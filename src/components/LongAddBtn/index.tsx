import colors from '@constants/colors';
import * as React from 'react';

import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { longAddBtnProps } from '../../../@types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 26,
    elevation: 3,
    shadowColor: colors.black16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  } as ViewStyle,
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginLeft: 8,
  } as TextStyle,
});

const LongAddBtn: React.FC<longAddBtnProps> = ({ children, style, toPageName }) => {
  const navigation = useNavigation();
  const containerStyle = React.useMemo(() => [styles.container, style], [style]);

  const onPress = React.useCallback(() => {
    navigation.navigate(toPageName);
  }, [navigation, toPageName]);

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <View style={{ width: 22, height: 22, backgroundColor: 'red' }} />
      <Text style={styles.addText}>{children} 추가하기</Text>
    </TouchableOpacity>
  );
};

export default LongAddBtn;
