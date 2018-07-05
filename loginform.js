'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.inputText}
            placeholder='логин или E-mail'
            placeholderTextColor='rgba(255,255,255,0.8)'
            returnKeyType='next'
            keyboardType={'email-address'}
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={() => this.passwordInput.focus()}
            // value={this.state.searchString}
            // onChange={this._onSearchTextChanged}
        />
        <TextInput
            style={styles.inputText}
            placeholder='пароль'
            secureTextEntry
            placeholderTextColor='rgba(255,255,255,0.8)'
            returnKeyType='go'
            ref={(input) => this.passwordInput = input}
            // value={this.state.searchString}
            // onChange={this._onSearchTextChanged}
        />

        <TouchableOpacity style={styles.buttonCont}
          onSubmitEditing={() => console.log('Push')}>
        <Text style={styles.textButton}>ВОЙТИ</Text>
        
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  inputText: {
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'rgba(255,255,255,.2)',
    marginBottom: 10,
  },

  buttonCont: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,.5)',
    justifyContent: 'center',
  },

  textButton: {
    textAlign: 'center',
    fontWeight: '700',
    
  },

});
