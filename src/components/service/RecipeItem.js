// /* eslint jsx-a11y/anchor-is-valid: 0 */

// import React from 'react'
// import { Link } from 'react-router-dom'

// const RecipeItem = ({recipe, children, className, noButton}) => {

//  const shortText = (text, maxLength = 50) => {

//     if (!text) { return ' '}
//     if (text.length <= maxLength ) { return text }

//     return text.substr(0, maxLength) + '...'
//   } 


//    return (
//     <div
//       className="column is-one-third">
//       <div
//         className={`feature-card is-bordered has-text-centered revealOnScroll delay-1 ${className}`}
//         data-animation="fadeInLeft">
//         <div className="card-title">
//            <h4>{recipe.title}</h4>
//         </div>
//         <div className="card-icon">
//            <img src={recipe.image} alt=""/>
//         </div>

//         { children &&
//           <div className="card-text">
//             { children }
//           </div>
//         }
//         { !noButton &&
//           <div className="card-action">
//              <Link
//                 to={`/services/${recipe.id}`}
//                 className="button  accent-btn raised"> Try recipe </Link>
//           </div>
//         }
//       </div>
//     </div>
//   )
// }



//  export default RecipeItem
