/**
 * Instructions:
 * 
 * Given an array of integers, return a new array such that each element at index i of the new array is the product 
 * of all the numbers in the original array except the one at i.
 * 
 * For example, if our input was [1, 2, 3 , 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input
 * was [3, 2, 1], the expected output would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 * 
 * Author: Mauricio Farfan
 * Asked on: 18/10/2020
 * Completed: 20/10/2020
 * Time elapsed: 35 mins
*/

let array= [2, -10, 0, -4, 1, 0];


// This is the solution without using divisions in the process.
// Personaly I don't like this solution because is more expensive.
// The solution is O(n^2).
console.log(solutionWithoutDivision(array))

// Also this could be a good solution.
// The solution is O(2n).
console.log(solutionWithDivision(array))


function solutionWithoutDivision(array)
{
    let outputArray = [];
    for (let i = 0; i < array.length; i++)
    {
        let constant = 1;
        for (let j = 0; j < array.length; j++)
        {
            if (i != j)
                constant *= array[j];
        }
        outputArray[i] = constant;
    }
    return outputArray;
}

function solutionWithDivision(array)
{
    let constant = 1, position, zeroCounter = 0;
    let outputArray = [];
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] == 0) 
        {
            zeroCounter++;
            position = i;
        }
        else 
        {
            constant *= array[i];
        }             
    }
    if (zeroCounter == 0)
    {
        for (let i = 0; i < array.length; i++)
            outputArray[i] = constant / array[i];
        return outputArray;
    }
    else
    {
        if (zeroCounter > 1) return array.fill(0, 0, array.length);
        else 
        {
            array.fill(0, 0, array.length);
            array[position] = constant;
        }
        return array;
    }
        
}
