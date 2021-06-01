import db from 'db'

export const fetchCuisineById = cuisineId =>
  db.collection('cuisine')
    .doc(cuisineId)
    .get()
    .then(snapshot => ({ id: snapshot.id, ...snapshot.data() }))


export const fetchCuisines = () =>
  db.collection('cuisine')
    .get()
    .then(snapshot => {
      const cuisine = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      return cuisine
    })