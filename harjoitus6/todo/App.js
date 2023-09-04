import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todos';

export default function App() {

  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState(
    [{key: "foo", descripiton: "testing"}]
  )

  const storeData = async(value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async() => {
    try {
      return AsyncStorage.getItem(STORAGE_KEY)
      .then(req => JSON.parse(req))
      .then(JSON => {
        if (JSON === null){
          JSON = []
        }
        setTodos(JSON)
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  
  
  const addTodo = () => {
    const newKey = String(todos.length)
    const object = {key: newKey, descripiton: newTodo}
    const newTodos = [...todos, object]
    setTodos(newTodos)
    setNewTodo('')
    storeData(newTodos);
  }

  return (
    <SafeAreaView>
      <Text style={styles.heading}>TODOS</Text>
      <TextInput style={styles.input}
      placeholder="Enter new todo"
      value={newTodo}
      onChangeText={text => setNewTodo(text)}
      returnKeyType='done'
      onSubmitEditing={() => addTodo()}

      />
      <FlatList
      style={styles.list}
      data={todos}
      extraData={todos}
      renderItem={({item}) =>
      <Text>{item.descripiton}</Text>}>

      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 8,

  },
  input: {
    backgroundColor: "#bcc2cc",
    borderColor: "#4287f5",
    height: 40,
    margin: 8,
  },
  list: {
    margin: 8
  },
  row: {
    height: 30,
  }
});
