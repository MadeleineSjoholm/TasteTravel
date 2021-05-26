
// import React, { useState } from 'react'
// import withAuthorization from 'components/hoc/withAuthorization'
// import { Redirect } from 'react-router-dom'

// import { useHistory } from "react-router-dom";
// import { createService } from 'actions'


// const ServiceCreate = ({auth}) => {

//   const history = useHistory()

//   const [ redirect, setRedirect ] = useState(false)
//   const [ serviceForm, setServiceForm ] = useState({
//     category: 'mathematics',
//     title: '',
//     description: '',
//     image: '',
//     price: null
//   })

//   const handleChange = e => {
//     const { name, value } = e.target
//     setServiceForm({...serviceForm, [name]: value})
//   }

//   const handleSubmit = () => {
//     const { user } = auth
//     createService(serviceForm, user.uid)
//       .then(() => setRedirect(true))
//       .catch(() => alert('SOME ERROR!'))
//   }

//   if (redirect) { return <Redirect to="/" />}


//   return (
//     <div className="create-page">
//       <div className="container">
//         <div className="form-container">
//           <h1 className="title">Create Recipe</h1>
//           <form>
//             <div className="field">
//               <label className="label">Continent</label>
//               <div className="control">
//                 <div className="select">
//                   <select name="category" onChange={handleChange}>
//                     <option value="europe">Europe</option>
//                     <option value="asia">Asia</option>
//                     <option value="africa">Africa</option>
//                     <option value="northamerica">North America</option>
//                     <option value="southamerica">South America</option>
//                     <option value="oceania">Oceania</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Title</label>
//               <div className="control">
//                 <input
//                   onChange={handleChange}
//                   name="title"
//                   className="input"
//                   type="text"
//                   placeholder="Text input" />
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Directions</label>
//               <div className="control">
//                 <textarea
//                   onChange={handleChange}
//                   name="description"
//                   className="textarea"
//                   placeholder="Textarea"></textarea>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Image Url</label>
//               <div className="control">
//                 <input
//                   onChange={handleChange}
//                   name="image"
//                   className="input"
//                   type="text"
//                   placeholder="Text input" />
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Portions</label>
//               <div className="control">
//                 <input
//                   onChange={handleChange}
//                   name="price"
//                   className="input"
//                   type="number"
//                   placeholder="Text input" />
//               </div>
//             </div>
//             <div className="field is-grouped">
//               <div className="control">
//                 <button
//                   onClick={handleSubmit}
//                   type="button"
//                   className="button is-link">Create</button>
//               </div>
//               <div className="control">
//                 <button 
//                 onClick={()=> history.push("/")}
//                 className="button is-secondary" >Cancel</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default withAuthorization(ServiceCreate)
