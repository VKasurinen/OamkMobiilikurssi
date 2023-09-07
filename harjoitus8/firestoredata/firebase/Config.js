import firestore from "@react-native-firebase/firestore";

export const sendMessage = async (messageText) => {
  try {
    await firestore().collection("message").add({
      text: messageText,
      created: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error sending message: ', error);
  }
};

export const getUser = async (userId) => {
  try {
    const userDocument = await firestore().collection("users").doc(userId).get();
    return userDocument.data();
  } catch (error) {
    console.error('Error fetching user: ', error);
    return null;
  }
};
