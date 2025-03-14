/*ACTIVITIES:
2a. Define a loop which will print out 1 - 100.
2b. Define a loop which will print out 1 - 10 to the console without printing out the numbers 4 and 5.
3. Define a function which adds the number values that the function receives and print the result in your console.
4. Define a function “greet” that prints “Hello name, welcome to Deebug”. Where name is the argument that was passed as a parameter to the greet function.
5. Using any loop of your choice, write a program that prints of the multiples of 6 */

//Question 4
function greet(name){
    console.log(`Hello ${name}, Welcome to Deebug`);
}
greet("kate");
greet("MK");



//Question 3
function add1(x, y){
    sum= x + y;
    console.log(sum);
}
add1(9,4);



//Question 2a
for(i= 1; i<=100; i++){
    console.log(i);
}



//Question 2b
for(i=1; i<=3; i++){
    console.log(i);
};
for(x=6; x<=10; x++){
    console.log(x);
};


//Question 5
function Mul(num){
for (i=1; i<=12; i++){
    console.log(`${num} * ${i}= ${num* i}`);

}
}
Mul(10);



