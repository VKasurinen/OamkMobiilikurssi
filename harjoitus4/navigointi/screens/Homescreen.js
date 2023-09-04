import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



const Homescreen = ({ navigation }) => {

    const [message, setMessage] = useState('Testing');

    useLayoutEffect(() => {
      
      navigation.setOptions({
        headerStyle: {
            backgroundColor: '#5e3330'
        },
        headerRight: () => (
            <AntDesign
            style={styles.navButton}
            name="arrowright"
            size={24}
            onPress={() => navigation.navigate('Second', {message: message})}
            />
        )
      });
    }, [message]);


  return (
    <View style={styles.container}>
        <Text>Home screen{message}</Text> 
        <TextInput onChangeText={text => setMessage(text)} value={message} placeholder="Type message here"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    }
})

export default Homescreen

