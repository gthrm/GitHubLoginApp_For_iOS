'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from "./loginform";
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.logoCont}>
          <Image 
            style={styles.logo}
            source={require('../AppCdROma/img/Octocat.png')}/>
            <Text style={styles.logText} >GitHub в твоем мобильном</Text>
          </View>

          <View style={styles.logText}>
            <LoginForm />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b2bec3',
  },

  logoCont: {
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
  },

  logText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    color: 'rgba(255,255,255,.7)',
    fontSize: 16,
  },
});
