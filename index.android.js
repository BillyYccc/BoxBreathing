/**
 * BoxBreathing React Native App
 * @author BillyYccc
 * @Github https://github.com/BillyYccc
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, Text, StyleSheet, View, Image } from 'react-native'

var imageAddress = 'http://ot31w2r8g.bkt.clouddn.com/BoxBreathing.gif'
class BoxBreathing extends Component {
  render () {
    return (
      <View style={styles.Container}>
        <Text style={styles.headerStyle}>
          Box Breathing
        </Text>
        <Image style={styles.imageStyle} source={{uri: imageAddress}} />
        <View>
          <Text style={styles.TipsStyle}>
            Tips:
          </Text>
          <Text style={styles.TipsStyle}>
            1.Blue circle stays static, hold breath
          </Text>
          <Text style={styles.TipsStyle}>
            2.Blue circle expands, breath in
          </Text>
          <Text style={styles.TipsStyle}>
            3.Blue circle shrinks, breath out
          </Text>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  imageStyle: {
    width: 300,
    height: 200
  },
  TipsStyle: {
    textAlign: 'left',
    fontSize: 20
  }
})

AppRegistry.registerComponent('BoxBreathing', () => BoxBreathing)
