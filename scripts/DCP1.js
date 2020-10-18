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
 * Completed: 18/10/2020
 * Time elapsed: ?? mins. < 25 mins
 */

var array = [-1, 2, 4, 8, 16, 32];
var constant = 13;
var finded = false;

for (var i = 0; (i < array.length - 1) && (!finded); i++) 
{
    for (var j = i + 1; (j < array.length) && (!finded); j++) 
    {
        if (array[i] + array[j] == constant) 
        {
            console.log(array[i] + " + " + array[j] + " = "  + (array[i] + array[j]));
            finded = true;
        }
    }
}
if (!finded) console.log(finded);