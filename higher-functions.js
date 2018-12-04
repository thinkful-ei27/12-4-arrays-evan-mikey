function hello(){
   return 'Hello world'
}

function goodbye(){
    return 'Goodbye world'
}

function repeat(fn , n){
      for(let i=0; i < n; i++){
    //  console.log(fn);
   
    };
return fn;
}

// console.log(repeat(hello(), 8))
// console.log(repeat(goodbye(), 4))


function filter(arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true ) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, name => name[0] === 'R');
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    


// console.log(filteredNames) // => ['Rich', 'Ray']


function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter = warningCounter +1;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}! `)
        
        if(warningCounter === 1){
            console.log(`The ${typeOfWarning} 
        hazard alert has triggered ${warningCounter} time today!`)
    }
          else {console.log(`The ${typeOfWarning} 
     hazard alert has triggered ${warningCounter} times today!`)
 }
}
        
    }
    


// const rocksWarning = hazardWarningCreator('Rocks on the Road');


// rocksWarning('Main St and Pacific Ave');
// // => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// // => The Rocks on the Road hazard has triggered 1 time(s) today!

// rocksWarning('Centinela Ave and Olympic Blvd');
// // => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// // => The Rocks on the Road hazard has triggered 2 time(s) today!

// // Invoke the other hazard creators you instantiated, too

// rocksWarning('Main St and Pacifi street');

// rocksWarning('Main St and Pacific lane');


const turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

function filterNegativeSteps (arr) {
   return arr.filter(step => {
        return step[0] >= 0 && step[1] >= 0 ; 
    })
}



function addSteps (arr) {
    return arr.map(step => Math.abs(step[0] + step[1]));
    }

function howManySteps (arr) {
   return arr.forEach (step => {
    console.log(step[0] + step[1])
    });
}

// console.log(howManySteps(turtle));

// function decoder(str){
//  const strArray= str.split(' ');
//  const codeArray = [];
// for (i = 0; i < strArray.length; i ++ ){
//  if (strArray[i].length === 3 ){
//      codeArray.push(' ')}
//  if(strArray[i].length !== 3 ) {codeArray.push(strArray[i].charAt(strArray[i].length - 1).toUpperCase())};
// console.log(codeArray)
// }
// return codeArray.reduce();

 
 //  strArray.reduce((acc , curr) => {  }, '');
//  console.log(strArray);


// }
// console.log( decoder(`noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest`));

function decoder2 (str) {
    const strArr = str.split(' ');
    return strArr.reduce((decodedWord, word) => {
        if (word.length === 3) {
            return decodedWord += ' ';
        }
           return decodedWord += word.charAt(word.length - 1).toUpperCase();

    }, '')
}

console.log(decoder2(`noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest`));

// function decoder2 (str) {
    // const strArr = str.split(' ');
    // return strArr.reduce((decodedWord, word) => {
        // if (word.length === 3) {
            // return decodedWord = decodedWord.concat(' ');
        // }
        //    return decodedWord= decodedWord.concat(word.charAt(word.length - 1).toUpperCase());
// 
    // }, '')
// }
// 
// console.log(decoder2(`noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest`));