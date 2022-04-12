/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number[]}
 */
 function somaItemMaisValor(nums, val) {
  return nums.map(num => num + val);
}

somaItemMaisValor([3, 2, 2, 3], 3);