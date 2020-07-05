import IglooPicker from '@components/IglooPicker';
import IglooTextInput from '@components/IglooTextInput';
import LongAddBtn from '@components/LongAddBtn';
import LongBlueBtn from '@components/LongBlueBtn';
import PictureSelectBox from '@components/PictureSelectBox';
import ShortAddBtn from '@components/ShortAddBtn';
import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  addRecipesContainer: {
    flex: 1,
  },
  addRecipesTitleText: {
    fontSize: 27,
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: 41,
    marginLeft: 19,
  },
  addRecipesContentContainer: {
    marginTop: 30,
    paddingLeft: 18,
    paddingRight: 18,
  },
  addRecipesNameText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  addRecipesNameContainer: {
    paddingTop: 16,
    paddingBottom: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addRecipesNameTextInput: {
    width: (Dimensions.get('window').width - 51) / 2,
  },
  addRecipesAddPictureBtn: {
    width: (Dimensions.get('window').width - 51) / 2,
  },
  addRecipesTimeContainer: {
    paddingTop: 16,
    paddingBottom: 19,
  },
  addRecipesTimeText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  addRecipesTimeTextInput: {
    width: Dimensions.get('window').width - 36,
  },
  addRecipesDifficultyText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  addRecipesDifficultyContainer: {
    paddingTop: 16,
    paddingBottom: 32,
  },
  addRecipesDifficultyPicker: {
    width: Dimensions.get('window').width - 36,
  },
  addRecipesPhaseText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  addRecipesPhaseContainer: {
    paddingTop: 19,
    paddingBottom: 26,
  },
  addRecipesPictureSelectBox: {
    width: Dimensions.get('window').width - 36,
  },
  addRecipesLongAddBtn: {
    width: Dimensions.get('window').width - 36,
  },
  addRecipesLongBlueBtn: {
    width: Dimensions.get('window').width - 36,
    marginTop: 26,
  },
});

const AddRecipes: React.FC = () => {
  return (
    <ScrollView style={styles.addRecipesContainer}>
      <View>
        <Text style={styles.addRecipesTitleText}>레시피 추가</Text>
      </View>
      <View style={styles.addRecipesContentContainer}>
        <View>
          <Text style={styles.addRecipesNameText}>이름</Text>
          <View style={styles.addRecipesNameContainer}>
            <IglooTextInput style={styles.addRecipesNameTextInput} />
            <ShortAddBtn style={styles.addRecipesAddPictureBtn}>사진 추가</ShortAddBtn>
          </View>
        </View>
        <View>
          <Text style={styles.addRecipesTimeText}>소요 시간(분)</Text>
          <View style={styles.addRecipesTimeContainer}>
            <View>
              <IglooTextInput style={styles.addRecipesTimeTextInput} />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.addRecipesDifficultyText}>난이도</Text>
          <View style={styles.addRecipesDifficultyContainer}>
            <IglooPicker style={styles.addRecipesDifficultyPicker} />
          </View>
        </View>
        <View>
          <Text style={styles.addRecipesPhaseText}>레시피 단계</Text>
          <View style={styles.addRecipesPhaseContainer}>
            <PictureSelectBox style={styles.addRecipesPictureSelectBox} />
          </View>
        </View>
        <View>
          <LongAddBtn style={styles.addRecipesLongAddBtn}>단계</LongAddBtn>
          <LongBlueBtn style={styles.addRecipesLongBlueBtn}>등록하기</LongBlueBtn>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddRecipes;
