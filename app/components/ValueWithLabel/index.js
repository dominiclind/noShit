import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';


const ValueWithLabel = (props) => (
  <View style={[styles.component, props.style || {}]}>
    <Text style={[styles.label, props.big ? styles.bigLabel : {}]}>{props.label.toUpperCase()}</Text>
    <Text style={[styles.value, props.big ? styles.bigValue : {}]}>{props.value.toUpperCase()}</Text>
  </View>
);

// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'transparent'
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 5
  },
  value: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 30
  },
  bigLabel: {
    fontSize: 18 * 2
  },
  bigValue: {
    fontSize: 30 * 2,
    lineHeight: 30 * 2
  }
});


export default ValueWithLabel;
