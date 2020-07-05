import Fridge from '@components/Fridge';
import LongAddBtn from '@components/LongAddBtn';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, ViewStyle } from 'react-native';
import { FridgeInfo, FridgeListInfo } from '../../../../@types';

const styles = StyleSheet.create({
  fridgeListContainer: {
    flex: 1,
    marginTop: 13,
  } as ViewStyle,
  fridgeListContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  } as ViewStyle,
});

const FridgeList: React.FC<FridgeListInfo> = () => {
  const navigation = useNavigation();
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

  React.useEffect(() => {
    navigation.setOptions({
      title: '냉장고를 선택해주세요.',
    });
  }, [navigation]);

  return (
    <FlatList
      data={fridges}
      renderItem={renderFridges}
      keyExtractor={item => item.name}
      style={styles.fridgeListContainer}
      contentContainerStyle={styles.fridgeListContentContainer}
      ListFooterComponent={<LongAddBtn toPageName='AddFridge'>냉장고</LongAddBtn>}
    />
  );
};

export default FridgeList;
