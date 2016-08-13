import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

class ShakeProgress extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { current = 2, goal = 3 } = this.props;
    return (
      <TouchableOpacity style={styles.component} onPress={this.props.onPress}>
        <AnimatedCircularProgress
          size={300}
          rotation={360}
          width={8}
          fill={current / goal * 100}
          tintColor="#000000"
          backgroundColor="#bfbfbf"
        />
      <Text style={styles.current}>{current}</Text>
      </TouchableOpacity>
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
