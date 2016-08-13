import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ValueWithLabel from 'app/components/ValueWithLabel';
import ScreenHeader from 'app/components/ScreenHeader';
@observer
class WorkoutLiftingScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.screen}>
        <ScreenHeader>Lyfta</ScreenHeader>
        <View style={styles.banner}>
          <ValueWithLabel
            label="Senaste pass"
            value="1 dag sen"
          />
          <ValueWithLabel
            label="Längd"
            value="46 min"
          />
        </View>

        <View style={styles.content}>
          <ValueWithLabel
            label="BENCH PRESS"
            value="4x4 42.5kg"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="DIPS"
            value="3X5 BW+1.25kg"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="BARBELL ROW"
            value="5X5 32.5kg"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="SKULLCRUSHERS"
            value="2X8 16kg"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="SQUAT"
            value="5X5 52.5kg"
            style={{marginBottom: 20}}
          />
        </View>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  screen : {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 120,
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 50,
    left: 30
  },
  banner: {
    backgroundColor: 'rgba(0,0,0,.1)',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    padding: 20
  }
});


export default WorkoutLiftingScreen
