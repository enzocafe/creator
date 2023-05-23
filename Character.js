const readLine = readLine('readline-sync')

let diceRolled = [rolld6()]
let eyeColors = [' Blue' , 'Purple' , 'Yellow', 'Green' , 'Orange' , 'Brown'];
let hairColors = ['Teal' , 'Pink' , 'Brown' , 'Violet', 'Blue', 'green'];
let Class = ['Artificer ','Barbarian','Warlock','Bard', 'Rogue'];
let race = ['Orc','Human', 'Hobgoblin','Elf','Bird','Fairy'];
let character = {

    //GET BACK AT

}



createChar(diceRolled)

function rolld6(diceRolled){
    return Math.ceil(Math.random()*6)
}



function rollDice(amount, list){
    for(let i = 0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`)
        list.push(roll)
    }
}

function sum(list){
    let sum = 0;
    for (let i = 0; i<list.length; i++){
        sum += list[i];

    }
    return sum
}
//GET BACK AT


function rollStat(list){

    list = [];

    rollDice(4, list);

    return sum(list);

}


function pickRandomChoices(choices){
    let randomNum = Math.floor(Math.random()*choices.length);
    return choices[randomNum];
}


function createChar(list){

    readLine.question = function (enterCharacterName) {
        return undefined;
    }
    character.name = readLine.question("Enter Character Name: Julpsin Bars");

    console.log('Rolling Eye Color')
    character.eyeColor = pickRandomChoices(eyeColors);

    console.log('Rolling Hair Color')
    character.hairColors = pickRandomChoices(hairColors);

    console.log('Rolling Class')
    character.class = pickRandomChoices(Class);

    console.log('Rolling Race')
    character.race = pickRandomChoices(race);

    console.log('Rolling STR')
    character.strength= rollStat(diceRolled);

    console.log('Rolling DEX')
    character.dexterity= rollStat(diceRolled);

    console.log('Rolling CON')
    character.constitution= rollStat(diceRolled);

    console.log('Rolling INT')
    character.intelligence= rollStat(diceRolled);

    console.log('Rolling WIS')
    character.wisdom= rollStat(diceRolled);

    console.log('Rolling CHA')
    character.charisma= rollStat(diceRolled);

    console.log(character);

}

function displayChar(char){

    char.race = undefined;
    char.hairColors = undefined;
    char.luck = undefined;
    char.eyeColors = undefined;

    console.log(`----------------------------`);

    console.log(`Name: ${char.name}`);

    console.log(`Eye Color: ${char.eyeColors}`);

    console.log(`Hair Color: ${char.hairColors}`);

    console.log(`Class: ${char.class}`);

    console.log(`Race: ${char.race}`);

    console.log(`STR: ${char.strength}`);

    console.log(`DEX: ${char.dexterity}`);

    console.log(`CON: ${char.constitution}`);

    console.log(`INT: ${char.intelligence}`);

    console.log(`WIS: ${char.wisdom}`);

    console.log(`CHA: ${char.charisma}`);

    console.log(`LUCK: ${char.luck}`);

    console.log(`----------------------------`);

}