// 8. 



function smallestCommons(arr) {
  

  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
 
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let multiple = max; multiple <= upperBound; multiple += max) {
    
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
    
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));