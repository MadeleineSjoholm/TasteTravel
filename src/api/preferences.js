// import db from 'db'

// export const fetchUserPreferences = userId => 
//   db.collection('preference')
//     .where("user", "==", userId)
//     .get()
//     .then(snapshot => {
//       const preferences = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
//       return preferences
//     })