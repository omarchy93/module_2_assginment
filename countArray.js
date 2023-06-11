
const myArray = [10,20,30];

  let sum = 0;
  myArray.forEach(value => {
    sum += value;
    console.log(value);
    return sum;
  });

  console.log(`the arrays sum is : ${sum}`);
 
 