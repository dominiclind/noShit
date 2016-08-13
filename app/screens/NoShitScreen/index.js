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

const { width, height } = Dimensions.get('window');

@observer
class NoShitScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.screen}>
        <ScreenHeader>Inge skit</ScreenHeader>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  screen : {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 50,
    left: 30
  }
});


export default NoShitScreen
