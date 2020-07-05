import IglooPicker from '@components/IglooPicker';
import IglooTextInput from '@components/IglooTextInput';
import LongBlueBtn from '@components/LongBlueBtn';
import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  addFridgeContainer: {
    flex: 1,
  },
  addFridgeTitleText: {
    fontSize: 27,
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: 41,
    marginLeft: 19,
  },
  addFridgeContentContainer: {
    marginTop: 30,
    paddingLeft: 18,
    paddingRight: 18,
  },
  addFridgeContentName: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  addFridgeTextInputContainer: {
    paddingTop: 16,
    paddingBottom: 29,
  },
  addFridgeTextInput: {
    width: Dimensions.get('window').width - 36,
  },
  addFridgeCategoryText: { fontSize: 20, fontWeight: 'normal', fontStyle: 'normal' },
  addFridgePickerContainer: { paddingTop: 16, paddingBottom: 29 },
});

const AddFridge: React.FC = () => {
  return (
    <View style={styles.addFridgeContainer}>
      <View>
        <Text style={styles.addFridgeTitleText}>냉장고/냉동고 추가하기</Text>
      </View>

      <View style={styles.addFridgeContentContainer}>
        <View>
          <Text style={styles.addFridgeContentName}>이름</Text>
          <View style={styles.addFridgeTextInputContainer}>
            <IglooTextInput style={styles.addFridgeTextInput} />
          </View>
        </View>
        <View>
          <Text style={styles.addFridgeCategoryText}>카테고리</Text>
          <View style={styles.addFridgePickerContainer}>
            <IglooPicker />
          </View>
        </View>

        <LongBlueBtn
          style={{
            width: Dimensions.get('window').width - 36,
            marginTop: 10,
          }}
        >
          등록하기
        </LongBlueBtn>
      </View>
    </View>
  );
};

export default AddFridge;
