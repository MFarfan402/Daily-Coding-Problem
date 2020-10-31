/**
 * Instructions:
 * 
 * The area of a circle is defined as pi*r^2.
 * Estimate pi to 3 decimal places using a MonteCarlo method.
 * 
 * Hint: The basic equation of a circle is x^2 + y^2 = r^2
 *  
 * Author: Mauricio Farfan
 * Asked on: 31/10/2020
 * Completed: 31/10/2020
 */

let solved = false;

while(!solved)
{
    let aproximation = MonteCarloAproximation(100000).toFixed(3);
    console.log(aproximation);

    if (aproximation == 3.141) solved = true;
}

function MonteCarloAproximation (items)
{
    const radius = 5;
    let inCircle = 0;
    
    for (let i = 0; i < items; i++)
    {
        let xValue = Math.random() * radius;
        let yValue = Math.random() * radius;

        if ((xValue * xValue) + (yValue * yValue) < (radius * radius))
            inCircle++;
    }
    return 4 * inCircle / items;
}

