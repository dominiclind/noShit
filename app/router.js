import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  LayoutAnimation
} from 'react-native';
import { observer } from 'mobx-react/native';
import appStore from 'app/stores/ApplicationStore';

// screens
import ShakeScreen from 'app/screens/ShakeScreen';

@observer
class Router extends Component {
  componentWillMount() {
    //LayoutAnimation.spring();
  }
  render () {
    if (!appStore.hydrated) {
      return (
        <View/>
      );
    } else {
      switch (appStore.currentRoute) {
        case 'shakeScreen':
          return <ShakeScreen />
        default:
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text onPress={() => appStore.goTo('shakeScreen')}>home</Text>
            </View>
          );
      }
    }
  }
}

export default Router;
