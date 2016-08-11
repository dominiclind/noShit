import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import ShakeProgress from 'app/components/ShakeProgress';

class ShakeScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.screen}>
        <Animatable.Text
          style={styles.screenHeader}
          animation="fadeIn"
          duration={500}
        >
          Shakes
        </Animatable.Text>
        <Animatable.View
          animation="fadeIn"
          delay={300}
          duration={500}>
          <ShakeProgress />
        </Animatable.View>
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
    alignItems: 'center'
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 60,
    left: 30
  }
});


export default ShakeScreen
