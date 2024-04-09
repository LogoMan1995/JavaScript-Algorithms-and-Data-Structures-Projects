// 10. Создайте функцию, которая суммирует два аргумента. Если указан только один аргумент, верните функцию, которая ожидает один аргумент и возвращает сумму.



function addTogether() {
    const [first, second] = arguments;
  
    if (typeof (first) === "number") {
      if (typeof (second) === "number") return first + second;
      if (arguments.length === 1) return (second) => addTogether(first, second);
    }
  }

  console.log(addTogether(23.4, 30));