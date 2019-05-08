import React from 'react';
import Home from './screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',

  $lightGray: '#F0F0F0',
  $white: '#FFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
});

export default () => <Home/>;