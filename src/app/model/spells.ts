export interface Spell {
    name: string
    reversible: boolean
}

export const magicUserSpells: Spell[][] = [
    [
        // 1. Level
        { name: "charmPerson", reversible: false },
        { name: "detectMagic", reversible: false },
        { name: "floatingDisc", reversible: false },
        { name: "holdPortal", reversible: false },
        { name: "light", reversible: true },
        { name: "magicMissile", reversible: false },
        { name: "magicMouth", reversible: false },
        { name: "protectionFromEvil", reversible: true },
        { name: "readLanguages", reversible: false },
        { name: "shield", reversible: false },
        { name: "sleep", reversible: false },
        { name: "ventriloquism", reversible: false },
    ],
    // 2. Level
    [
        { name: "continualLight", reversible: true },
        { name: "detectEvil", reversible: true },
        { name: "detectInvisible", reversible: false },
        { name: "esp", reversible: false },
        { name: "invisibility", reversible: false },
        { name: "knock", reversible: false },
        { name: "levitate", reversible: false },
        { name: "locateObject", reversible: false },
        { name: "mirrorImage", reversible: false },
        { name: "phantasmalForce", reversible: false },
        { name: "web", reversible: false },
        { name: "wizardLock", reversible: false },
    ],
    // 3. Level
    [
        { name: "clairvoyance", reversible: false },
        { name: "darkvision", reversible: false },
        { name: "dispelMagic", reversible: false },
        { name: "fireball", reversible: false },
        { name: "fly", reversible: false },
        { name: "haste", reversible: true },
        { name: "holdPerson", reversible: false },
        { name: "invisibilityRadius10", reversible: false },
        { name: "lightningBolt", reversible: false },
        { name: "protectionFromEvilRadius10", reversible: true },
        { name: "protectionFromNormalMissiles", reversible: false },
        { name: "waterBreathing", reversible: false },
    ],
    // 4. Level
    [
        { name: "charmMonster", reversible: false },
        { name: "confusion", reversible: false },
        { name: "dimensionDoor", reversible: false },
        { name: "growthOfPlants", reversible: true },
        { name: "hallucinatoryTerrain", reversible: false },
        { name: "iceStorm", reversible: false },
        { name: "massmorph", reversible: false },
        { name: "polymorphOther", reversible: false },
        { name: "polymorphSelf", reversible: false },
        { name: "removeCurse", reversible: true },
        { name: "wallOfFire", reversible: false },
        { name: "wizardEye", reversible: false },
    ],
    // 5. Level
    [
        { name: "animateDead", reversible: false },
        { name: "cloudkill", reversible: false },
        { name: "conjureElemental", reversible: false },
        { name: "feeblemind", reversible: false },
        { name: "holdMonster", reversible: false },
        { name: "magicJar", reversible: false },
        { name: "passwall", reversible: false },
        { name: "telekinesis", reversible: false },
        { name: "teleport", reversible: false },
        { name: "wallOfStone", reversible: false },
    ],
    // 6. Level
    [
        { name: "antiMagicShell", reversible: false },
        { name: "deathSpell", reversible: false },
        { name: "disintegrate", reversible: false },
        { name: "fleshToStone", reversible: true },
        { name: "geas", reversible: true },
        { name: "invisibleStalker", reversible: false },
        { name: "lowerWater", reversible: false },
        { name: "projectedImage", reversible: false },
        { name: "reincarnate", reversible: false },
        { name: "wallOfIron", reversible: false },
    ]
];

export const clericSpells: Spell[][] = [
    // 1. Level
    [
        { name: "cureLightWounds", reversible: true },
        { name: "detectEvil", reversible: true },
        { name: "detectMagic", reversible: false },
        { name: "light", reversible: true },
        { name: "protectionFromEvil", reversible: true },
        { name: "purifyFoodAndWater", reversible: false },
        { name: "removeFear", reversible: true },
        { name: "resistCold", reversible: false },
    ],
    // 2. Level
    [
        { name: "bless", reversible: true },
        { name: "charmAnimal", reversible: false },
        { name: "findTraps", reversible: false },
        { name: "holdPerson", reversible: false },
        { name: "resistFire", reversible: false },
        { name: "silenceRadius15", reversible: false },
        { name: "speakWithAnimals", reversible: false },
        { name: "spiritualHammer", reversible: false },
    ],
    // 3. Level
    [
        { name: "continualLight", reversible: true },
        { name: "cureBlindness", reversible: false },
        { name: "cureDisease", reversible: true },
        { name: "growthOfAnimals", reversible: false },
        { name: "locateObject", reversible: false },
        { name: "removeCurse", reversible: true },
        { name: "speakWithDead", reversible: false },
        { name: "striking", reversible: false },
    ],
    // 4. Level
    [
        { name: "animateDead", reversible: false },
        { name: "createWater", reversible: false },
        { name: "cureSeriousWounds", reversible: true },
        { name: "dispelMagic", reversible: false },
        { name: "neutralizePoison", reversible: true },
        { name: "protectionFromEvilRadius10", reversible: true },
        { name: "speakWithPlants", reversible: false },
        { name: "sticksToSnakes", reversible: false },
    ],
    // 5. Level
    [
        { name: "commune", reversible: false },
        { name: "createFood", reversible: false },
        { name: "dispelEvil", reversible: false },
        { name: "insectPlague", reversible: false },
        { name: "quest", reversible: true },
        { name: "raiseDead", reversible: true },
        { name: "trueSeeing", reversible: false },
        { name: "wallOfFire", reversible: false },
    ],
    // 6. Level
    [
        { name: "animateObjects", reversible: false },
        { name: "bladeBarrier", reversible: false },
        { name: "findThePath", reversible: false },
        { name: "heal", reversible: true },
        { name: "regenerate", reversible: false },
        { name: "restoration", reversible: false },
        { name: "speakWithMonsters", reversible: false },
        { name: "wordOfRecall", reversible: false },
    ],
]