// This page generates a randomized API-Key. We are aware that it might not be the best solution but have figured that it is a fun way to solve one of our issues: having limited requests per API-Key

function randomizeAPI(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array[0];
}
var APILIST=[
  "f94d33a64b6f4135ab3e6a2b9fc8ce3c ",
  "fd6e9efd3d8b45ff90bee15ea56c6d77",
  "2b27d20d15814f56a742d05fa5d873a8",
  "9c651708cc604ceaa7d0cad063018dd4",
  "df8f6279130e4a768bd08e6a5d7ad77b",
  "81dec389f2504336ba770c381c86dec5",
  "827194b19189427195018b97d09cde94",
  
];
export default randomizeAPI(APILIST); 