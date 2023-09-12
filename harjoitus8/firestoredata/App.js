import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { convertFirebaseTimeStampToJS } from './helpers/Functions';
//import { sendMessage } from './config'; 
import { sendMessage, getUser } from './firebase/Config';
import { collection, onSnapshot, query } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
//import { firestore } from '@firebase/firestore'; 
import firestore from '@react-native-firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAp8YOFScVew0sSbvruA_tQ-yx_rj5pns8",
  authDomain: "firestoredata-eb1ae.firebaseapp.com",
  projectId: "firestoredata-eb1ae",
  storageBucket: "firestoredata-eb1ae.appspot.com",
  messagingSenderId: "130147936769",
  appId: "1:130147936769:web:880bc0411bdd9ef907ae00",
  measurementId: "G-C2F84SMM71"
};
const app = initializeApp(firebaseConfig);
const MESSAGES = 'message';


export default function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  useEffect(() => {
    const q = query(collection(firestore(app), MESSAGES)); 

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempMessages = [];

      querySnapshot.forEach((doc) => {
        const messageObject = {
          id: doc.id,
          text: doc.data().text,
          created: convertFirebaseTimeStampToJS(doc.data().created),
        };
        tempMessages.push(messageObject);
      });

      setMessages(tempMessages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {messages.map((message) => (
          <View style={styles.message} key={message.id}>
            <Text style={styles.messageInfo}>{message.created}</Text>
            <Text>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <TextInput
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </SafeAreaView>
  );
}



// export default function App() {

//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

  


//   useEffect(() => {
//     const q = query(collection(firestore, MESSAGES))

//     const unsubrcribe = onSnapshot(q, (querySnapshot) => {
//       const tempMessages = []

//       querySnapshot.forEach((doc) => {
//         const messageObject = {
//           id: doc.id,
//           text: doc.data().text,
//           created: convertFirebaseTimeStampToJS(doc.data().created)
          
//         }
//         tempMessages.push(messageObject)
//       })
//       //setMessages(tempMessages)
//     })

//     return () => {
//       unsubrcribe()
//     }
//   }, [])

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         {
//           messages.map((message) => (
//             <View style={styles.message} key={message.id}>
//               <Text style={styles.messageInfo}>{message.text}</Text>
//               <Text>{message.text}</Text>
//             </View>
//           )) 
//         }
//       </ScrollView>
//     </SafeAreaView>
//   )
    
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },

  message: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  messageInfo: {
    fontSize: 12
  }
});
