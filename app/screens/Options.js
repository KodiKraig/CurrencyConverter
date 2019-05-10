import React from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

export default class Options extends React.Component {

  handleThemePress = () => {
    console.log('Theme press');
  };

  handleSitePress = () => {
    console.log('Site press');
  };

  render() {
    return (
        <ScrollView>
          <StatusBar translucent={false} barStyle="default"/>
          <ListItem
              text="Themes"
              onPress={this.handleThemePress}
              customIcon={
                <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>
              }
          />
          <Separator/>
          <ListItem
              text="Fixer.io"
              onPress={this.handleSitePress}
              customIcon={
                <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>
              }
          />
          <Separator/>
        </ScrollView>
    );
  }
}