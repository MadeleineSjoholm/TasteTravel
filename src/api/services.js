
import db from 'db'

export const fetchServiceById = serviceId => 
  db.collection('services')
    .doc(serviceId)
    .get()
    .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))


export const fetchServices = () => 
  db.collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return services
    })

export const fetchUserServices = userId => 
  db.collection('services')
    .where("user", "==", userId)
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return services
    })

export const createService = newService => {
  return db
    .collection('services')
    .add(newService)
    .then(docRef => docRef.id)
}

export const createPreference = newPreference => {
  return db
    .collection('preference')
    .add(newPreference)
    .then(docRef => docRef.id)
}

export const createCountry = newCountry => {
  return db
    .collection('country')
    .add(newCountry)
    .then(docRef => docRef.id)
}