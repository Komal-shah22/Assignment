 //               Question : 1
//console.log("komal shah");
 //                 Question : 2
//let name = "Eric";
//let msg = "Hello";
//console.log(`${msg} ${name},would you like to python today?`);

  //             Question : 3
//let person = "komal";
//console.log(person.toUpperCase());
//console.log(person.toLowerCase());
//console.log(person.replace("k","K"));

//               Question : 4
//console.log('Albert Einstein once said, "A person who never made a mistak never tried anything new "');

//               Question : 5
//let famous_Person = "Albert Einstein";
//let message = famous_Person +'"A person who never made a mistake never tried anything new " ';
//console.log(`${famous_Person} once said, ${message}`);

//                 Question : 6
//let personName = "\t\n Eric Matthes \t\n";
//console.log("unmodified:\n\tEric Matthes \nUsing 1strip():\n\tEric Matthes\nusing rstrip():\n\tEric Matthes\nUsing strip():");

//let name ="\t\n komal shah \n\t";
//console.log("Original:",name.trim());
//console.log("strippet:",name.trim());

//                Question : 7,8

//console.log("5 + 3 =",5+3);
//console.log("11 - 3 =",11-3);
//console.log("4 * 2 =",4*2);
//console.log("64 / 8 =",64/8);


//                  Question : 9
//let favoriteName = 2;
//console.log(`My favorit Number is ${favoriteName}`); 

//                  Question :10
//name :(Komal Shah)
//date :(Friday,16 Feburary,2024)
//let favoriteName = 2;
//reveling my favorit number ina a message formate
//console.log(`My favorit Number is ${favoriteName}`);

//                  Question : 11
//let name = ["Toba","Dua","Fatima","Rubab","Maryem"];
//console.log(name); 

//                 Question : 12
//let name = ["komal","Rimsha","Noor","Alishba"];
//let msg = "is a good girl";
//for (let val of name) {
// console.log(val+ " " +msg);

//             Question : 13
//let transporation = ["car","motorcycle","bycycle","carolla"];
//transporation.map((item)=>
//console.log(`I would like to on a ${item}`));

//              Question : 14
//let guestArr = ["Ali","Hamza","Daniyal"];
//guestArr.map((item)=>
//(console.log(`Dear ${item},you ara a invited for a dinner`)));

//              Question : 15
//let guest = ["komal","Maryem","Rimsha"];
//let val = guest.splice(0,1,"Ajwa");
//guest.map((item)=>
//console.log(`Dear ${item},you are a invited for a dinner`));

//               Question : 16
//let guestArr = ["Ajwa","Maryem","Rimsha"];
//let val = guestArr.splice(3,"Ajwa","Shahrukh","shahzaib");
//guestArr.map((item)=>
//console.log(`Dear ${item},I found a bigger dinner table so I am invited more people.`)); 
//task 2,
//let beganArr = guestArr.unshift("Noor");
//console.log(guestArr);
//task 3,
//let middleArr = guestArr.splice(3,0,"Rubab");
//console.log(guestArr);
//task 4,
//let endArr = guestArr.push("Ahad");
//console.log(guestArr);
//task 5,
//guestArr.map((item)=>
//console.log(`Dear ${item} you are invited in the more people list on dinner`));

//               Question : 17
//let guest = ["Bilal","Noor","shanzay","Ajwa"];
//console.log(`Due to limited space,only tow people can be invited for dinner.`);
//task 2,
//let val = guest.splice(0,2);
//console.log(guest);
//task 3,
//console.log(`${guest} sorry,you can't invite them to dinner.`);
//task 4,
//guest.forEach((guest)=>
//console.log(`Dear ${guest} you'r still invite to dinner.`));
//let remove = guest.splice(0,2);
//console.log(guest);

//               Question : 18
//let places = ["Pakistan","India","America","USA","Dubai"];
//console.log("original order =" ,places);
//task 2,
//let alphabet = places.sort();
//console.log("alphabetic order =",places);
//task 3,
//console.log("original Arr after sorting = ",places);
//task 4,
//console.log("Reverse alphabatical order = ",places.sort().reverse());
//task 5,
//console.log("original order after reverse sorting = ",places);
//task 6,
//console.log("reverse alphabetic order=",places.reverse());
//task 7
//console.log("original order in again=",places.reverse());
//task 8,9
//console.log("sorted in alphabetic order=",places.sort());
//task 10
//places.sort((a,b)=>b.localeCompare(a));
//console.log("sorted in reverse alphabetic order=",places);

//              Question :19
//let invitation = ["Ajwa","shanzay"];
//let count_invitation =invitation.length;
//console.log(`${count_invitation} people will come to the dinner`);

//               Question :20
//let cities = ["Lahore","Karachi","peshawar","islamabad","panjab"];
//console.log("list of cities:",cities);

//               Question :21
//let student ={
//   name :"komal shah",
 //  cgp :4.16,
 //  age:19,
 //  is_pass :true,
//};
//console.log(student);

//               Question :22
//let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","saturday","sunday"];
//console.log(days{6});
//console.log(days[6]);

//               Queztion :23
          //false conditional operator
//let a = 5;
//let b = 2;
//console.log("5 == 2",a == b);
//console.log("5 < 2",a < b);
//console.log("5 <= 2",a <= b);
//console.log("5 === 2",a === b);
//console.log("5 == 2",a == b);
         //true conditional operator
//let a = 7;
//let b = 3;
//console.log("7 !== 3",7 !== 3);
//console.log("7 != 3",7 != 3);
//console.log("7 > 3",7 > 3);
//console.log("7 >= 3",7 >= 3);
//console.log("7 != 3",7 != 3);

//               Question :24
//let condition_1 = 20;
//let condition_2 = 10;
//console.log(condition_1 == condition_2);
//console.log(condition_1 != condition_2);
//task 1
//let cond_1 = "Komal";
//let cond_2 = "komal shah";
//if(cond_1 == cond_2) {
 //  console.log("cond are equal");
//}else{
//   console.log("cond are not equal");
//}
//if(cond_1 != cond_2) {
//   console.log("cond are equal");
//}
//task 2
//let age = 18;
//if(age ==18) {
//    console.log("you can vote");
//}else{
//    console.log("you can't vote");
//}
//if(age ==15) {
//    console.log("you can vote");
//}else{
//    console.log("you can't vote");
//}
//let score = prompt("enter your score");
//if(score >= 90 && score <= 100) {
//    "grade A";
//}else if(score >= 70 && score <= 89){
 //   "grade B";
//}else if(score >= 60 && score <= 69){
 //   "grade C";
//}else if(score >= 50 && score <= 59){
//    "grade D";
//}else{
//    console.log("failed");
//}
//let cities = ["karachi","lahore","islamabad"];
//if(cities.includes("karachi")) {
 //  console.log("karachi is in cities array");
//}
//if(cities.includes("peshawar")) {
 //   console.log("peshawar is in cities array");
//}

//               Question : 25
//let alien_colour = "green";
//if(alien_colour == "green") {
//    console.log("you earn 5 points");
//}
//let alien_colour = "red";
//if(alien_colour == "green") {
//    console.log("no output");
//}

//             Question :26
//let alien_colour = "green";
//if(alien_colour == "green") {
 //   console.log("player just earn 5 points for shooting the alien");
//}else{
//   console.log("player just earn 10 points");
//}
//let alien_colour = "red";
//if(alien_colour == "green") {
//    console.log("player just earn 5 points for shooting the alien");
//}else{
 //   console.log("player just earn 10 points");
//}

//             Question : 27
//let alien_colour =prompt("entered colour");
//if(alien_colour == "green") {
//    console.log("5 points");
//}else if(alien_colour =="red") {
 //   console.log("10 points");
//}else if(alien_colour == "yellow"){
 //   console.log("15 points");
//}else{
 //  console.log("dont match this alien colour");
//}

//              Question :28
//let age = prompt("enter your age:");
//if(age < 2) {
//    console.log("baby");
//}else if(age > 2 && age < 4) {
//   console.log("toldder");
//}else if(age > 4 && age < 13) {
//   console.log("kid");
//}else if(age > 13 && age < 20) {
 //   console.log("teenager");
//}else if(age > 20 && age < 65) {
 //   console.log("adult");
//}else{
//    console.log("you are older");
//}

//              Question : 29
//let fruit =prompt(["Apple","Mango","Litchi"]);
//if(fruit.includes("Apple")) {
 //   console.log("Apple");
//}else if(fruit.includes("Mango")) {
 //  console.log("Mango");
//}else if(fruit.includes("Litchi")) {
 //  console.log("Litchi");
//}else{
 //   console.log("you really like banana");
//}

//               Question : 30
//let userName = ["admin","Imran","kamram","usama","uzaifa"];
//for(let i in userName){
 //   if(userName[i]=== "admin") {
//console.log(`Hello admin,would you like to see a status report?`);
//}else{
//    console.log(`Hello ${userName[i]},thank you for logging in again.`);
 //  }
//}

//              Question : 31
//let userName = ["admin","Imran","kamran","usama","uzaifa"];
//if(userName === 0) {
 //  console.log("we need to find some user!");
 //}else if(userName.splice(0,0,5)){
 //   console.log("we need to find some user!");
//}else{
//    console.log(userName);
//}

//           Question : 32
//let current_user = ["Admin","Imran","Kamran","Usama","Uzaifa"];
//let new_user =  ["admin","imran","kamran","usama","uzaifa"];

//let lcCurrent_user = current_user.map(user=> user.toLowerCase());
//for(let i of new_user){
 // lcCurrent_user = new_user
//let lcNew_user = new_user;
 // if(lcCurrent_user.includes(lcNew_user)) {
 //   console.log(`userName "${new_user}"is already taken. please enter a new username`);
// }else{
 //   console.log(`userName ${new_user} is available:`);
//}
//}

//              Question :33
//let num = [1,2,3,4,5,6,7,8,9];
//let oridinal;
//for(let i of num){
  //  if(num === 1) {
 //      ordinal = "st";
// }else if(num === 2){
//        ordinal = "nd";
// }else if(num === 3){
 //       oridinal = "rd"
// }else{
 //       oridinal = "th"
// }
//}
//console.log(`${num}${oridinal}`);

//              Question : 34
//let pizza = ["fajitta","pepperoni","BBQ pizza"];
//for(let i = 0;i < pizza.length;i++){
//    console.log(`My favrouit pizza are: ${pizza[i]}`);
//}
//for(let i = 0;i < pizza.length;i++){
 //   console.log(`\nI like this pizza:${pizza[i]}`);
//}
//console.log(`I really love pizza!`);

//               Question :35
 //let  animal = ["cat","dog","goat"];
 //  console.log(`list of animal:`);
//for(let i = 0;i < animal.length;i++){
 //   console.log(`${animal[i]}`);
//}
//console.log(`statement about each animal:`);
//for(let val of animal){
 //   if(animal === "cat") {
 //       console.log(`${animal} is a great pet`);
 //   }else if(animal === "dog"){
//        console.log(`${animal} would be a good companion at home.`);
//    }else if(animal === "goat"){
//        console.log(`${animal} is an adorable pet that also give us milk`);
//    }
//}
//console.log(`what these animal have in common:\n\n Any of these animal could be a great pet`);  

//            Question : 36
// const shirt = (size,message)=>
//console.log(`size:${size}\nmessage:'${message}'`);
//shirt("medium","this size is medium");
//shirt("Large","this size is large"); 

//              Question :37
 //const shirt = (size,message)=>
//console.log(`size:${size}\nmessage:'${message}'`);
//shirt("medium","this size is medium");
//shirt("Large","this size is large");
//shirt("small","this size is small"); 

//           Question : 38
//function cities(citiy,country = "unknow country") {
//    console.log(`${citiy} is in ${country}`);
//}
//cities("karachi","pakistan");
//cities("New york");
//cities("mumbai","india"); 

//           Queztion : 39
//function country(citiy,country)
//{
 //   return `${citiy} ,${country}`;
//}
//console.log(country("Islamabad","Pakistan"));
//console.log(country("New york","America"));
//console.log(country("punne","India"));

//              Question 41
//let magicianName = ["criss angle","davied blaine","derren brown","harry houdini"];
//function showe_Magicians(magician) {
 //   for(let magician of magicians){
 //       console.log(magician);
 //   }
//}
//showe_magicians = (magicianName);

//             Question : 42
 // const magicianNames =["criss angle","davied blaine","derren brown","harry houdini"];
//console.log(magicianNames);
//for(let i = 0;i < magicianNames.length;i++){
 //   console.log(`pharas great ${magicianNames[i]} `);
//} 

//              Question : 43
//   let magicianNames =["criss angle","davied blaine","derren brown","harry houdini"];
// function showemagician(magicians) {
 //    for(let magician of magicians){
 //        console.log(magician);
 //    }
// }
// function make_great(magicians) {
 //    const greatMagicians = //magicians.map(magician=>`the great ${magician}`);
 //    return greatMagicians;
// }
 //const greatMagiciansNames =make_great(magicianNames);
// console.log("original magician:");
// showemagician(magicianNames); 
 
//               Question : 44
//function makeSandwich(items){
//    console.log("sandwich summery");
//}
//if(makeSandwich.length === 0){
//    console.log("you orderd in empty sandwich ,please add some item");
//}else{
//   makeSandwich.forEach((items)=>
//      console.log("${i + 1}.${items}"));
//}
//console.log("\n");
//makeSandwich("turkey","cucumber","tomato","mayonnaise");
//makeSandwich("hen","cheese");
//makeSandwich("penut butter","jelly","banana","honey"); 

//            Quesyion : 45
//const creatcar = {
 //   manufactured : "turkey",
  //  model : "corolla",
   // colour : "red",
//};
//console.log(creatcar); 
