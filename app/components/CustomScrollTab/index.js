import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import {ViewPager} from 'rn-viewpager';
import WorkoutStore from 'app/stores/WorkoutStore';

import CustomScrollTabMenu from 'app/components/CustomScrollTabMenu';

// screens
import ShakeScreen from 'app/screens/ShakeScreen';
import WorkoutLiftingScreen from 'app/screens/WorkoutLiftingScreen';
import WorkoutRunningScreen from 'app/screens/WorkoutRunningScreen';
import NoShitScreen from 'app/screens/NoShitScreen';
import MeasureScreen from 'app/screens/MeasureScreen';


const { width } = Dimensions.get('window');

@observer
class CustomScrollTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      position: 2
    }
  }

  componentDidMount() {
  }
  _onPageSelected(scrollData) {
    const { position } = scrollData;
    this.setState({ position });
  }
  _onPageScroll(scrollData) {
    const { offset, position } = scrollData;
    // if (position < 0 || position >= 2) return;
    // console.log(offset + position);
  }
  _setPage(position) {
    console.log(position);
    this.refs['viewPager'].setPage(position);
  }

  render() {
    const { position } = this.state;

    return (
      <View style={ styles.component }>
        <ViewPager
          ref="viewPager"
          style={{flex: 1}}
          scrollEnabled={(WorkoutStore.currentRoute !== '/lift' && WorkoutStore.currentRoute !== '/run')}
          onPageSelected={(scrollData) => this._onPageSelected(scrollData)}
          onPageScroll={(scrollData) => this._onPageScroll(scrollData)}
          initialPage={position}
        >
          <View>
            <NoShitScreen tabLabel="Inge skit"/>
          </View>
          <View>
            <ShakeScreen tabLabel="Shakes" />
          </View>
          <View>
            <WorkoutLiftingScreen tabLabel="Lyfta" />
          </View>
          <View>
            <WorkoutRunningScreen tabLabel="Springa" />
          </View>
          <View>
            <MeasureScreen tabLabel="Mät" />
          </View>
        </ViewPager>

        { /* }
        <Text
          style={styles.screenHeader}
          animation="fadeIn"
          duration={500}
        >
          Träna
        </Text>
        { */ }

        <View style={styles.tabHolder}>
          <CustomScrollTabMenu
            position={position}
            visible={(WorkoutStore.currentRoute == '/lift' || WorkoutStore.currentRoute == '/run') ? false : true}
            onPress={(i) => this._setPage(i)}
          />
        </View>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'rgba(0,0,0,.1)',
    flex: 1
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 50,
    left: 30
  },
  tabHolder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
});


export default CustomScrollTab
