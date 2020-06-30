export interface RootStackParamList extends Record<string, object | undefined> {
  Main: {};
  FridgeList: {};
}

export interface FridgeInfo {
  percent: number;
  name: string;
}
