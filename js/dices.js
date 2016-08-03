/*
 * Roll 1 dice with the specified number of sides.
 * Returns integer.
 * sides should be an integer and greater than 0.
 * Returns -1 on error.
 */
function dice(sides) {
    sides = parseInt(sides);
    var x = 0;
    if (sides > 1)
        x = Math.floor(Math.random() * sides) + 1;
    else if (sides === 1)
        x = 1;
    else
        x = -1;
    return x;
}
/*
 * Roll the specified number of dices with the
 * specified number of sides.
 * Returns integer.
 * sides should be an integer and grater than 0.
 * num should be an integer and greater than 0.
 * Returns -1 on error.
 */
function dices(num, sides) {
    num = parseInt(num);
    sides = parseInt(sides);
    var sum = 0;
    if (num > 0 && sides > 0)
        for (var i = 0; i < num; i++)
            sum += dice(sides);
    else
        sum = -1;
    return sum;
}