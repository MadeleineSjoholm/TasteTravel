import db from 'db'

export const fetchPreferenceById = preferenceId => 
  db.collection('preference')
    .doc(preferenceId)
    .get()
    .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))


export const fetchUserPreferences = userId => 
  db.collection('preference')
    .where("user", "==", userId)
    .get()
    .then(snapshot => {
      const preferences = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return preferences
    })

export const fetchPreferences = () => 
  db.collection('preference')
    .get()
    .then(snapshot => {
      const preference = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return preference
    })