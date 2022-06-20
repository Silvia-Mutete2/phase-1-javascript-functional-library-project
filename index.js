function myEach(testArr, alert){
  Object.values(testArr).forEach(test => {
    alert(test)
  })
  return testArr
}


function myMap(testArr, callb) {
  const objValues = Object.values(testArr);
callb = objValues.map(x => x * 3)
return callb
}

 
function myReduce(testArr, callb, acc) {
  if (Array.isArray(testArr) === false) {
      testArr = Object.values(testArr);
    }
    if (acc === undefined) {
      acc = testArr[0];
      testArr = testArr.slice(1);
    }
      for (let i = 0; i < testArr.length; i++) {
        acc = callb(acc, testArr[i], testArr);
      }
      return acc;
  }
  
  
function myFind(testArr, predicate) {
  if (Array.isArray(testArr) === false) {
      testArr = Object.values(testArr);
      }
  
  for (let i = 0; i < testArr.length; i++) {
      if (predicate(testArr[i])) {
        return testArr[i];
      }
    }
  }
  
  
function myFilter(testArr, predicate) {
  if (Array.isArray(testArr) === false) {
      testArr = Object.values(testArr);
      }
    let result = [];
  for (let i = 0; i < testArr.length; i++) {
      if (predicate(testArr[i])) {
        result.push(testArr[i]);
      }
    }
    return result;
  }
  
function mySize(testArr) {
  if (Array.isArray(testArr) === false) {
      testArr = Object.values(testArr);
      }
    let size = 0;
  for (let i of testArr) {
      size++
    }
    return size;
  }
  
function myFirst(array, n) {
  if(n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
function myLast(array, n) {
  if(n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
function myKeys(object) {
  let result = [];
  for (let key in object) {
      result.push(key);
    }
    return result;
  }
  
function myValues(object){
  let result = [];
    for (let key in object) {
      result.push(object[key]);
    }
    return result;
}