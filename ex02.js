// 2. Сравните два массива и верните новый массив, содержащий любые элементы, найденные только в одном из двух данных массивов, но не в обоих.



function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));