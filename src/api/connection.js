<<<<<<< HEAD
// From Filip Jerga's course: {link} Ta bort potentiellt, använder vi denna?
=======
// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}
>>>>>>> 20edccb254f9502c925d324ede802cdd2f413d5e

import firebase from 'firebase/app'
import 'firebase/database'

export const createFirebaseRef = (collection, id) => firebase.database().ref(`/${collection}/${id}`)

export const isOfflineForDatabase = {
  state: 'offline',
  last_changed: firebase.database.ServerValue.TIMESTAMP
}

export const isOnlineForDatabase = {
  state: 'online',
  last_changed: firebase.database.ServerValue.TIMESTAMP
}

export const isOnlineForFirestore = {
  state: 'online',
  last_changed: firebase.firestore.FieldValue.serverTimestamp()
}

export const onConnectionChanged = callback =>
  firebase
    .database()
    .ref('.info/connected')
    .on('value', snapshot => {
      callback(snapshot.val())
    })


