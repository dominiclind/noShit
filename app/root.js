import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { observer } from 'mobx-react/native';
import appStore from 'app/stores/ApplicationStore';
import CustomScrollTab from 'app/components/CustomScrollTab';

@observer
class Root extends Component {
  componentWillMount() {
    //LayoutAnimation.spring();
  }
  componentDidMount() {
  }
  render () {
    if (!appStore.hydrated) {
      return (
        <View/>
      );
    } else {
      // return <Area ref={(ref) => { appStore.nav = ref }} />
      // return <MainTabHolder/>
      return <CustomScrollTab />
    }
  }
}

export default Root;
