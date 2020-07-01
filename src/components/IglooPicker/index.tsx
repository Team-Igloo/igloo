import { Picker } from '@react-native-community/picker';
import * as React from 'react';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';

type BtnProps = {
  children: string;
  style: StyleProp<ViewStyle>;
  data: string;
};

const IglooPicker: React.FC<BtnProps> = ({ style }) => {
  const [select, setSelect] = React.useState('');
  return (
    <View
      style={[
        {
          height: 41,
          borderRadius: 15,
          backgroundColor: 'rgba(242,242,242,1)',
          justifyContent: 'center',
        },
        Platform.OS === 'android'
          ? {
              elevation: 3,
            }
          : {
              shadowColor: 'rgba(0, 0, 0, 0.16)',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 6,
            },

        style,
      ]}
    >
      <Picker
        selectedValue={select}
        onValueChange={itemValue => {
          setSelect(itemValue as string);
        }}
      >
        <Picker.Item label='육류' value='meats' />
        <Picker.Item label='생선류' value='fishes' />
      </Picker>
    </View>
  );
};

export default IglooPicker;
