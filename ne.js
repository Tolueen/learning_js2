// manupulating innerHTML
document.getElementById("spara").innerHTML = "Welcome to Tioluwalope page";

//using the document.write()
document.write(23454 + 89766877567676778);

//usind wi8ndows.alert
// window.alert("WElcome to my website");

// for debugging
console.log(34 + 342);

// for printing window
// use the window.print()

// declaring variables
let a, b, c, d;
a = 234;
b = 332;
c = 9504;
d = a + b + c;
document.getElementById("apara").innerHTML = "This is the reselt here :" + d;

//writing code in blocks within a {}
function myFunction() {
  document.getElementById("shot1").innerHTML =
    "You will be learning web 3 here";
  document.getElementById("shot2").innerHTML =
    "You will be learning blockchain here";
  document.getElementById("shot3").innerHTML =
    "You will be learning a lot here";
}

// var declares a variable
// let declares a block of variables
// const declares a block constant

// if an integer is in quptes, the other interger will be treated as strings

// the elements of a constant can not be changed
// elements of a const array can be changed
// elements of a const array cannot be reassigned

// an object
const pelumi = { age: 12, class: "100Lvl", favorite_food: "beans" }; // this is an object

// you can change the prop0erty of an object
pelumi.favorite_food = "amala";

//you can add a property to an Object
pelumi.team = "chelsea";

//displaying the property
//document.getElementById("myObject").innerHTML = "Pelumi loves " + pelumi.team + " and " + pelumi.favorite_food

// note; you cannot reassign a object and an array

// the addition asignment operator += (it adds a value to the variable) 	x += y	x = x + y
// ===	equal value and equal type
// X++ adds 1 to the variable (increment operator)
// x-- substracts 1 fromt the variable x (decrement operator)
// x** exponential operator X**y is the same as mathpower(x,y)

let r = "A great year";
r += " awaits us in 2024."; // using the += operator sign to concatenate

document.getElementById("myObject").innerHTML = r;

// Functions
function newFunction(a, b) {
  return a ** b;
}

let result = newFunction(20, 5);
document.getElementById("testfunction").innerHTML =
  "The final result is " + result;

// a funtion --- convert from kg to gram
function togram(kg) {
  return kg / 1000;
}
let gram_value = togram(35); // excluding the funtion parameter will only return the funtion and not the value
document.getElementById("gram").innerHTML = gram_value + " kg";

// a local  one captured within the function
// the below statement will generate an "undefined value" for the kmValue
// document.getElementById("g_variable").innerHTML = typeof kmValue + " " + kmValue  +  " for a global variable";

function to_km() {
  let kmValue = 200; // this is a local variable
  document.getElementById("l_variable").innerHTML =
    typeof kmValue + " " + kmValue + " for the local variable";
}
to_km();

// to create an object    // define an object with const (since an object cannot be reassigned but its elemet cn be iterated)
const tolu = {
  school: "univeersity of Ibadan",
  age: "12",
  favorite_color: "beans",
}; // this is an object
document.getElementById("myobject").innerHTML =
  "Tolu's school is " + tolu.school;

// using the "this" keyword  //kind of using it to concatenate properties and call the object
const tolueen = {
  age: "11",
  firstname: "Tolulope",
  lastname: "Adeotan",
  school: "Olabisi Onabanjo University",
  country: "Nigeria",
  fullname: function () {
    return this.firstname + this.lastname;
  },
};
document.getElementById("thistest").innerHTML =
  "The owner of this account is " + tolueen.fullname();

//javascript events
//Event	Description
//onchange	An HTML element has been changed
//onclick	The user clicks an HTML element
//onmouseover	The user moves the mouse over an HTML element
//onmouseout	The user moves the mouse away from an HTML element
//onkeydown	The user pushes a keyboard key
//onload	The browser has finished loading the page

function change_mytext() {
  //writing a function to change display text after clicking button
  let fav_text = document.getElementById("myevent").innerHTML;
  document.getElementById("myevent").innerHTML = "Today is " + Date();
}

function replacetext() {
  //writing a function for an hover effect on a text
  let mybutton = document.getElementById("hovertext").innerHTML;
  document.getElementById("hovertext").innerHTML = mybutton.replace(
    "Move you mouse over me and see magic",
    "Congrats! You successfullt hovered over me"
  );
}

// y is an object
//let y = new String("John");  // y is an object

//string methods
//using slice()
let tolulope_favorite = "beans, football, gaming, coding";
let string_test = tolulope_favorite.slice(7, 15); //this probides characters between 7 and 15 excluding 15
document.getElementById("stringme").innerHTML = string_test;

//.substring and slice does the same thing
let tolulope_fav = "beanscake, footballer, gaming, coding";
let string_test2 = tolulope_fav.slice(7); //this probides characters between 7 and 15 excluding 15
document.getElementById("stringme2").innerHTML = string_test2;

//using the replace method on sttings (refer to line 126)
//let newText = text.replace(/MICROSOFT/i, "W3Schools");  // use the /   /i for case sensitive changes
//let newText = text.replace(/MICROSOFT/g, "W3Schools");  //use /  /g for all possible searches --- called a global match (these are regular expressions)
//        /w3schools/i  is a regular expression.
//    w3schools  is a pattern (to be used in a search).  i  is a modifier

// using replaceAll()   it allows the regular expression /  /g
let tolu_text =
  "He is a Biochemist and also a web 3 developer. He designs with Figma. He is aslo a product manager. He recently concluded his masters degree.";
tolu_text = tolu_text.replaceAll(/He/g, "Tolueen");
document.getElementById("longtext").innerHTML = tolu_text;

//using the toUpperCase method
let tolu_extra = "He is a pretty good solidity developer";
tolu_extra = tolu_extra.toUpperCase();

document.getElementById("myextra").innerHTML = tolu_extra;

// using the concat() ---- used for joining two or more strings together

// using the padstart() method for strings only
let yes = "200";
yes = yes.padStart(6, "0"); //6 is the number of digits and 2 is the number that will be used to pad up to 6 digits
document.getElementById("padstart").innerHTML =
  "This is for padStart() method " + yes;

// using the padEnd() method for strings only
let y = "50";
y = y.padEnd(9, "1"); //9 is the number of digits and 1 is the number that will be used to pad up to 6 digits
document.getElementById("padend").innerHTML = "This is for padEnd method " + y;

// to pad a number, convert to a string first
let my_number = 400;
my_number = my_number.toString();
string_num = my_number.padStart(10, "9");

document.getElementById("numberString").innerHTML =
  "This was a case of a number converted to a string " + string_num;

//Extracting string characters
// using the charAt() method
let v = " Happy Birthday";
v = v.charAt(5);
document.getElementById("char").innerHTML =
  "this charAt() returns the character at the requested position as " + v;

// using the charCodeAt()
let opin = "Merry xmas";
opin = opin.charCodeAt(2);
document.getElementById("opined").innerHTML =
  "Here is the charcode for the requested index of the string" + opin;

// using property access on strings
let pine = "Happy new year";
pined = pine[2];
document.getElementById("pin").innerHTML =
  "This is the character positioned at the index requested " + pined;

// converting a string to an array using the split()
let pan = "c,o,n,j,u,b";
const myArray = pan.split(","); // this converts the string to an array
document.getElementById("pan").innerHTML = myArray[2]; // this requests for the third index in the string

let panda = "conjugal bliss madam on your wedding";
const myArray2 = panda.split(" "); // this separates based on spaces found around the string elements
document.getElementById("panda").innerHTML = myArray2[4];

//string search
// using indexOf()

let tile =
  "this is a long text to test the search of a string using the indexOf method";
let tiled = tile.indexOf("method");
document.getElementById("tiling").innerHTML =
  "This is the used of the indexOf method to search for a string " + tiled;

let tile2 =
  "this is a long text to test the search of a string using the indeOf method";
let tiled2 = tile2.indexOf("tman");
document.getElementById("tiling2").innerHTML =
  "here is the result of your string search" + tiled2; // if text is not found, it returns -1

//using lastIndexOf()

let rat =
  "this is a long text to test the search of a string using the indeOf method";
let rated = rat.lastIndexOf("a");
document.getElementById("rattus").innerHTML =
  "This returns the last index of the reqested string " + rated;
// bothe indexOf() and lastIndexOf() allow a second parameter that serves as a staeting position for the search

let ban =
  "this is a long text to test the search of a string using the indeOf method";
let banned = ban.lastIndexOf("a", 17); //program starts searching from position 17
document.getElementById("banner").innerHTML =
  "this is for testing the position of the searched string " + banned;

//using the search() keyword to search for strings or a regular expression
// search() cannot take a second postional value
let teer =
  "this is a long text to test the search of a string using the indeOf method long";
let tored = teer.search(/long/); // searching for a regular expression in a string
document.getElementById("tee").innerHTML =
  "This is using the search() to search for a regular expression in a string " +
  tored;

//using the match() for searching in a string  // it returns a array for a match in a string or regular expression
let spanner =
  "The fastest fox must have been born a cheater in its previous life is the highest and longest";
let spanned = spanner.match("est");
document.getElementById("spain").innerHTML =
  "This is the use of the match() mathod for searching the string " + spanned;

//using the match() for searching in a string  // it returns a array for a match in a string or regular expression
let spann =
  "The fastest fox must have been born a cheater in its previous life is the highest and longest";
const spanne = spann.match(/est/g); /// g help returns the number of the results of global searhes of an array
document.getElementById("pann").innerHTML =
  "using the match() for searching regular expression : " +
  spanne +
  " " +
  spanne.length;

let use =
  "The fastest fox must have been born a cheater in its previous life is the highest and LONGEST";
const used = spann.match(/ESt/gi); /// g help returns the number of the results of global searhes of an array and i for a cas sensitive search
document.getElementById("rider").innerHTML =
  "using the match() for searching regular expression with the global and case sensitive search : " +
  used +
  " " +
  used.length;

// Using the matchAll()
let hanner =
  "this is an excellent series of lines that is being test run for a match() mnethod entertainment, jollification";
const hammed = hanner.matchAll("ent"); // returns an array   //saame could be done to a regular expression too /year/gi
document.getElementById("hamburger").innerHTML =
  "this is used to test the matchAll() : " + Array.from(hammed); //Array.from extrapollates the array

// using the includes() method of string searching   //this returns a boolean (true) and false if it does not include

let youth =
  "the is the sentence that is used to test for the method includes() assignment";
let youthed = youth.includes("sentence"); // would return false if the sentence is not included
// it can take a second parameter to check if sentence is located at position 12
document.getElementById("youth").innerHTML =
  "This is the result of the method of includes(): " + youthed;

// using the startsWith() method                                //same is done with endsWith()
let bannerd = "another sentence to test the startsWith() method in a string";
let banners = bannerd.startsWith("another"); // returns a boolean too // also permits the input of a second parameter (position)
document.getElementById("banny").innerHTML =
  "testing for the method startsWith(); " + banners;

// string template literals ---- using backticks ` ` to define strings
// template literals use ${ } to insert variables in a string

let firstname1 = "Tioluwawniope";
let lastname1 = "Adeotan";
document.getElementById(
  "name"
).innerHTML = `${firstname1} is the firstname of  ${lastname1}`; //don't use the + to concatenate

//sting literals allow expressions substitution in strings
let cost_price = 80;
let selling_price = 851;
let total_cost = `Total: ${((cost_price * (4000 - selling_price)) / 20).toFixed(
  3
)}`; //toFixed
document.getElementById(
  "calcu"
).innerHTML = `${total_cost}  is the cost of your goods`;

//numbers in javascript
let ton = 4.256;
let ron = 2564;

document.getElementById(
  "num"
).innerHTML = `Here is a combination of a float and an integer ${ton} </br> ${ron}`;

//when numbers are written as stings, numerical operations will make the result enter as numbers ----- except the + operator

// NaN -- Not a number
// trying to do arithmetic with a non-numeric string will result in NaN

let this_code = 4567;
let that_code = "bumbum";
final_code = this_code / that_code;
document.getElementById(
  "mycode"
).innerHTML = `This is a result of an illegitmate number, Not a number: ${final_code}`;

// using isNaN() to find out if a value is not a number
// this returns a boolean
let kill = 400;
let yam = 200;
let yoursss = isNaN(yam); // returns a boolean
document.getElementById("nantry").innerHTML =
  "testing isNaN() method on numbers: " + yoursss;

// using NaN with numbers
let finale = NaN;
let my_finale = 100;
let gate = my_finale / finale; // results in NaN
document.getElementById("food").innerHTML =
  "This is the aftermath of a NaN and a number: " + gate;
// NaN and a string will concatenate to give a string     //Nan is number

//js BigInt
// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number
// JavaScript integers are only accurate up to 15 digits:

let sammple = 19999999999999;
let sample2 = 9999999999999999; // it converts if it exceeds 15 digits
document.getElementById("dim").innerHTML = sammple + "<br>" + sample2;

// to create a big interger BigInt()

let jaguar = 9999999999999999; // integer rounds up when value exceeds 15
let jugger = BigInt("9999999999999999"); // integer remains same value even after exceeding 15
// to create a Big integer, you can either call BigInt() or append n to the end of the integer
document.getElementById("jugadore").innerHTML =
  "this is the creation of a BigInt(): " +
  jugger +
  "<br>" +
  "while this is for non Big integer: " +
  jaguar;

// big integers cannot have decimal
// so when using number operatprs, convert to number first

let mice = 45n; // this is a big integer
let micer = Number(mice) / 456;
debugger; // this is used as a sort of breakpoint to implement a function when a bug is encountered
document.getElementById("mickey").innerHTML =
  "This is the output of a big integer converted to a number before an operator can work on it; " +
  micer;

// using the toExponential() method for numbers
let er = 600;
let yaw = er.toExponential(); // converting a number to exponential
document.getElementById("erme").innerHTML =
  "Testing the toExponential() for numbers: " + yaw;

// using the toPrecision()
let ler = 902390.7894239;
let daw = ler.toPrecision(3); // to 3 significant figures
document.getElementById("daw").innerHTML =
  "This is for the toPrecision() for numbers: " + daw;

// using the toString()
let honey = 36960897798;
let sugar = honey.toString(); // to convert to string
document.getElementById("sugar").innerHTML =
  "This is a test of the number toString() method: " + sugar;

//the valueOf() returns a number as a number
let home = 300004;
let homed = home.valueOf(); //used in converting number object to primitive numbers
document.getElementById("home").innerHTML =
  " This is the result of using the valueOf(): " + homed;

//converting variables to number
// uding the Number()

let ana1 = true;
let ana2 = false;
let ana3 = 1;
let ana4 = 10;
let ana5 = 100;
let ana6 = "100,1000"; // the Number() converts variables to number
let ana7 = "100 100";
let ana8 = "100.10"; // those that retured NaN cannot be converted
let ana9 = "Toluene";

document.getElementById("tested").innerHTML =
  Number(ana1) +
  "<br>" +
  Number(ana2) +
  "<br>" +
  Number(ana3) +
  "<br>" +
  Number(ana4) +
  "<br>" +
  Number(ana5) +
  "<br>" +
  Number(ana6) +
  "<br>" +
  Number(ana7) +
  "<br>" +
  Number(ana8) +
  "<br>" +
  Number(ana9);

//using the Number() tp convert dates to numvber
let yolk = new Date("2020-05-25"); // it returns the milisecond since that date
document.getElementById("dateme").innerHTML =
  "We are testing for the conversion of date to number: " + Number(yolk);

//using the parseInt()
// usually used to convert strings to numbers
let beu1 = "100, 1000";
let beu2 = "2000 20"; // it permits spaces
let beu3 = "  400.24  "; // it retuens a whole number and only the first integer //it will not return a float
document.getElementById("beu").innerHTML =
  "Using the parseInt(): " +
  parseInt(beu1) +
  "<br>" +
  parseInt(beu2) +
  "<br>" +
  parseInt(beu3);

//to parse a string and return a float, use parseFloat()
let nat = parseFloat("300, 500");
let natty = parseFloat("300.45");
let nattty = parseFloat("200");
let matty = parseFloat("300 years");
let maty = parseFloat("years 100.45467");

// those that cannot be converted return NaN
//the parseFloat() also returns the first parameter
document.getElementById("naty").innerHTML =
  "this is the result of using parseFloat(): " +
  nat +
  "<br>" +
  natty +
  "<br>" +
  nattty +
  "<br>" +
  matty +
  "<br>" +
  maty;

// note: the number method cannot be used with a variable e.g d.parse.Float()   where d is the variable (will return an error)
// using the NUmber.isSageInteger method..............returns a boolean for its arguement
let nice = 234;
let baddo = Number.isInteger(nice);
document.getElementById("baddo").innerHTML =
  "this is the use of the Number.isInteger(): " + baddo;

let lice = 2348064;
let bado = Number.isInteger(lice);
document.getElementById("bado").innerHTML =
  "this is the use of the Number.isSafeInteger(): " + bado;
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// Number.parseFloat converts a string to a number
//Number.parseFloat still does the same thing as parseFloat() (this is a global method)

//number properties
//epsilon - is the difference between the smallest floating number that is greeater than 1 and 1 e.g 45.2 - 1

let red = Number.EPSILON;
document.getElementById("reed").innerHTML =
  "This is the result of the number property episolon: " + red;

//MAX_VALLUE - returns the largest possible value in JS  (Number.MAX_VALUE)
//number variables canoot be used with variables --- will reurn undefined
// MIN_VALUE -- returns the smallest possible value in JS
// MAX_SAFE_INTEGER and MIN_SAFE_INTEGER returns the largest and smallest possible safe integers in JS
// Number.POSITIVE_INFINITY returns infinity

let hen = Number.POSITIVE_INFINITY;
document.getElementById("hen").innerHTML =
  "THis is the result of the output of a positive infinity: " + hen;

let henny = 1 / 0;
document.getElementById("henny").innerHTML = henny; //returns infinity

//Number.NEGATIVE_INFINITY
let jack = -1 / 0; //returns -infinity
document.getElementById("jack").innerHTML =
  "This is the result of a negative infinity using -1/0: " + jack;

//js NaN
let taller = Number.NaN;
document.getElementById("taller").innerHTML =
  "This is the output of the number property of NaN: " + taller;

let shorter = 5677 / "taller";
document.getElementById("shorter").innerHTML = shorter;

// jS arrays                         js arrays                 js arrays
//arrays could hold more than one value   // always use const to declare the variable

const cars = ["volvo", "jeep", "benz", "toyota", "Micra"];
document.getElementById("cars").innerHTML =
  "This is the list of car printed from an array: " + cars;

//creating an array and the providing the elements of the array
let fav_list = [];
fav_list[0] = "beans";
fav_list[1] = "rice";
fav_list[2] = "cassava flakes";
fav_list[3] = "cocoa yam";
fav_list[4] = "fish";
fav_list[5] = "meat";
document.getElementById("mylist").innerHTML =
  "This is a list of my favorite foods as a child: " + fav_list;

//arrays can also be created and assigned values to by doing ths
const food = new Array("coca cola", "apple juice", "eba", "moi moi");
document.getElementById("myfoods").innerHTML =
  "This is a new array setup using the new array method: " + food;

//accessing array elements
let fav_food = food[3]; // this selects the fourth element in the array
document.getElementById("fav_food").innerHTML =
  "This is my favorite food: " + fav_food;

//changing an array element
const foodie = [" meat "," salad "," efo-riro "," fish soup "," pepper snacks ", " caffinated drinks "];
foodie[4] = " asaro ati gbegiri ";
foodie[2] = " groundnut soup ";
document.getElementById("change_array").innerHTML = "A food element has been edited in the list below: " + foodie;

//converting an array to string using the toString() method
const foody =  [" wheat "," beans "," corn "," agbado "," pawpaw ", " garri "];
document.getElementById("foody").innerHTML = "This is the conversion of an array to a string: " + foody.toString();

// arrays as objects
const foodco = {fav_meal: " pie ",preferred_meal: " chicken ", alter_meal: " egg "};
document.getElementById("myspecialobject").innerHTML = "My prefferred meal is: " + foodco.preferred_meal;

//array properties and methods using .lenght and .sort
document.getElementById("try_length").innerHTML = 
"This is the length of my food array: "  + foody.length; //using .length to ge the size of an array


document.getElementById("try_same").innerHTML = 
 //this selects the last element using the -1 indexing and the array method of selecting elements
"This is the last element in my food array: "  + foody[foody.length-1];

//adding to an array using the .push method

//first display the initial list 
const shopping_list = ["tissue paper","matches box","stove"];
document.getElementById("s_list").innerHTML = "Here is my shopping list: " + "<br>" + shopping_list;


//write a funtion to add and display the new list
function add_list() {
    shopping_list.push("Beans"); //add item to be added 
    document.getElementById("s_list").innerHTML = "New Items have been added to your shopping list: " +  "<br>" + shopping_list;
}

//js does not support named indexes
const fighter= [];
fighter["nickname"] = "J Warrior";
fighter["age"]= 35;
fighter["level"] = "Superstar";  //using this named index will only return undefined in JS
fighter["country"] = "Tanzania";
document.getElementById("fighter").innerHTML = fighter[0];

//in Js //arrays are numbered indexes
        //objects are named indexes
        //You should use objects when you want the element names to be strings (text).
        //You should use arrays when you want the element names to be numbers

const thug = new Array(93);
document.getElementById("thug").innerHTML = thug; //printing only one item in an array

const thig = new Array(93,23); //prints both items in the array
document.getElementById("thig").innerHTML = thig;

//diff between the ways of creating arrays
const packages  = [100];   //this creates an array of only one element(100)
const pack = new Array (100);   //this creates array with 100 undefined elements
document.getElementById("package").innerHTML = packages;
document.getElementById("pack").innerHTML = pack;


//to check if a variable is an array using typeof
document.getElementById("packer").innerHTML = typeof shopping_list ; //it returned an object

//to know if an array is an array and not an object,we use a method introduced in ES6 using Array.isarray()

document.getElementById("packed").innerHTML = 
"this array.isarray is used to distinguish an array from an object: " + Array.isArray(pack);
//this usually returns a boolean value

document.getElementById("packs").innerHTML = 
"this array.isarray is used to distinguish an array from an object: " + Array.isArray(foodco);

/*Array methods
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()
*/

//using the at() instead of the [] for returning indexed element because js does not support negative indexing in the []
const sofia = ['clothes','shoes','bags','phones'];
//access the second element of the array using at()
document.getElementById("sofia").innerHTML = "Her favorite item is " + sofia.at(-3);

//using the join() for arrays ------used to join array elements into a string
//join() works just like toSting() but you can indicate a separator here
const bumi = ['turtle necks', 'tanktops', 'blouse', 'round necks']
document.getElementById("bunmi").innerHTML = 
"These are bumi favorite wears: " + bumi.join("-"); //add a separator as an argurment


//popping and pushing of arrays 
//using pop()   .pop() retunrs the last element in the array
const additional_list = ['consoles','watches','water bottles','kits','utensils'];
document.getElementById('added_list').innerHTML = additional_list.pop();

//using the push()
additional_list.push("grocery"); //this adds grocery to the list
document.getElementById("try_push").innerHTML = additional_list; //this displays the list including the added item

const newly_added_list = additional_list.push(); // not inputing an arg returns the array length
document.getElementById("new_list").innerHTML = newly_added_list;

//shifting element //shift() works like pop() but it has effect on the first element
const jamil = ['honey', 'sugar','sucrose','gall'];
document.getElementById("jamil").innerHTML = jamil.shift(); //this removes the first element
document.getElementById('kamil').innerHTML = jamil; //this displays the remailing elemenets

const admin = ['secretary','receptionist','registrar','bookkeeper'];
const admin2 = admin.shift();
document.getElementById("admin").innerHTML = admin2;
document.getElementById("admin2").innerHTML = admin;

//using the unshift() which is similar to the push()
// where the push() adds to the end, the unshift adds to the begining of the array. and shifts the other elements 
const organ = ['liver', 'kidney','heart','tongue']
        //this adds maddison to the list
organ.unshift('maddison');   
        //display newly modified list
document.getElementById("organ").innerHTML = organ;
        //check length of modified list
document.getElementById('organee').innerHTML =  organ.unshift();

// changing elements 
        //editing the index method
household[0] = 'computers';  //this method changes the first indexx element on the array
document.getElementById('household').innerHTML = "This is an edited array: " + household;
    // using the .length method
household[household.length] = "cupboard"  //this adds another element to the array like the push()
document.getElementById('household2').innerHTML = "Adding to an array using the lenght method: " + household;

// Deleting elements in an array 
// delete() leaves an undefined hole in an array, use pop() or shift() instead
const my_files = ['school','work','hospital','friends'];
delete my_files[2];

document.getElementById('my_files').innerHTML = my_files[2] + " is missing";  //returns undefined, pop() or shift() is better used.

//concatenating --- joining arrays end to end --- can also take any number of array arguments
const words = [' rinse '," repeat ",' again ',' since '];
const diff_words = [' finance ',' money ',' dowry ',' tuition ',' fees ']
const joining = words.concat(diff_words);  //the concat() joins two strings together
document.getElementById("concat").innerHTML = "This is the concatenation of two strings" + joining;

//copyWithin()----- copying element of an array to another  -----this method overwrites existing values
const fav_fruits = ['banana','orange','cashew','strawberry'];
fav_fruits.copyWithin(3,1); // this copies to index 3 from 1
document.getElementById("copycat").innerHTML = 
"This is the effect of copying an element from one index to another; " + "<br>" + "here strawberry was replaced with orange" + "<br>" +  fav_fruits;

const following_fruits = ['papaya','apple','jam','paprika','water melon','sweet potato'];
following_fruits.copyWithin(3,2,3);  //copy elements in index 2-3 into index 3 within the same array 
document.getElementById("copycat2").innerHTML = "Copying from index 2 to 3 into index 3: " + following_fruits;

//flatening an array -----using flat() --- used to concantenate sub arrays into a single array
const spices = [['maggi',"locust beans"],['rice','fish'],['water','wine']];
spices.flat();
document.getElementById("spices").innerHTML = "This is the flattening of an array with subarrays using the flat(): " + spices;

//splicing and slicing arrays
//splice() adds new items to an array
//slice() slices out a part of the array

 const fav_footballers = ["salah","ronaldinho","lampard","Zidane","makelele"];
 let removed_names = fav_footballers.splice(0,2,"kante","firmino"); //first parameter shows index to be spliced --- second parameter shows number of elements to be removed
 document.getElementById("splice").innerHTML =
 "This is the use of splice to add items to an array for my favorite footballers: " + fav_footballers;

 //to return removed items, display the variables
 document.getElementById("splice2").innerHTML = "These are the removed items: " + removed_names;

// it can be used to remove array elements by modifying the method
const fav_shows = ["kakaki","animaniacs","biker mice","teletubies"];
let my_shows = fav_shows.splice(1,2);
document.getElementById("fav_shows").innerHTML = "To delete shows using the splice: " + my_shows;

//the toSplice() returns a new array unlike the splice() that returns the original array
const fav_movies = ["bunny","love",'action','adventure',"opera"];
const my_fav_movies = fav_movies.toSpliced(1,2);  //using the toSplice() to delete the first index of the array
document.getElementById("tosplice").innerHTML = "This is the use of toSpliced(): " + my_fav_movies;

//the slice()---- -removes a part of an array
// can take two argurments -- where it is starting to where it is ending 
const fav_location = ['abeokuta',"lagos","Ibadan","United States","United Kingdom"];
const new_location = fav_location.slice(3); 
document.getElementById("locate_me").innerHTML = 
"This is the output of the slice() method: " + new_location + "<br>"
 + "This is the output of the original / source array: "
 + fav_location;

//Array search              Array Search             Array Search
/*
Array indexOf()
Array lastIndexOf()
Array includes()
Array findIndex()
Array findLast()
Array findLastIndex()
*/
//using the indexOf() ----- it will return -1 if element is not found
const special_foods = ["beans","rice","moi moi", "eba", "amala"];
let position_food = special_foods.indexOf("eba") + 1;  //the +1 is an increment of the position of the index being searched
document.getElementById("deposit").innerHTML = "This shows the position of the the searched index is at position : " + position_food;
//if an element occurs more than once, then it will return the first element's position

//using the lastIndexOf()
const needed = ["messi" , "ronaldo", "salah", "bale", "messi", "ronaldo", "messi", "salah"];
let my_new_postion = needed.lastIndexOf("messi"); //used to search for the last index of an elemenet that is repetitive
document.getElementById("needed").innerHTML = "The use of the lastIndexOf(): " + my_new_postion;

//.includes is used to confirm if an element can be found in an array ----------- it returns a boolean value

//using the find() method for array elements
const fav_nums = [100,200,124,632,234,237,654,35,7534,3546,786,464,4670,78,454,654,54,356,456,876,567,40,98,566,343,536,458,643];
let fav_nums1 = fav_nums.find(fatNumbers); //this only returns the first element of the test funcion
document.getElementById("our_numbers").innerHTML = "Numbers greater than 300 are: " + fav_nums1;

//write a funxtion to return the num greater than 300
function fatNumbers(value, index,array) {
   return index < 300;
}
//findLast() wull start it search from the end and return the first element for the test function
//findLastIndex()

//array sort()
/*
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects

Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()
*/

const damaged_fruits = ["orange","mang0","apple","groundnut","water melon"];
let repaired_fruits = damaged_fruits.sort();  //this will sort it out alphabetically
document.getElementById("damaged").innerHTML = "The use of the sort() method: " + repaired_fruits;

const states_fg = ["ogun","Oyo","Ondo","Ekiti","Akwa Ibom","Gombe","kaduna"];
let new_states = states_fg.reverse(); //rearranges the function reversely
document.getElementById("states_fg").innerHTML = "The reverse function is used to sort the array reversely; " + new_states;

//using the toSorted() ------------this creates a new array and does not alter the original array unlike the sort()
const games = ["ninetendo","takwando","karate","gameboy"] 
const new_games = games.toSorted();  //returns a new array and the original remains unchanged
document.getElementById("games").innerHTML = "Using the toSorted method: " + new_games;

//ditto to toReversed()
//the sort function is not effective in sortin numbers, therefore a compare function is better 
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1" 

const dem_nums = [23,54,35,23,5,5,35,86,44,64,95,56,46,453,34,6,45,3];
document.getElementById("compare_nums").innerHTML = "Using the compare function: " + dem_nums.sort(compared_nums); //sort the function below

//wrote a funtion for sorting number numerically
function compared_nums(a,b){
    return a-b;  //if resut it negative, it suggests that b should come after a (a is smaller) and vice versa
}
add
//for reverse arrangement, write a funtion that that suggests that
const list_num = [34,65,36,97,56,42,33,87,54,34,23,78,47,47,32,97];
document.getElementById("regression").innerHTML = "For showing a decending order of the numbers" + list_num.sort(regressed_nums);

function regressed_nums(a,b){
    return b-a;
}


//FUNCTION OF A FUNCTION OR NESTED FUNCTION
//for random arrangement of numbers
const diff_nums = [34,54,23,23,86,54,31,38,97,75,47,35,63,38,67,96,58,84,80,68];
//first display the array to be randomized
document.getElementById("random_num").innerHTML = diff_nums;

function randomed_num(a,b){
    //the first function: for the sorting of an embeded function, Math.random()
    diff_nums.sort(function(){return 0.5-Math.random()}) //function of a function: the math.random is an embeded function here})
    document.getElementById("random_num").innerHTML = diff_nums;
}


//FINDING HE HIGHEST OR LOWEST ARRAY VALUE
//1 SORT THAT RETURN THE FIRST INDEX IF IN ASCENDING order

const duo_num = [775,865,856,863,352,2426,89,467,753,578,853,35,735,578,634,36,2343,588,542,255,655,885,652];

function sorted_nums(a,b){
    duo_num.sort(
        function(a,b){
            return a - b;
            }
            );
}
document.getElementById("sortified").innerHTML = "This is the highest value of the sorted array: " + duo_num;