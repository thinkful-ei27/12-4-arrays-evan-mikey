function max(numbers){
    let max = numbers[0];
    let i = 0;
while(i < numbers.length){
    if(numbers[i] > max){
         max = numbers[i];
    };
    i++;
}
return max;
};

// console.log(max([20,2,3,5,7,45,8,7,4,3]));

function min(numbers){
    let min = numbers[0];
    let i = 0;
while(i < numbers.length){
    if(numbers[i] < min){
         min= numbers[i];
    };
    i++;
}
return min;
};


// console.log(min([20,6,8,5,7,6,8,7,4,3]));

function computedAverage (numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum = sum + number
    })
    return sum / numbers.length;
}


console.log(computedAverage([20,6,8,5,7,6,8,7,4,3]));








