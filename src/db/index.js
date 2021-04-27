
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase
  .initializeApp(
    {
      apiKey: "AIzaSyD-P4BCjKFFC_nkMpWLMDTIfOFqV5FYzQw",
      authDomain: "tastetravel-39c9d.firebaseapp.com",
      projectId: "tastetravel-39c9d",
      storageBucket: "tastetravel-39c9d.appspot.com",
      messagingSenderId: "114702386767",
      appId: "1:114702386767:web:7fd1786198518aa69c0c3a",
      measurementId: "G-59BQ49Q90J"
    }
  )
  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }