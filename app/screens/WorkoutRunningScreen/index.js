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
class WorkoutRunningScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('running is mounted');
  }
  componentWillUnmount() {
    console.log('running is unmounted');
  }

  render() {
    return (
      <View style={styles.screen}>
        <ScreenHeader>Springa</ScreenHeader>
          <View style={styles.banner}>
            <ValueWithLabel
              label="Senaste pass"
              value="3 dagar sen"
            />
            <ValueWithLabel
              label="Längd"
              value="39 min"
            />
          </View>

          <View style={styles.content}>
            <ValueWithLabel
              big
              label="Distans"
              value="7.78 km"
              style={{marginBottom: 20}}
            />

            <ValueWithLabel
              label="Energi"
              value="203 kcal"
              style={{marginBottom: 20}}
            />

            <ValueWithLabel
              label="Frekvens"
              value="2.1 / vecka"
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

export default WorkoutRunningScreen
