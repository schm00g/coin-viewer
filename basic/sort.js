/*
    A) Please write a function that sorts 11 small 
    numbers (<100) as fast as possible. Once written,
    provide an estimate for how long it would take 
    to execute that function 10 Billion (10^10) 
    times on a normal machine.
*/

// assuming ascending sort

const numbers = [16, 5, 7, 9, 44, 76, 2, 4, 6, 99, 1];

const start = Date.now();

function ascendingSort(array){
    return array.sort((a, b) => a - b);
}

console.log(`Sorted data: `, ascendingSort(numbers));

const millisDuration = Date.now() - start; // APPROXIMATION

/*
    how long it would take to execute that function 
    10 Billion (10^10) times on a normal machine
*/ 

console.log(`Days: `, (millisDuration * 10000000000) / (1000 * 60 * 24 * 365));