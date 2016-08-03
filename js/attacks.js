/*
 * Computes how much damage a character would do
 * to another character in case of a successful attack
 */
function get_hit_points(attacker, defender) {
    var hit = attacker.strength * 2 - defender.defense;
    if (hit < 0)
        hit = 0;
    return hit;
}
/*
 * Computes the probability of a succesful attack
 * Integer from 0 to 100
 */
function get_hit_rate(attacker, defender) {
    var attacker_hit = attacker.skill + attacker.speed;
    var defender_hit = defender.skill + defender.speed;
    var hit = attacker_hit * 3.5 - defender_hit;
    hit = Math.floor(hit);
    if (hit < 0)
        hit = 0;
    if (hit > 100)
        hit = 100;
    return hit;
}
/*
 * Attack Prediction class
 */
function AttackPrediction(attacker, defender) {
    this.hit_points = get_hit_points(attacker, defender);
    this.hit_rate = get_hit_rate(attacker, defender);
    this.attacker = attacker;
    this.defender = defender;
}
/*
 * Attack class
 */
function Attack(attacker, defender) {
    this.attacker = attacker;
    this.defender = defender;
    var hit_rate = get_hit_rate(attacker, defender);
    if (dice(100) <= hit_rate) {
        this.success = true;
        this.hit_points = get_hit_points(attacker, defender);
        defender.HP_current -= this.hit_points;
    } else {
        this.success = false;
        this.hit_points = 0;
    }
    if (defender.HP_current <= 0) {
        defender.HP_current = 0;
        this.defeat = true;
    } else
        this.defeat = false;
}