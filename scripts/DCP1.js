/**
 * Instructions:
 * 
 * Given a list of numbers and a number k, return wheter any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17 return true since 10 + 7 is 17.
 * 
 * Bonus: Can you do this in one pass?
 * 
 * 
 * Author: Mauricio Farfan
 * Asked on: 17/10/2020
 * Completed: 18/10/2020
 * Time elapsed: 90 mins. 
 * 
 * Modified (19/10/2020): Added in on iteration.
 */

var array = [-1, 2, 4, 8, 16, 32];
var constant = 8;

// This solution is too slow. O((n-1)^2)
console.log(lookForSumSlower(array, constant));

// This solution is faster. O(n)
console.log(lookForSum(array, constant))


function lookForSum(array, constant)
{
    let lookedNumbers = [array[0]];
    let difference;
    for (var i = 1; i < array.length; i++)
    {
        difference = constant - array[i];
        if (recursiveBinarySearch(lookedNumbers, difference, 0, lookedNumbers.length))
            return true;
        else
            lookedNumbers.push(array[i]);
    }
    return false;
}

function recursiveBinarySearch(lookedNumbers, number, startIndex, endIndex)
{
    if (startIndex > endIndex) return false;
    let middleIndex = Math.floor((endIndex + startIndex) / 2);
    if (lookedNumbers[middleIndex] == number) return true;
    if (lookedNumbers[middleIndex] > number) 
        return recursiveBinarySearch(lookedNumbers, number, startIndex, middleIndex - 1);
    else 
        return recursiveBinarySearch(lookedNumbers, number, middleIndex + 1, endIndex);
}

function lookForSumSlower(array, constant)
{
    for (let i = 0; (i < array.length - 1); i++) 
    {
        for (let j = i + 1; (j < array.length); j++) 
        {
            if (array[i] + array[j] == constant) return true;
        }
    }
    return false;
}