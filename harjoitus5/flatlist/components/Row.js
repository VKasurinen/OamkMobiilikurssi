import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Row = ({person}) => {
  return (
    <Text style={styles.liststyle}>{person.lastname}</Text>
  )
}


const styles = StyleSheet.create({
    liststyle: {
      fontSize: 40,
      margin: 10,
    },
  });

export default Row