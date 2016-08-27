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

// Character techniques
player1.techniques.push(new Technique());
player1.techniques[0].name = "HEAT VISION";
player1.techniques[1].name = "PUNCH";
random_fill_tech(player1.techniques[0]);
random_fill_tech(player1.techniques[1]);
player2.techniques.push(new Technique());
player2.techniques[0].name = "KAMEHAMEHA";
player2.techniques[1].name = "PUNCH";
random_fill_tech(player2.techniques[0]);
random_fill_tech(player2.techniques[1]);

// Compute attack data
for (var i = 0; i < player1.techniques.length; i++) {
    var a1 = new AttackPrediction(player1, player2, player1.techniques[i]);
    print_attack_prediction(a1);
}
for (var i = 0; i < player2.techniques.length; i++) {
    var a1 = new AttackPrediction(player2, player1, player2.techniques[i]);
    print_attack_prediction(a1);
}

// Randomy fill characters
function random_fill(character) {
    var m = 10 + 8;
    var n = 9;
    var s = 3;
    character.HP = 30 - m + dices(n, s);
    character.strength = 10 - m + dices(n, s);
    character.defense = 10 - m + dices(n, s);
    character.skill = 10 - m + dices(n, s);
    character.speed = 10 - m + dices(n, s);
    character.HP_current = character.HP;
}

// Randomy fill technique
function random_fill_tech(technique) {
    var m = 10 + 8;
    var n = 9;
    var s = 3;
    technique.strength = 10 - m + dices(n, s);
    technique.skill = 10 - m + dices(n, s);
    technique.speed = 10 - m + dices(n, s);
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

function name_to_technique(technique, attacker) {
    for (var i = 0; i < attacker.techniques.length; i++)
        if (attacker.techniques[i].name === technique)
            return attacker.techniques[i];
}

// The selected attack
function make_attack(attacker, defender, technique) {
    if (player1.HP_current > 0 && player2.HP_current > 0) {
        var atk = name_to_character(attacker);
        var def = name_to_character(defender);
        var tec = name_to_technique(technique, atk);
        var a = new Attack(atk, def, tec);
        print_attack(a);
    }
}

// Print attack
function print_attack(attack) {
    var a = attack;
    var html = "";
    html += "<div class='sqr'>";
    html += "<b>" + a.attacker.name + "</b> attacks ";
    html += "<b>" + a.defender.name + "</b><br>";
    html += "with <b>" + a.technique.name + "</b><br>";
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
    html += "<b>" + a.attacker.name + "</b> can attack ";
    html += "<b>" + a.defender.name + "</b><br>with ";
    html += "<b>" + a.technique.name + "</b><br>";
    html += "<b>Strength:</b> " + a.technique.strength + "<br>";
    html += "<b>Skill:</b> " + a.technique.skill + "<br>";
    html += "<b>Speed:</b> " + a.technique.speed + "<br><br>";
    html += "<b>Hit Points:</b> " + a.hit_points + "<br>";
    html += "<b>Hit Rate:</b> " + a.hit_rate + "%<br>";
    html += "<input type='button' value='Attack' class='btn' ";
    html += "onclick='make_attack(\"" + a.attacker.name + "\", \"";
    html += a.defender.name + "\", \"" + a.technique.name + "\")' />";
    html += "</div>";
    attack_div.innerHTML += html;
}