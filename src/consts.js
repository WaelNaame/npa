import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const BW = width / 300;
export const H = height / 600;

export const colors = {
  backgroundColor: '#2D3542',
  primaryColor: '#12A929',
  secondaryColor: '#288FCE',
  elementColor: '#C79D65',
  textColor: '#f9f9f9',
};
