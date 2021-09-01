import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = ({ title, onPress, children }) => {
    return (
        <TouchableOpacity 
            onPress={ onPress }
            onPressIn={ console.log("in") }
            onPressOut={ console.log("out") }
            onLongPress={ console.log("long") }
            delayLongPress={ 3000 }

            hitSlop={{ bottom: 100, top: 100, left: 100, right: 100 }}
            pressRetentionOffset={{ bottom: 0, top: 0, left: 0, right: 0 }}
        >
            <View style={{ backgroundColor: 'red', padding: 10, margin: 10}}>
                <Text style={{ fontSize:20, color:'white' }}> {children || title} </Text>
            </View>
        </TouchableOpacity>
    )
}

MyButton.defaultProps = {
    title: 'default',
    onPress: () => alert("default")
}


export default MyButton;