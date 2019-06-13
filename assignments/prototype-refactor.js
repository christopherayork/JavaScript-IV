/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*//*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
        this.attack = attributes.attack;
    }

    takeDamage(damage) {
        this.healthPoints -= damage;
        console.log(`${this.name} has ${this.healthPoints} health left.`);
        if(this.healthPoints <= 0) {
            console.log(this.destroy()); // this will display before the damage message
        }
        return `${this.name} took damage.`
    }

}

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
        this.hasHeroWeapon = attributes.hasHeroWeapon;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }

    destroy() {
        return `${this.name} has been defeated!`;
    }

    Attack(target) {
        if(typeof target) {
            let damage = this.attack;
            if(this.hasHeroWeapon === 1) damage += 10;
            console.log(`${this.name} attacks ${target.name} with his ${this.weapons[0]}.`);
            target.takeDamage(damage);
        }
    }
}

class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }

}

class Villain extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }

}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    attack: 8,
    hasHeroWeapon: 0,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    attack: 10,
    hasHeroWeapon: 0,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    attack: 8,
    hasHeroWeapon: 0,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const swordHero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 4,
    },
    healthPoints: 30,
    attack: 10,
    hasHeroWeapon: 1,
    name: 'Link',
    team: 'Kokiri Forest',
    weapons: [
        'Master Sword',
        'Long Sword',
    ],
    language: 'Hyrulian',
});

const evilVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 35,
    attack: 12,
    hasHeroWeapon: 0,
    name: 'Ganondorf',
    team: 'Gerudo Kingdom',
    weapons: [
        'Broad Claymore',
        'Light Blast',
    ],
    language: 'Hyrulian',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(`The hero, ${swordHero.name}, enters the battlefield.`);
console.log(`The villain, ${evilVillain.name}, stands there with an ominous grin.`);
console.log(`${evilVillain.name} brandishes his ${evilVillain.weapons[0]}!`);
console.log(`${swordHero.name} stands ready, the ${swordHero.weapons[0]} glows and gives him power!`);
console.log(`The two clash, deciding the fate of the lands!!`);

let counter = 0;
while(swordHero.healthPoints > 0 && evilVillain.healthPoints > 0 && counter < 5) {
    swordHero.Attack(evilVillain);
    if(evilVillain.healthPoints > 0) evilVillain.Attack(swordHero);
    counter++;
}
