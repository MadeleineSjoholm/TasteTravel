// import React from 'react'
// import { Link } from 'react-router-dom'
// import withAuthorization from 'components/hoc/withAuthorization'
// import diet from 'docs/diet'
// import db from 'db'

// const Italy = () => {

//   const italyRef = db.collection("profile").doc('title');
//   const doc = italyRef.get();
//   if (!doc.exists) {
//     console.log('No such document!');
//   } else {
//     console.log('Document data:', doc.data());
//   }

//   const labels = diet.Labels
//   return (
//     <div className="create-page">
//       <section className="section section-feature-grey is-medium">

//         <div className="container">
//           <div className="content-wrapper has-text-centered">
//             <h1 className="title is-1">  {`${doc.Title}`}</h1>
//             <figure className="countryPic is-medium">
//               <img src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/destinations/italy/italy-amalfi-coast.jpg?$750x667$" alt="Italian town by sea" />
//             </figure>
//             <h2 className="subtitle is-5 is-2 ">
//                 {`${Italy.Title}`}
//             </h2>
//             <h2 className="subtitle is-5 is-2 ">{labels.italy2}</h2>
//             <h2 className="subtitle is-5 is-2 ">{labels.italy3}</h2>

//             <Link
//               to="/Recipe">
//               <button className="countryButton">
//                   Find Recipes
//               </button>
//             </Link>

//           </div>

//           <div className="divider is-centered"></div>
//           <div className="content-wrapper">
//             <div className="columns is-multiline"> </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default withAuthorization(Italy)
