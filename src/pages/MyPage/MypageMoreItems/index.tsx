import ItemCard from '@components/ItemCard';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ListRenderItemInfo, StyleSheet, View, ViewStyle } from 'react-native';
import { MypageMoreItemsInfo, recipeInfo } from '@types';

const styles = StyleSheet.create({
  MypageMoreItemsContainer: {
    flex: 1,
  } as ViewStyle,
  MypageMoreItemsFlatListContainer: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  } as ViewStyle,
  MypageMoreItemsCard: {
    marginLeft: 16,
    marginTop: 16,
  } as ViewStyle,
});

const MypageMoreItems: React.FC<MypageMoreItemsInfo> = () => {
  const [recipes] = React.useState<recipeInfo[]>([1, 2, 3]);

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: '북마크 레시피',
    });
  }, [navigation]);

  const renderItems = React.useCallback(({ item }: ListRenderItemInfo<recipeInfo>) => {
    return <ItemCard style={styles.MypageMoreItemsCard} data={{ item }} />;
  }, []);

  return (
    <View style={styles.MypageMoreItemsContainer}>
      <FlatList
        data={recipes}
        renderItem={renderItems}
        contentContainerStyle={styles.MypageMoreItemsFlatListContainer}
        // keyExtractor={item => item}
      />
    </View>
  );
};

export default MypageMoreItems;
