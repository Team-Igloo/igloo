import Fridge from '@components/Fridge';
import * as React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { FridgeInfo } from '../../../../@types';

const styles = StyleSheet.create({
  fridgeListContainer: {
    marginTop: 13,
  } as ViewStyle,
  fridgeListContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  } as ViewStyle,
});

function FridgeList() {
  const [fridges] = React.useState<FridgeInfo[]>([
    {
      name: '나의 냉장고',
      percent: 90,
    },
    {
      name: '우리의 냉장고',
      percent: 60,
    },
    {
      name: '너의 냉장고',
      percent: 20,
    },
  ]);

  const renderFridges = React.useCallback(({ item }: ListRenderItemInfo<FridgeInfo>) => {
    return <Fridge {...item} />;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginLeft: 18, marginTop: 41 }}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}
        >
          냉장고를 선택해주세요.
        </Text>
      </View>
      <FlatList
        data={fridges}
        renderItem={renderFridges}
        keyExtractor={item => item.name}
        style={styles.fridgeListContainer}
        contentContainerStyle={styles.fridgeListContentContainer}
        ListFooterComponent={
          <View style={{ marginTop: 26 }}>{/* <LongAddBtn>냉장고</LongAddBtn> */}</View>
        }
      />
    </View>
  );
}

export default FridgeList;
