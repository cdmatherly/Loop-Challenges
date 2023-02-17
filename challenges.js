//Print odds 1-20
for (var i = 1; i < 20; i++){
    if (i % 2 === 1) {
        console.log(i);
    }
}

//Print values that are divisible by 3 from 100 down to 0
for (var i = 100; i > 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Print values in the sequence
var arr = [4, 2.5, 1, -0.5, -2, -3.5]
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//Add values from 1-100 and print result
var sum = 0;
for (var i = 1; i <= 100; i++){
    sum+=i;
}
console.log(sum);

//Multiply values from 1-12 and print result
var product = 1;
for (var i = 1; i <= 12; i++){
    product*=i;
}
console.log(product);