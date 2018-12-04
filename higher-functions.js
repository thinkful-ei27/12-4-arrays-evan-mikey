function hello(){
   return 'Hello world'
}

function goodbye(){
    return 'Goodbye world'
}

function repeat(fn , n){
      for(let i=0; i < n; i++){
     console.log(fn);
   
    };
return fn;
}

console.log(repeat(hello(), 8))
console.log(repeat(goodbye(), 4))
