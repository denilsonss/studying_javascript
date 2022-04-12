/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function juntarArraysOrdenados(arr1, arr2) {
  let ponteiro1 = 0;
  let ponteiro2 = 0;

  const novoArr = [];

  while (arr1[ponteiro1] !== undefined || arr2[ponteiro2] !== undefined) {
    if (arr1[ponteiro1] === undefined) {
      novoArr.push(arr2[ponteiro2]);
      ponteiro2++;
    } else if (arr2[ponteiro2] === undefined) {
      novoArr.push(arr1[ponteiro1]);
      ponteiro1++;
    } else if(arr1[ponteiro1] >= arr2[ponteiro2]){
        novoArr.push(arr2[ponteiro2]);
        ponteiro2++;
    } else {
        novoArr.push(arr1[ponteiro1]);
        ponteiro1++;
    } 
  }
    return novoArr;
}

console.log(juntarArraysOrdenados([1, 2, 4], [1, 3, 4]));
console.log(juntarArraysOrdenados([], [5]));
console.log(juntarArraysOrdenados([1], []));
console.log(juntarArraysOrdenados([1], [0]));


//while
//[0,1,2] => arr[3] (undefined)