// 9. Паровой каток.



function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
 
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
