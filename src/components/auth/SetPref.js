



//////////////////////////////////////////////////////////////////////////
///////////////////ANVÄNDS DENNA SIDA ÖVERHUVUDTAGET??////////////////////
/////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react'
// import withAuthorization from 'components/hoc/withAuthorization'
// import { Redirect } from 'react-router-dom'
// import Select from 'react-select'
// import { ingredientOpt } from'./docs/data'


// import { createPref } from 'actions'

// const SetPref = ({auth}) => {

//   const [ redirect, setRedirect ] = useState(false)
//   const [ prefForm, setPrefForm ] = useState({
//     diet: 'vegetarian',
//     intolerance: [],
//     ingredient: []
//   })

//   const handleChange = e => {
//     const { name, value } = e.target
//     setPrefForm({...prefForm, [name]: value})
//   }

//   const handleSubmit = () => {
//     const { user } = auth
//     createPref(prefForm, user.uid)
//       .then(() => setRedirect(true))
//       .catch(() => alert('SOME ERROR!'))
//   }

//   if (redirect) { return <Redirect to="/" />}

//   return (
//     <div className="create-page">
//       <div className="container">
//         <div className="form-container">
//           <h1 className="title">Your Preferences</h1>
//           <form>
//             <div className="field">
//               <label className="label">Diet</label>
//               <div className="control">
//                 <div className="select">
//                   <select name="diet" onChange={handleChange}>
//                     <option value="vegetarian">Vegetarian</option>
//                     <option value="vegan">Vegan</option>
//                     <option value="glutenfree">Gluten Free</option>
//                     <option value="lactoveg">Lacto-Vegetarian</option>
//                     <option value="ovoveg">Ovo-Vegetarian</option>
//                     <option value="pescetarian">Pescetarian</option>
//                     <option value="ketogenic">Ketogenic</option>
//                     <option value="paleo">Paleo</option>
//                     <option value="primal">Primal</option>
//                     <option value="whole30">Whole30</option>

//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Intolerances</label>
//               <div className="control">
//               <div className="select">
//                   <select name="intolerance" onChange={handleChange}>
//                     <option value="dairy">Dairy</option>
//                     <option value="egg">Egg</option>
//                     <option value="gluten">Gluten</option>
//                     <option value="grain">Grain</option>
//                     <option value="peanut">Peanut</option>
//                     <option value="seafood">Seafood</option>
//                     <option value="sesame">Sesame</option>
//                     <option value="shellfish">Shellfish</option>
//                     <option value="soy">Soy</option>
//                     <option value="sulfite">Sulfite</option>
//                     <option value="treenut">Tree Nut</option>
//                     <option value="wheat">Wheat</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Exclude Ingredients</label>
//               <div className="control">
//                 <textarea
//                   onChange={handleChange}
//                   name="ingredient"
//                   className="textarea"
//                   placeholder="Textarea"></textarea>
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
//                 <button className="button is-text">Cancel</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default withAuthorization(SetPref)




// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

// export default function CheckboxesGroup() {
//   const defaultDiet = ["Vegetarian"];
//   const { control, handleSubmit } = useForm({
//     defaultValues: { names: defaultDiet }
//   });

//   const [checkedValues, setCheckedValues] = useState(defaultDiet);

//   function handleSelect(checkedName) {
//     // could do it like this as well:

//     // const names = getValues().names;
//     // const newNames = names?.includes(checkedName)
//     //   ? names?.filter(name => name !== checkedName)
//     //   : [...(names ?? []), checkedName];

//     const newDiet = checkedValues?.includes(checkedName)
//       ? checkedValues?.filter((name) => name !== checkedName)
//       : [...(checkedValues ?? []), checkedName];
//     setCheckedValues(newDiet);

//     return newDiet;
//   }

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       {["Vegetarian", "Vegan", "Gluten Free", "Ketogenic", "Lacto-Vegetarian", "Ovo-Vegetarian", "Pescetarian", "Paleo", "Primal", "Whole30"]
//       .map((name) => (
//         <FormControlLabel
//           control={
//             <Controller
//               name="diet"
//               render={({ onChange: onCheckChange }) => {
//                 return (
//                   <Checkbox
//                     checked={checkedValues.includes(name)}
//                     onChange={() => onCheckChange(handleSelect(name))}
//                   />
//                 );
//               }}
//               control={control}
//             />
//           }
//           key={name}
//           label={name}
//         />
//       ))}
//       <button>Submit</button>
//     </form>
//   );
// }