
function randomize(arr) {
  var current = arr.length, tempValue, random;
  while (0 !== current) {
    random = Math.floor(Math.random() * current);
    current -= 1;
    tempValue = arr[current];
    arr[current] = arr[random];
    arr[random] = tempValue;
  }
  return arr[0];
}
var cuisineList=[
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];
export default randomize(cuisineList); 

