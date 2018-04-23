function split(array) {
  //array length/2
  let firstHalf = [];
  let secondHalf = [];
  let middleInteger = Math.ceil(array.length / 2);
  firstHalf = array.slice(0, middleInteger);
  secondHalf = array.slice(middleInteger);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const mergedArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1.shift())
    } else {
      mergedArr.push(arr2.shift())
    }
  }
  return mergedArr.concat(arr1, arr2)
}

function mergeSort(arr) {
  const sortedArr;

  //split
  //base case:if return of the split is length 1
  if(arr.length <= 1){
   return arr;
  }
  //otherwise: recurse - split half1, split half2
  else{
    //split
    const splitArr = split(arr);
    //sort
    let sortedArr1 = mergeSort(splitArr[0]);
    let sortedArr2 = mergeSort(splitArr[1]);
    //merge
    sortedArr = merge(sortedArr1,sortedArr2);   
  }

  return sortedArr;
}

