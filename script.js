//classes and races: only included basic classes/races
let dndClassName = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard', 'Blood Hunter'];
let dndRaceName = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];

//generates random class for players
let randomClass = Math.floor(Math.random() * dndClassName.length);
let dndClass = dndClassName[randomClass];

//generates random race for players
let randomRace = Math.floor(Math.random() * dndRaceName.length);
let dndRace = dndRaceName[randomRace];

//generates random skill points set for using 3 die
let strength = Math.floor((Math.random() * 16) + 3);
let dexterity = Math.floor((Math.random() * 16)+ 3) ;
let constitution = Math.floor((Math.random() * 16) + 3);
let intelligence = Math.floor((Math.random() * 16) + 3);
let wisdom = Math.floor((Math.random() * 16) + 3);
let charisma = Math.floor((Math.random() * 16) + 3);

//gives note on race specific abilities
function note() {
	var noteCase;
	switch(dndRace){
		case  "Dragonborn" :
		noteCase=document.querySelector(".note").innerHTML = "+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance";
		break;
		case "Dwarf" : 
		noteCase = document.querySelector(".note").innerHTML = "+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning";
		break;
		case "Elf" :
		noteCase = document.querySelector(".note").innerHTML = "+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance";
		break;
		case "Gnome" :
		noteCase =document.querySelector(".note").innerHTML =  "+2 Intelligence, Darkvision, Gnome Cunning";
		break;
		case "Half-Elf" :
		noteCase = document.querySelector(".note").innerHTML =  " +2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility";
		break;
		case "Halfling" :
		noteCase = document.querySelector(".note").innerHTML = "+2 Dexterity, Lucky, Brave, Halfling Nimbleness";
		break;
		case  "Half-Orc":
		noteCase = document.querySelector(".note").innerHTML = "+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless Endurance, Savage Attacks";
		break;
		case "Human":
		noteCase = document.querySelector(".note").innerHTML = "+1 to All Ability Scores, Extra Language";
		break;
		case "Tiefling" :
		noteCase = document.querySelector(".note").innerHTML = "+2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy";
		break;
		default :
		noteCase= document.querySelector(".note").innerHTML = "I don't know what's going on";

	}

}

//activates button
document.querySelector(".btn").addEventListener("click", function character() {
	document.querySelector(".clssName").innerHTML= "<p>Class:</p>" + dndClass;
	document.querySelector(".race").innerHTML = "<p>Race:</p>" + dndRace;
	document.querySelector(".strength").innerHTML = "<p>Strength:</p>" + strength;
	document.querySelector(".dexterity").innerHTML = "<p>Dexterity:</p>" + dexterity;
	document.querySelector(".constitution").innerHTML = "<p>Constitution:</p>" + constitution;
	document.querySelector(".intelligence").innerHTML = "<p>Intelligence:</p>" + intelligence;
	document.querySelector(".wisd").innerHTML = "<p>Widsom:</p>" + wisdom;
	document.querySelector(".charisma").innerHTML = "<p>Charisma:</p>" + charisma;
	note();
	})

