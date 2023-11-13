// let firstName =  'Wassim' ;
// let age = 21;
// let isStudent = true;


// console.log('Hello '+firstName);
// console.log('You are '+age+' Years old')

// let student = 20;
// student +=1;
// console.log(student);

// -- UserInput
// let username;
// document.getElementById('myButton').onclick = function() {
//     username = document.getElementById('myText').value;
//     console.log('Hello '+username);
// }

// -- Type Conversion
// let age = window.prompt('How old are you ?')
// age= Number(age);
// console.log(typeof age);
// age+=1;
// console.log('Your are '+age+' Years old')

// -- Math
// let x=3.14;
// x = Math.round(x);
// x= Math.pow(x,2);
// console.log(x);
// let y=5;
// let z=8;
// let w=1;
// maximum = Math.max(w,y,z);
// console.log(maximum);

// let a,b,c;
// a= window.prompt('Enter Side A');
// a= Number(a);
// b= window.prompt('Enter Side B');
// b= Number(b);
// c= Math.pow(a,2) + Math.pow(b,2);
// c= Math.sqrt(c);
// console.log('Side C: '+c)

// -- Counter Program
// let count = 0 ;
// document.getElementById('decreaseButton').onclick = function(){
//     count-=1;
//     document.getElementById('countLabel').innerHTML = count;

// }
// document.getElementById('resetButton').onclick = function(){
//     count = 0;
//     document.getElementById('countLabel').innerHTML = count;
    
// }
// document.getElementById('increaseButton').onclick = function(){
    
//     count +=1;
//     document.getElementById('countLabel').innerHTML = count;
// }
// let userName = 'wassim';
// let age = 22 ;

// console.log(`Hello ${userName}
//  You are ${age} years old `)

// const answer = Math.floor(Math.random()*10+1);
// console.log(answer);

// let temp = 32;

// function toCelsius(temp){
//     return (temp-32)*(5/9);

// }

// function toFahrenheit(temp){
//     return temp * 9/5 + 32;
// }

// let fruits = ['apple' , 'orange' , 'banana'];
// fruits.push('lemon');
// console.log(fruits);

// let numbers = [5,10,15,20];
//  for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//  }
// for(let price of numbers) {
//     console.log(price);
// }
// SPREAD OPERATOR
// let numbers = [1,2,3,4,5,6,7,8,9];
// let maximum = Math.max(...numbers);
// console.log(maximum);

// REST PARAMETERS : accept any numbers of arguments

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;

// }


// function sum(x,y,callback){
//     let result = x+y;
//     return result;

// }
// function displayConsole(output){
//     console.log(output);

// }


// FOREACH 

// let students = ['wassim','chaima','laid'];
// function capitalize(element , index , array){
//     array[index] = element[0].toUpperCase() + element.substring(1);

// }

// CALLBACK
// function sum(x,y,callback){
//     let result = x+y;
//     callback(result);
// }

// function display(output){
//     console.log(output);
// }

// sum(4,5,display);


// ANONYMOUS FUNCTION
// const greeting = function(){
//     console.log(hello);
// }

// greeting;

// exo 1 question 2

// const factorial = function(n){
//     if (n==0 || n==1) {
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(5));

// (function(){
//     let x=1 ;
//     let y=1;

//     for ( let i = 2; i<=4; ++i) {
//         let x=0;
//         x=i+x;
//         let y=x;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(x);
//     console.log(y);
//     console.log(i);

// }) ();
// EXERCISE 2
// const sum = (x,y) => {
//     return x+y;
// }
// console.log(sum(2,5));

// const funcXY = (x,y)=>{
//     x+=y;
//     return () => x++;
// }

// const myFunc = funcXY(2,3);
// console.log(myFunc());

// const funcXY = function(x,y){
//     x+=y;
//     return function(){
         //console.log(`Current value of X is ${x}`);
//         return x++;
//     }
// }

// var myFunc = funcXY(2, 3);
// console.log(myFunc());

// function f1(x){
//     let i=10;
//     x(i);
//     x(i+1);
//     x(i+2);
// }
// function f2(i){
//     console.log(i);
// }

// f1(f2);

// let userName = 'wassim';
// let userInbox = 0;

// login();



// function login(){
//     displayUserName();
//     displayUserInbox();


// function displayUserName(){
//     console.log(`Welcome ${userName}`);

// }
// function displayUserInbox(){
//     console.log(`You have ${userInbox} new messages`);
    
// }
// }

// IIFE 
// (function (name){
//     console.log(name);
// }) ('Wassim');

// (function (i){
//     sum(callback , i);
// })(1);

// function sum(x,j){
//     let T=[];
//     for(let i=1 ; i<4 ; i++){
//         T[i] = x(i+j);
//         console.log(T[i]);
//     }
// }
// function callback(i){
//     return i*i;
// }


// TP 3
let num = [11, 22, 33, 46, 75, 86, 97, 98];
//num.shift(); // remove first element
//num.pop();   remove the last element
//num.unshift(18); add in the front of array
//num.push(75); add in the end of array

// const evenNumber = num.filter( num => num % 2 == 0);
// console.log(evenNumber);

// const newArray = num.map(element => element + 4 );
// console.log(newArray);

// const sum = num.reduce((accumulator,current)=>
// accumulator+current,0);

// console.log(sum);
// const average = sum/num.length;
// console.log(average);

// const divByThree = num.filter(
//     number => number % 3 == 0 ).map(number => number ** 2);
// console.log(divByThree);


// // EXERCICE 2

// const weeklyForecast = [
//     { day: 'monday', hi: 24, lo: 7 },
//     { day: 'tuesday', hi: 23, lo: 6 },
//     { day: 'wednesday', hi: 28, lo: 14 },
//     { day: 'thursday', hi: 29, lo: 16 },
//     { day: 'friday', hi: 22, lo: 11 },
//     { day: 'saturday', hi: 21, lo: 8 },
//     { day: 'sunday', hi: 26, lo: 14 },
// ];

// weeklyForecast.forEach(day=>{
//     const {day : weekday , hi , lo}=day;
//     console.log(`On ${weekday}, the hight will be ${hi} degrees and the low will be ${lo} degrees`);
// });

// weeklyForecast.forEach(function(day) {
//     const { day: weekday, hi, lo } = day;
//     console.log(`On ${weekday}, the high will be ${hi} degrees and the low will be ${lo} degrees.`);
//   });

// const highTemp = weeklyForecast.filter(day=>day.hi>23).map(day => day.day);
// console.log(highTemp);

// const highTemperatureDays = weeklyForecast.filter(function(day) {
//     return day.hi > 23;
//   }).map(function(day) {
//     return day.day;
//   });
//   console.log(highTemperatureDays);

// EXERCICE 3

// function specialMultiply(num){
//     return function(another){
//         return num*another;
//     }
// }


// TP 04

// EXERCICE 1
// WITH querySelector
const fruitList = ['apple' , 'banana' , 'tomato'];
const ulElement = document.querySelector('ul');
//document.getElementsByTagName('ul')
fruitList.forEach(fruit => {
    const liElement = document.createElement('li');
    liElement.textContent = fruit;
    ulElement.appendChild(liElement);
});

// const displayElement = document.createElement('p');
//     displayElement.textContent = 'New list:';
//     document.body.appendChild(displayElement);
//     document.body.appendChild(ulElement);

// 2nd
const tomatoIndex = fruitList.indexOf('tomato');
fruitList.splice(tomatoIndex, 0, 'avocado');
ulElement.innerHTML = '';
fruitList.forEach(fruit => {
    const liElement = document.createElement('li');
    liElement.textContent = fruit;
    ulElement.appendChild(liElement);
  });

//   Get the first <p> element in with class="example":


// document.querySelector("p.example");
//3rd

const ulElement = document.querySelector('ul');

fruitList.forEach((fruit, index) => {
  const liElement = document.createElement('li');
  liElement.textContent = fruit;

  // Add the color attribute to the first list item
  if (index === 0) {
    liElement.setAttribute('color', 'red');
  }

  ulElement.appendChild(liElement);
});

//4th
const randomPrice = Math.floor(Math.random() * 301) + 100;

  // Add the random price as an attribute to the list item
  liElement.setAttribute('price', randomPrice);

  ulElement.appendChild(liElement);

  //5th
  console.log(`Name: ${fruit}, Price: ${randomPrice} DA`);
  //6th
  liElement.style.color = 'blue';
    liElement.style.fontSize = '20px';
    //7th
    // Create an h1 element
const h1Element = document.createElement('h1');
h1Element.innerHTML = 'List of fruits:';

// Insert the h1 element at the top of the page
document.body.insertBefore(h1Element, document.body.firstChild);


// EXERCICE 2

