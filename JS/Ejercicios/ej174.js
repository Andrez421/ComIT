const json = `{
    "character": {
      "name": "Aria the Brave",
      "class": "Warrior",
      "level": 10,
      "hp": 120,
      "mana": 50,
      "equipment": {
        "weapon": {
          "name": "Flaming Sword",
          "damage": 35,
          "element": "Fire"
        },
        "armor": {
          "name": "Dragon Scale Shield",
          "defense": 50
        }
      },
      "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
          "item": "Mystic Gem",
          "type": "Artifact",
          "effect": "Boosts magic power"
        }
      ],
      "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
      ]
    }
  }`;

const character = JSON.parse(json).character;
console.log(character);

console.log("\nCharacter Info:");

console.log(`\nName: ${character.name}`);
console.log(`Class: ${character.class}`);
console.log(`Level: ${character.level}`);

console.log("\nInventory:");
character.inventory.forEach(item => {
    console.log(`Item: ${item.item}, Effect: ${item.effect}`);
});

console.log("\nQuests In Progress:");
character.quests
    .filter(quest => quest.status === "In Progress")
    .forEach(quest => {
        console.log(`Quest: ${quest.name}`);
    });
