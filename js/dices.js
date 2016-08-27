/*
 * Roll 1 dice with the specified number of sides.
 * Returns integer.
 * sides should be an integer and greater than 0.
 * Returns 0 on error.
 */
function dice(sides) {
    sides = parseInt(sides);
    var x = 0;
    if (sides > 1)
        x = Math.floor(Math.random() * sides) + 1;
    else if (sides === 1)
        x = 1;
    else
        x = 0;
    return x;
}
/*
 * Roll the specified number of dices with the
 * specified number of sides.
 * Returns integer.
 * sides should be an integer and greater than 0.
 * num should be an integer and greater than 0.
 * Returns 0 on error.
 */
function dices(num, sides) {
    num = parseInt(num);
    sides = parseInt(sides);
    var sum = 0;
    if (num > 0 && sides > 0)
        for (var i = 0; i < num; i++)
            sum += dice(sides);
    else
        sum = 0;
    return sum;
}
/*
 * Predict some properties of the distribution
 * of the results of rolling the specified
 * number of dices with the specified number
 * of sides.
 * Returns array of integers.
 * sides should be an integer and greater than 0.
 * num should be an integer and greater than 0.
 * Returns 0 on error.
 * The first integer is the min result.
 * The second integer is the max result.
 * The third integer is the median.
 */
function predict_dice(num, sides) {
    num = parseInt(num);
    sides = parseInt(sides);
    if (num > 0 && sides > 0) {
        var max = num * sides;
        var min = num;
        var med = (min + max) / 2;
        return [min, max, med];
    } else
        return 0;
}