import * as React from 'react';
import {
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { FridgeItemDetailInfo } from '@types';
import { useNavigation } from '@react-navigation/native';
import IglooText from '@components/IglooText';

const styles = StyleSheet.create({
  FridgeItemDetailContainer: {
    flex: 1,
  } as ViewStyle,
  FridgeItemDetailImagesContainer: {},
  FridgeItemDetailItemImage: {
    alignSelf: 'center',
  } as ImageStyle,
  FridgeItemDetailBarcodeImage: {
    alignSelf: 'center',
  } as ImageStyle,
  FridgeItemDetailTextInfoContainer: {} as ViewStyle,
  FridgeItemDetailNameText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 23,
  } as TextStyle,
});

const FridgeItemDetail: React.FC<FridgeItemDetailInfo> = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: '식품 상세정보',
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.FridgeItemDetailContainer}>
      <View style={styles.FridgeItemDetailImagesContainer}>
        <Image
          source={require('../../../dummy/test.png')}
          style={styles.FridgeItemDetailItemImage}
        />
        <Image
          source={require('../../../dummy/barcode.png')}
          style={styles.FridgeItemDetailBarcodeImage}
        />
      </View>
      <View style={styles.FridgeItemDetailTextInfoContainer}>
        <View>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            이름
          </IglooText>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            상추
          </IglooText>
        </View>
        <View>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            카테고리
          </IglooText>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            야채
          </IglooText>
        </View>
        <View>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            가격
          </IglooText>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            3,000원
          </IglooText>
        </View>
        <View>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            입고일
          </IglooText>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            2020-07-09
          </IglooText>
        </View>
        <View>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            유통기한
          </IglooText>
          <IglooText style={styles.FridgeItemDetailNameText} EB>
            2020-07-10
          </IglooText>
        </View>
      </View>
    </ScrollView>
  );
};

export default FridgeItemDetail;
