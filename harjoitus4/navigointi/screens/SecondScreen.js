import React, { useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { BackHandler } from 'react-native';

const SecondScreen = ({route, navigation}) => {

    useEffect(() => {
        if (route.params?.message) {
            alert(route.params.message)
        }
        BackHandler.addEventListener('hardwareBackPress', close);
        return() => {
            BackHandler.removeEventListener('hardwareBackPress', close);
        }
    }, [])

    function close(){
        navigation.goBack(null);
        return true;
    }


    useLayoutEffect(() => {
      
        navigation.setOptions({
          headerStyle: {
              backgroundColor: '#f0f0f0'
          }
        });
      }, []);


  return (
    <View style={styles.container}>
        <Text>Second screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default SecondScreen