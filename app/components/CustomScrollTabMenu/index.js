import React, { Component } from 'react';

import {
  View,
  Text,
  Animated,
  StyleSheet
} from 'react-native';


const LABELS = [
  'Inge skit',
  'Shakes',
  'Lyfta',
  'Springa',
  'Mäta'
];

class CustomScrollTabMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anim: new Animated.Value(0),
      visible: false
    };
  }

  componentDidMount() {
    const { visible } = this.props;
    this._animate(visible);
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;

    if (visible !== this.state.visible) {
      this._animate(visible);
    }
  }

  _animate(visible) {
    if (visible) {
      Animated.spring(this.state.anim, {
        toValue: 1,
        friction: 12
      }).start();
    } else {
      Animated.spring(this.state.anim, {
        toValue: 0,
        tension: 7,
        friction: 11
      }).start();
    }
    this.setState({visible});
  }

  render() {
    const { position = 2 } = this.props;

    const translateY = this.state.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 0]
    });


    return (
      <Animated.View
        style={[
          styles.component,
          { transform: [{translateY}] }
        ]}
      >
        {LABELS.map((label, i) => (
          <Text
            onPress={() => this.props.onPress(i)}
            key={i}
            style={[
              styles.label,
              position == i ? styles.activeLabel : {}
            ]}
          >
            {label}
          </Text>
        ))}
      </Animated.View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'rgba(0,0,0,.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  label: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  activeLabel: {
    backgroundColor: 'black',
    color: 'white'
  }
});


export default CustomScrollTabMenu
