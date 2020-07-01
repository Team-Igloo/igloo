import { ViewStyle } from 'react-native';

// navigator's types
export interface RootStackParamList extends Record<string, object | undefined> {
  Main: {};
  FridgeList: {};
}

//page's types
export interface FridgeInfo {
  percent: number;
  name: string;
}

export interface FridgeDetailInfo {}

// component's types
export interface indicationProps {
  val: number;
  style: StyleProp<ViewStyle>;
}

export interface pickerBtnProps {
  children: string;
  style: StyleProp<ViewStyle>;
  data: string;
}

export interface plusBtnProps {
  style: StyleProp<ViewStyle>;
}

export interface IglooTextInputProps {
  style: StyleProp<TextStyle>;
  leftDeco: React.ComponentType;
  rightDeco: React.ComponentType;
}

export interface itemCardProps {
  style: StyleProp<ViewStyle>;
  data: unknown;
}

export interface longAddBtnProps {
  children: string;
  style: StyleProp<ViewStyle>;
}

export interface longBlueBtnProps {
  children: string;
  style: StyleProp<ViewStyle>;
}

export interface pitureSelectBoxProps {
  style: StyleProp<ViewStyle>;
}

export interface RecipeCardProps {
  style: StyleProp<ViewStyle>;
  data: unknown;
}

export interface ShortAddBtnProps {
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}
