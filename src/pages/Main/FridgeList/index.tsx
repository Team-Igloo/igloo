import Fridge from '@components/Fridge';
import LongAddBtn from '@components/LongAddBtn';
import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { FridgeInfo, FridgeListInfo } from '../../../../@types';

const styles = StyleSheet.create({
  fridgeDetailContainer: {
    flex: 1,
  },
  fridgeListTextContainer: {
    marginLeft: 18,
    marginTop: 41,
  } as TextStyle,
  fridgeListText: {
    fontSize: 27,
    fontWeight: 'normal',
    fontStyle: 'normal',
  } as TextStyle,
  fridgeListContainer: {
    marginTop: 13,
  } as ViewStyle,
  fridgeListContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  } as ViewStyle,
  fridgeListFooterComponent: {
    marginTop: 26,
  } as ViewStyle,
});

const FridgeList: React.FC<FridgeListInfo> = ({ navigation }) => {
  const [fridges] = React.useState<FridgeInfo[]>([
    {
      name: '나의 냉장고',
      percent: 100,
    },
    {
      name: '우리의 냉장고',
      percent: 66,
    },
    {
      name: '너의 냉장고',
      percent: 33,
    },
  ]);

  const renderFridges = React.useCallback(({ item }: ListRenderItemInfo<FridgeInfo>) => {
    return <Fridge {...item} />;
  }, []);

  return (
    <View style={styles.fridgeDetailContainer}>
      <View style={styles.fridgeListTextContainer}>
        <Text style={styles.fridgeListText}>냉장고를 선택해주세요.</Text>
      </View>
      <FlatList
        data={fridges}
        renderItem={renderFridges}
        keyExtractor={item => item.name}
        style={styles.fridgeListContainer}
        contentContainerStyle={styles.fridgeListContentContainer}
        ListFooterComponent={
          <View style={styles.fridgeListFooterComponent}>
            <LongAddBtn navigation={navigation} toPageName="AddFridge">
              냉장고
            </LongAddBtn>
          </View>
        }
      />
    </View>
  );
};

export default FridgeList;
