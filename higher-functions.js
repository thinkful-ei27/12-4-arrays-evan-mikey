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
    


console.log(filteredNames) // => ['Rich', 'Ray']

