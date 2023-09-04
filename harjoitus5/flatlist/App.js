import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { Data } from './Data';
import Row from './components/Row'

export default function App() {

  // function renderItem({item}) {
  //   return (<Text>{item.lastname}</Text>);
  // }

  const renderItem = ({ item }) => (
    <Text key={item.id}>{item.lastname}</Text>
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={Data}
      renderItem={({item}) => (
        <Row person={item}/>
      )}

      ></FlatList>
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
  liststyle: {
    fontSize: 40,
    margin: 10,
  },
});
