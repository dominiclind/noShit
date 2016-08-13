import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import ScreenHeader from 'app/components/ScreenHeader';
import * as Animatable from 'react-native-animatable';

import ValueWithLabel from 'app/components/ValueWithLabel';


const { width, height } = Dimensions.get('window');

@observer
class MeasureScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.screen}>
        <ScreenHeader>Mät</ScreenHeader>
        <View style={styles.banner}>
          <ValueWithLabel
            label="Senast uppdaterad"
            value="2 dagar sen"
          />
          <ValueWithLabel
            label="Längd"
            value="32 min"
          />
        </View>

        <View style={styles.content}>
          <ValueWithLabel
            label="Bröst"
            value="110 cm"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="Arm"
            value="40 cm"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="Midja"
            value="80 cm"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="Lår"
            value="50 cm"
            style={{marginBottom: 20}}
          />

          <ValueWithLabel
            label="Vad"
            value="32 min"
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
    width,
    height
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


export default MeasureScreen
