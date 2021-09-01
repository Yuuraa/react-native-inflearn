// BoxApp.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Box from './Box';

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: 'red', height: 100 }}/>
      <Box style={{ backgroundColor: 'green', flex: 1 }}/>
      <Box style={{ backgroundColor: 'blue', height: 100 }}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
  },
  errorText: {
    color: 'red',
  }
});