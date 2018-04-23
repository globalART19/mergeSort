function split(array){
  //array length/2
  let firstHalf = [];
  let secondHalf = [];
  let middleInteger = Math.ceil(array.length/2);
  firstHalf = array.slice(0,middleInteger);
  secondHalf = array.slice(middleInteger);
  return [firstHalf,secondHalf];
}

function merge(){

}

function mergeSort(){
  return undefined;
}
