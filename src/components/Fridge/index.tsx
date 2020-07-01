import { getWidth } from '@utils/helper';
import * as React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import FreshIndication from '@components/FreshIndication';
import { FridgeInfo } from '../../../@types';

const Fridge: React.FC<FridgeInfo> = ({ percent, name }) => {
  const { current: translateX } = React.useRef(new Animated.Value(getWidth(-310)));

  React.useEffect(() => {
    console.log(getWidth(-310 + -310 * (percent / 100)));
    Animated.timing(translateX, {
      toValue: getWidth(-310 + 310 * (percent / 100)),
      useNativeDriver: true,
    }).start();
  }, [percent, translateX]);

  return (
    <TouchableOpacity
      style={{
        height: 106,
        borderRadius: 12,
        marginTop: 17,
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 14,
        paddingRight: 14,
        elevation: 3,
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 12,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}
        >
          {name}
        </Text>
        {percent >= 0 && percent <= 33 ? (
          <FreshIndication val={3} />
        ) : percent >= 34 && percent <= 66 ? (
          <FreshIndication val={2} />
        ) : (
          <FreshIndication val={1} />
        )}
      </View>
      <View
        style={{
          width: getWidth(310),
          overflow: 'hidden',
          height: 21,
          marginTop: 16,
          borderRadius: 5,
        }}
      >
        <Animated.View
          style={{
            width: getWidth(310),
            borderRadius: 5,
            height: 21,
            backgroundColor:
              percent >= 0 && percent <= 33
                ? 'rgba(207, 85, 61,1)'
                : percent >= 34 && percent <= 66
                ? 'rgba(239, 202, 0,1)'
                : 'rgba(51, 175, 19,1)',
            position: 'absolute',
            top: 0,
            left: 0,
            transform: [
              {
                translateX,
              },
            ],
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default Fridge;
