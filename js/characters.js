/* 
 * Character class.
 * Contains stats and other information.
 */
function Character() {
    // General
    this.id = 0;
    this.name = "";
    this.sprite = "";

    // Stats
    this.HP = 0;
    this.HP_current = 0;
    this.strength = 0; // Physical attack
    this.defense = 0; // Endure physical attacks
    this.skill = 0;
    this.speed = 0;

    // Techniques array
    this.techniques = [new Technique()];
}