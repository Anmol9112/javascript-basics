console.log('hello');
//alert('hello this is anmol');

//Variables

var b='smoothie';
console.log(b);

var somenumber='45';
//console.log(somenumber);

//var age= prompt('What is your age?');

// Manipulate DOM with javascript 
/* ... Its a fancy way of saying
change HTML code to javascript*/

//document.getElementById('someText').innerHTML=age;

//Numbers in Javascript

var num1=10;

//Increment num1 by 1

num1++;

//Decrement num1 by 1

num1--;
console.log(num1);

//Divide,  multiply *, remainder %

console.log(num1 % 5);

//Increment/decrement by any number you want

num1+=10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

//Create
function fun(){
   console.log('this is a function');
}

//Call
fun();

/* Let's create a function that take in a name
and says hello followed by your name

For example

Name: "Anmol"
Return: "Hello Anmol"
*/

function greeting(yourName) {
    var result='Hello ' + yourName;  // String concatenation
    console.log(result);
}

//var name = prompt('What is your name?');
//greeting(name);

//How do arguments work in functions?
//How do we add two numbers together in function?


 function  sumNumbers(num1, num2){
     var result= num1 + num2;
     console.log(result)
 }
 sumNumbers(10, 10);

// While loops

 var num=0;
 while(num<100){
     num+=1;
     console.log(num);
 }
 

 // For loops

 for(let num=0; num<=100; num++){
     console.log(num);
 }

 //Data types

 let yourAge=18; //number
 let yourName='Bob'//string
 let name={first: 'Jane', last: 'Doe'};
 let truth = false; //boolean;
 let groceries= ['apple', 'banana', 'oranges']; // Array
 let random; //undefined
 let nothing= null; //value null

 // Strings in javascript

 let fruit='banana, apple, orange, blackberry';
 let moreFruits='banana\napple';      // new line

 console.log(fruit.length);
 console.log(fruit.indexOf('nan'));
 console.log(fruit.slice(2,4));
 console.log(fruit.replace('ban','123'));
 console.log(fruit.toUpperCase());
 console.log(fruit.toLowerCase());
 console.log(fruit.charAt(2));
 console.log(fruit[2]);
 console.log(fruit.split(',')); //split by comma
 console.log(fruit.split('')); // split by characters

 // Array

 let fruits= ['banana', 'apple', 'orange', 'pineapples'];
 fruits=new Array('banana', 'apple', 'orange', 'pineapples');
 console.log(fruits[2]);       // access value at 2nd index

 fruits[0]='pear';
 console.log(fruits);

 for(let i=0;i<fruits.length;i++){
     console.log(fruits[i]);
 }

 // array common methods

 console.log('to string', fruits.toString());
 console.log(fruits.join(' * '));
 console.log(fruits.pop(), fruits);
 console.log(fruits.push('blackberry'));
 console.log(fruits[4]);
 fruits[fruits.length]='new fruit';      // same as push
 console.log(fruits);
 fruits.shift();  // remove first element from an array
 console.log(fruits)
 fruits.unshift('kiwi');  // add first element to the array
 console.log(fruits)

 let vegetables=['asparagus', 'tomato', 'brocolli'];
 let allGroceries= fruits.concat(vegetables);
 console.log(allGroceries);
 console.log(allGroceries.slice(1,4));
 console.log(allGroceries.reverse());
 console.log(allGroceries.sort());

 let someNumbers= [5,10,2,25,3,255,1,2,5,334,321,2];
 console.log(someNumbers.sort(function(a,b) {return a-b}));   // sorted in ascending order
 console.log(someNumbers.sort(function(a,b) {return b-a}));   // sorted in descending order

 let emptyArray = new Array();
 for(let num=0;num<=10;num++){
     emptyArray.push(num);
 }
 console.log(emptyArray);

 // objects in Javascript
 // dictionaries in python

 let student={first: 'Anmol',
  last: 'Babbar',
  age:'20',
  height:'170',
  studentInfo: function(){
      return this.first+ '\n' + this.last + '\n' + this.age;
  }
};
//  console.log(student.first);
//  console.log(student.last);
//  student.first='not anmol'     // change value
//  console.log(student.first);
 student.age++;
 console.log(student.age);
 console.log(student.studentInfo());

 //Conditionals, Control flows (if else)
 // 18-35 is my target demographic
// && AND
// || OR
var age= 45;
if((age>=18) && (age<=35)){
    status='target demo';
    console.log(status);
}else {
    status='not my audience';
    console.log(status);
}

//Switch statements
//differentiate between weekday vs. weekend
// day0 --> Sunday --> weekend
// day1 --> Monday --> weekday
// day2 --> Tuesday
// day3 --> wednesday
// day4 --> Thursday --> weekday
// day5 --> Friday --> weekend
// day6 --> Saturday --> weekend
switch(2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekday';   
}
console.log(text);;



