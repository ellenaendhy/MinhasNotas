import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default class Novas Notas extends Components {
    render() {
      return (
          <View style={style.container}>
          <Text style={styles.title}>
          Novas Notas
          </Text>
         </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        texAling: 'center',
        margin: 10,
    } 
});   
