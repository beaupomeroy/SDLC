///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;

for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]; // made a for loop and calculated the total for each type of acre from each array using and for those three arrays I calculated the total acres
}

console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let numberOfDays = fujiAcres.length; // created a variable for the number of days using the length of the array which indicate the each acre for each day of the week

let averageDailyAcres = totalAcres / numberOfDays; // created a variable to find the average daily acres by using my total acres and dividing it by the numbers of days found from length of the array for the fuji array
console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days++; // used to count the days for each loop when the acres left is greater than 0
    acresLeft -= averageDailyAcres; // used to calculate the acres left for each loop when subtracting the average daily acres
}
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let acresTon = 6.5;

let fujiTons = []
let galaTons = []
let pinkTons = []


for (let i = 0; i < fujiAcres.length; i++) {
   fujiTons.push(fujiAcres[i]* acresTon) 
} // used a for loop to create an array for the fuji tons. Used the push method to add to an empty array where we calculated fuji tons by multiplying each index of the fuji acres by the acres ton which is 6.5.
for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i]* acresTon)
}

for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i]* acresTon)
}

console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
let poundsPerTon = 2000;

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds += fujiTons[i]* poundsPerTon
} // used a for loop for the fuji tons array so I can calculate total pounds amount of fuji apples. I mulitplied each fuji ton for each index in the fuji ton array by 2000 pounds and added each index up to come up with the total fuji pounds I used a += assignment operator to add each index of the array.
for (let i = 0; i < galaTons.length; i++) {
    galaPounds += galaTons[i]* poundsPerTon
}
for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds += pinkTons[i]* poundsPerTon
}

console.log(fujiPounds + ' fuji pounds');
console.log(galaPounds + ' gala pounds');
console.log(pinkPounds + ' pink pounds');


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice; // simple multiplication where I multiplied the fuji pounds by the fuji price per pound to get the fuji profit
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log('$' + fujiProfit + ' fuji profit');
console.log('$' + galaProfit + ' gala profit');
console.log('$'+ pinkProfit + ' pink profit');


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit; // added together the profit for each type of apple to get the total profit 

console.log('$' + totalProfit);