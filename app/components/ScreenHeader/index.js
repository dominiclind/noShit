import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class ScreenHeader extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Text
        style={styles.screenHeader}
      >
        {this.props.children}
      </Text>
    )
  }
}


// styles
const styles = StyleSheet.create({
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    color: 'black',
    position: 'absolute',
    top: 40,
    left: 20
  },
});


export default ScreenHeader
