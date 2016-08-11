import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const CURRENT = 2;
const GOAL = 3;

class ShakeProgress extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={ styles.component }>
        <AnimatedCircularProgress
          size={300}
          rotation={360}
          width={12}
          fill={CURRENT / GOAL * 100}
          tintColor="#000000"
          backgroundColor="#bfbfbf"
        />
      <Text style={styles.current}>{CURRENT}</Text>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'transparent',
    width: 300,
    position: 'relative'
  },
  current: {
    fontSize: 150,
    fontWeight: '500',
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 300,
    textAlign: 'center',
    top: 60
  }
});


export default ShakeProgress
