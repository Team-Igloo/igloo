import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const BaseWidth = 375;
export const BaseHeight = 812;

export const getWidth: (size: number) => number = size => size * (width / BaseWidth);
export const getHeight: (size: number) => number = size => size * (height / BaseHeight);
