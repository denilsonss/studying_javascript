/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removerElementoCriandoArrayNovo(nums, val) {
  const numsNovo = [];

  for (const numero of nums) {
    if (numero !== val) {
      numsNovo.push(numero);
    }
  }

  return numsNovo;

  //return nums.filter(num => num !== val);
}

removerElemento([3, 2, 2, 3], 3);

//[]


removerElemento([0, 1, 2, 2, 3, 0, 4, 2], 2);
//[0,1,3,0,4, , , ]

//Array
// .filter => elimina tudo que nao for true (Cria um novo array);
// .map => altera o elemento atual (Cria um novo array);

