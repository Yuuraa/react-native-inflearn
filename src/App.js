// App.js
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import MyButton from './MyButton';
import Box from './Box';

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  return (
    <View style={styles.container}>
      {/* Style Code 실습 */}
      {/* <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>Hi I'm Yura</Text>
      <Text style={ styles.text }> Style Code </Text>
      <Text style={[ styles.text, styles.errorText ]}> Error Text </Text> */}
      
      
      {/* Event 실습 */}
      {/* <TextInput onChange={event => console.log(event.nativeEvent)}
                style={{ padding: 10, fontSize: 20}}
      /> */}
      
      <Box style={{ backgroundColor: 'blue', height: 100 }}/>


      {/* State 실습 */}
      {/* <Text style={{ fontSize: 20 }}>{addition}</Text>
      <Text style={{ fontSize: 20 }}>{multiple}</Text> */}
      <StatusBar style="auto" />
      {/* <MyButton title="addition" onPress={() => setAddition(addition + 2)}/>
      <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)}/> */}

      {/* Button 실습 */}
      {/* <Button title="샘플 버튼" onPress={() => alert("Click!!")}/> */}
      {/* <MyButton title="버튼 1" onPress={() => alert("1!!")}/>
      <MyButton title="버튼 2" onPress={() => alert("2!!")}/>
      <MyButton title="안보임" onPress={() => alert("3!!")}>버튼 3</MyButton> */}
      {/* <MyButton /> */}
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