// 1. Мы передадим вам массив из двух чисел. Верните сумму этих двух чисел плюс сумму всех чисел между ними.



function sumAll(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let sum = 0;
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumAll([1, 4]));