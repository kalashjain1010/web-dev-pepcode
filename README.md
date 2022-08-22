# web-develop


# leaning java script
sheet 1 
`Q1.  Print Fizz Buzz.

ans 1
console.log("fizz buzz");


Q2
Description: Write a program that prints the numbers from
 1 to 20 and for multiples of 
'3' print "Fizz"  
'5' print "Buzz"
'3' and '5' both print "FizzBuzz"
else number itself

Ans2
for(let i =1; i<=20;i++){
    if(i%5==0&&i%3==0){
       console.log("fizzbuzz")
   }
    else if(i%5==0){
        console.log("buzz")
    }
    else if(i%3==0){
      console.log("fizz")
    }
  else{
    console.log(i)
  }
}

Print All Primes Till N

const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

