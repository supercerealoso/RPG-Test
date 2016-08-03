var character_div = document.getElementById("characters");
var attack_div = document.getElementById("attacks");
var attack2_div = document.getElementById("attacks2");

// Create 2 characters
var player1 = new Character();
var player2 = new Character();
random_fill(player1);
random_fill(player2);
player1.name = "SUPERMAN";
player2.name = "GOKU";
print_character(player1);
print_character(player2);

// Randomy fill characters
function random_fill(character) {
    var m = 10;
    var n = 5;
    var s = 3;
    character.HP = 30 - m + dices(n, s);
    character.strength = 10 - m + dices(n, s);
    character.defense = 10 - m + dices(n, s);
    character.skill = 10 - m + dices(n, s);
    character.speed = 10 - m + dices(n, s);
    character.HP_current = character.HP;
}

// Print character
function print_character(character) {
    var c = character;
    var html = "";
    html += "<div class='sqr'>";
    html += "<b>" + c.name + "</b><br>";
    html += "<b>HP:</b> " + c.HP_current + "/" + c.HP + "<br>";
    html += "<b>Strength:</b> " + c.strength + "<br>";
    html += "<b>Defense:</b> " + c.defense + "<br>";
    html += "<b>Skill:</b> " + c.skill + "<br>";
    html += "<b>Speed:</b> " + c.speed;
    html += "</div>";
    character_div.innerHTML += html;
}

// Translate name to character object
// Can improve with players array
function name_to_character(name) {
    if (player1.name === name)
        return player1;
    if (player2.name === name)
        return player2;
}

// The selected attack
function make_attack(attacker, defender) {
    var atk = name_to_character(attacker);
    var def = name_to_character(defender);
    var a = new Attack(atk, def);
    print_attack(a);
}

// Print attack
function print_attack(attack) {
    var a = attack;
    var html = "";
    html += "<div class='sqr'>";
    html += "<b>" + a.attacker.name + "</b> attacks ";
    html += "<b>" + a.defender.name + "</b><br>";
    if (a.success) {
        html += "Attack succesful<br>";
        character_div.innerHTML = "";
        print_character(player1);
        print_character(player2);
    }
    else
        html += "Attack failed<br>";
    html += "<b>Hit points:</b> " + a.hit_points + "<br>";
    if (a.defeat)
        html += "Enemy defeated";
    else
        html += "Enemy standing";
    html += "</div>";
    attack2_div.innerHTML += html;
}

// Print attack prediction
function print_attack_prediction(attack_prediction) {
    var a = attack_prediction;
    var html = "";
    html += "<div class='sqr'>";
    html += "If <b>" + a.attacker.name + "</b> attacks ";
    html += "<b>" + a.defender.name + "</b><br>";
    html += "<b>Hit Points:</b> " + a.hit_points + "<br>";
    html += "<b>Hit Rate:</b> " + a.hit_rate + "%<br>";
    html += "<input type='button' value='Attack' class='btn' ";
    html += "onclick='make_attack(\"" + a.attacker.name + "\", \"";
    html += a.defender.name + "\")' />";
    html += "</div>";
    attack_div.innerHTML += html;
}

// Compute attack data
var a1 = new AttackPrediction(player1, player2);
var a2 = new AttackPrediction(player2, player1);
print_attack_prediction(a1);
print_attack_prediction(a2);