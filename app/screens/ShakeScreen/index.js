import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { observer } from 'mobx-react/native';

import {
  View,
  Text,
  InteractionManager,
  StyleSheet,
  Dimensions
} from 'react-native';
import ScreenHeader from 'app/components/ScreenHeader';
import ShakeProgress from 'app/components/ShakeProgress';
import ShakeStore from 'app/stores/ShakeStore';

const { width, height } = Dimensions.get('window');

@observer
class ShakeScreen extends Component {

  constructor(props) {
    super(props)
  }

  increase() {
    ShakeStore.addShake();
  }

  render() {
    const { today, goal } = ShakeStore;
    return (
      <View style={styles.screen}>
        <ScreenHeader>Shakes</ScreenHeader>
        <Animatable.View
          animation="fadeIn"
          delay={300}
          duration={500}>
          <ShakeProgress
            onPress={() => this.increase()}
            current={today.length}
            goal={goal}
          />
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


export default ShakeScreen
