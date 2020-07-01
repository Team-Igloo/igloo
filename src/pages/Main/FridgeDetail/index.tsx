import FreshIndication from '@components/FreshIndication';
import ItemCard from '@components/ItemCard';
import LongAddBtn from '@components/LongAddBtn';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  fridgeDetailContainer: {
    flex: 1,
  },
  fridgeDetailNameTextContainer: {
    marginTop: 41,
    marginLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fridgeDetailNameText: {
    fontSize: 27,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  fridgeDetailFreshIndicator: {
    marginLeft: 12,
  },
  fridgeDetailLongBtnContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  fridgeDetailCategoryContainer: {
    marginTop: 24,
  },
});

const RenderItems = () => {
  const [value] = React.useState([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]);
  return (
    <View>
      {value.map(function (category: number[]) {
        return (
          <>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{ fontSize: 20, marginLeft: 19, fontWeight: 'normal', fontStyle: 'normal' }}
              >
                유효기간이 곧 만료되는 상품
              </Text>
              <View style={{ flex: 1 }} />
              <TouchableOpacity
                style={{
                  marginRight: 19,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: 'rgba(112,112,112,1)',
                  }}
                >
                  더보기
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingLeft: 3,
                paddingTop: 18,
                paddingBottom: 29,
              }}
            >
              {category.map(function () {
                return <ItemCard style={{ marginLeft: 16 }} data={{}} />;
              })}
            </ScrollView>
          </>
        );
      })}
    </View>
  );
};

const FridgeDetail: React.FC = () => {
  return (
    <View style={styles.fridgeDetailContainer}>
      <View style={styles.fridgeDetailNameTextContainer}>
        <Text style={styles.fridgeDetailNameText}>냉장고</Text>
        <FreshIndication style={styles.fridgeDetailFreshIndicator} val={1} />
      </View>
      <View style={styles.fridgeDetailLongBtnContainer}>
        <LongAddBtn>상품</LongAddBtn>
      </View>
      <ScrollView style={styles.fridgeDetailCategoryContainer}>
        <RenderItems />
      </ScrollView>
    </View>
  );
};

export default FridgeDetail;
