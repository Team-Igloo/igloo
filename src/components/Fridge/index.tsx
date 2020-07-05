import colors from '@constants/colors';
import { getWidth } from '@utils/helper';
import * as React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FreshIndication from '@components/FreshIndication';
import { FridgeInfo, FridgeStatus } from '../../../@types';

const styles = StyleSheet.create({
  container: {
    height: 106,
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 17,
    paddingHorizontal: 16,
    elevation: 3,
    backgroundColor: colors.white,
    shadowColor: colors.black16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  } as ViewStyle,
  indicatorContainer: {
    width: getWidth(310),
    overflow: 'hidden',
    height: 21,
    marginTop: 16,
    borderRadius: 5,
    backgroundColor: colors.pinkishGrey,
  } as ViewStyle,
  indicator: {
    width: getWidth(310),
    borderRadius: 5,
    height: 21,
    position: 'absolute',
    top: 0,
    left: 0,
  } as ViewStyle,
  fridgeName: {
    fontSize: 20,
    fontWeight: 'bold',
  } as TextStyle,
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  } as ViewStyle,
});

const Fridge: React.FC<FridgeInfo> = ({ percent, name }) => {
  const { current: translateX } = React.useRef(new Animated.Value(getWidth(-310)));

  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: getWidth(-310 + 310 * (percent / 100)),
      useNativeDriver: true,
    }).start();
  }, [percent, translateX]);

  const info: FridgeStatus = React.useMemo(() => {
    const fridgeInfo: FridgeStatus = {
      color: '',
      status: '',
    };
    if (percent < (1 / 3) * 100) {
      fridgeInfo.color = colors.terracotta;
      fridgeInfo.status = '나쁨';
    } else if (percent < (2 / 3) * 100) {
      fridgeInfo.color = colors.golden;
      fridgeInfo.status = '보통';
    } else {
      fridgeInfo.color = colors.green;
      fridgeInfo.status = '신선';
    }
    return fridgeInfo;
  }, [percent]);

  const indicatorStyle = React.useMemo(
    () => [
      styles.indicator,
      {
        backgroundColor: info.color,
        transform: [
          {
            translateX,
          },
        ],
      },
    ],
    [translateX, info]
  );

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.fridgeName}>{name}</Text>
        <FreshIndication {...info} />
      </View>
      <View style={styles.indicatorContainer}>
        <Animated.View style={indicatorStyle} />
      </View>
    </TouchableOpacity>
  );
};
export default Fridge;
