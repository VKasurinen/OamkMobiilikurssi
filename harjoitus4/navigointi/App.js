import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
import SecondScreen from './screens/SecondScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen
            name="Home"
            component={Homescreen}
            options={{title: "Home",
            headerTitle: "Home",}} 
            ></Stack.Screen>

            <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{
              title: "Second",
              headerTitle: "Second"
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
