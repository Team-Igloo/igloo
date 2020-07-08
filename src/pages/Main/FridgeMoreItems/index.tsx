import ItemCard from '@components/ItemCard';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ListRenderItemInfo, StyleSheet, View, ViewStyle } from 'react-native';
import { FridgeMoreItemsInfo, itemInfo } from '@types';

const styles = StyleSheet.create({
  FridgeMoreItemsContainer: {
    flex: 1,
  } as ViewStyle,
  FridgeMoreItemsFlatListContainer: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  } as ViewStyle,
  FridgeMoreItemsCard: {
    marginLeft: 16,
    marginTop: 16,
  } as ViewStyle,
});

const FridgeMoreItems: React.FC<FridgeMoreItemsInfo> = () => {
  const [items] = React.useState<itemInfo[]>([1, 2, 3]);

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: '유통기간이 곧 만료되는 상품',
    });
  }, [navigation]);

  const renderItems = React.useCallback(({ item }: ListRenderItemInfo<itemInfo>) => {
    return <ItemCard style={styles.FridgeMoreItemsCard} data={{ item }} />;
  }, []);

  return (
    <View style={styles.FridgeMoreItemsContainer}>
      <FlatList
        data={items}
        renderItem={renderItems}
        contentContainerStyle={styles.FridgeMoreItemsFlatListContainer}
        // keyExtractor={item => item}
      />
    </View>
  );
};

export default FridgeMoreItems;
