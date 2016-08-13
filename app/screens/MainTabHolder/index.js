import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ShakeScreen from 'app/screens/ShakeScreen';
import WorkoutLiftingScreen from 'app/screens/WorkoutLiftingScreen';
import WorkoutRunningScreen from 'app/screens/WorkoutRunningScreen';
import NoShitScreen from 'app/screens/NoShitScreen';
import MeasureScreen from 'app/screens/MeasureScreen';

@observer
class MainTabHolder extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollableTabView
        tabBarUnderlineColor="black"
        tabBarInactiveTextColor="black"
        tabBarActiveTextColor="black"
        tabBarPosition="bottom"
        initialPage={1}
      >
        <NoShitScreen tabLabel="Inge skit" />
        <ShakeScreen tabLabel="Shakes" />
        <WorkoutLiftingScreen tabLabel="Lyfta" />
        <WorkoutRunningScreen tabLabel="Springa" />
        <MeasureScreen tabLabel="Mät" />
      </ScrollableTabView>
      );
  }
}


// styles
const styles = StyleSheet.create({
  screen : {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 50,
    left: 30
  }
});


export default MainTabHolder
