import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

const Shadow = () => {
    return (
        <View style={ styles.shadow }>
            <Text>{ Platform.OS }</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        width: 200,
        height: 200,
        ...Platform.select({
        ios: {
            backgroundColor: '#ffffee',
            shadowColor: 'black',
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
        },
        android: {
            backgroundColor: '#ee33ee',
            elevation: 20,
        },
        default: {
            backgroundColor: 'blue',
            shadowColor: 'black',
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,

        }
        })
    }
})

export default Shadow;