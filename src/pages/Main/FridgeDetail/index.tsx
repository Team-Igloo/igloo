import FreshIndication from '@components/FreshIndication';
import ItemCard from '@components/ItemCard';
import LongAddBtn from '@components/LongAddBtn';
import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  fridgeDetailContainer: {
    flex: 1,
  } as ViewStyle,
  fridgeDetailNameTextContainer: {
    marginTop: 41,
    marginLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  fridgeDetailNameText: {
    fontSize: 27,
    fontWeight: 'normal',
    fontStyle: 'normal',
  } as TextStyle,
  fridgeDetailFreshIndicator: {
    marginLeft: 12,
  } as ViewStyle,
  fridgeDetailLongBtnContainer: {
    alignItems: 'center',
    marginTop: 24,
  } as ViewStyle,
  fridgeDetailCategoryContainer: {
    marginTop: 24,
  } as ViewStyle,
  fridgeDetailCategoryTextContainer: {
    flexDirection: 'row',
  } as ViewStyle,
  fridgeDetailCategoryText: {
    fontSize: 20,
    marginLeft: 19,
    fontWeight: 'normal',
    fontStyle: 'normal',
  } as TextStyle,
  fridgeDetailMorebtnTextContainer: {
    marginRight: 19,
  } as ViewStyle,
  fridgeDetailMorebtnText: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: 'rgba(112,112,112,1)',
  },
  fridgeDetailCardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 3,
    paddingTop: 18,
    paddingBottom: 29,
  } as ViewStyle,
  fridgeDetailCard: {
    marginLeft: 16,
  } as ViewStyle,
  fridgeDetailEmptySpace: {
    flex: 1,
  } as ViewStyle,
});

const FridgeDetail: React.FC = () => {
  const [value] = React.useState([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]);
  const renderItems = React.useCallback(() => {
    return (
      <View>
        {value.map((category: number[]) => {
          return (
            <>
              <View style={styles.fridgeDetailCategoryTextContainer}>
                <Text style={styles.fridgeDetailCategoryText}>유효기간이 곧 만료되는 상품</Text>
                <View style={styles.fridgeDetailEmptySpace} />
                <TouchableOpacity style={styles.fridgeDetailMorebtnTextContainer}>
                  <Text style={styles.fridgeDetailMorebtnText}>더보기</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.fridgeDetailCardContainer}
              >
                {category.map(function () {
                  return <ItemCard style={styles.fridgeDetailCard} data={{}} />;
                })}
              </ScrollView>
            </>
          );
        })}
      </View>
    );
  }, [value]);

  return (
    <View style={styles.fridgeDetailContainer}>
      <View style={styles.fridgeDetailNameTextContainer}>
        <Text style={styles.fridgeDetailNameText}>냉장고</Text>
        <FreshIndication style={styles.fridgeDetailFreshIndicator} val={1} />
      </View>
      <View style={styles.fridgeDetailLongBtnContainer}>
        <LongAddBtn>상품</LongAddBtn>
      </View>
      <ScrollView style={styles.fridgeDetailCategoryContainer}>{renderItems()}</ScrollView>
    </View>
  );
};

export default FridgeDetail;
