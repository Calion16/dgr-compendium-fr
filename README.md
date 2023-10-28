# Degenesis: Rebirth - Compendium(FR) for Foundry VTT
Ce module contient un compendium en français comprenant les divers équipements du monde de Degenesis: Rebirth.

## INSTALLATION

Installez le module manuellement en entrant le chemin d'accès suivant dans l'URL du Manifest:

```
https://github.com/Calion16/DEGENESIS-Compendium-FR/releases/download/1.0.0/module.json
```
Pour que la fonction qui gère automatiquement l'état actuel des munitions s'exécute avec les nominations françaises des munitions, vous pouvez changer dans le fichier _config.js_ qui se trouve dans _Data\systems\degenesis\module_
**uniquement** cette partie du code:
```
DEGENESIS.calibers = {
  "50gl": "TYPES.Ammo.50gl",
  357: "TYPES.Ammo.357",
  44: "TYPES.Ammo.44",
  "410sh": "TYPES.Ammo.410sh",
  "410sl": "TYPES.Ammo.410sl",
  556: "TYPES.Ammo.556",
  jacket: "TYPES.Ammo.jacket",
  hollowPoint: "TYPES.Ammo.hollowPoint",
  flechette: "TYPES.Ammo.flechette",
  "46x30": "TYPES.Ammo.46x30",
  "9mm": "TYPES.Ammo.9mm",
  "5x30": "TYPES.Ammo.5x30",
  762: "TYPES.Ammo.762",
  14: "TYPES.Ammo.14",
  buckshot: "TYPES.Ammo.buckshot",
  rifleBarrel: "TYPES.Ammo.rifleBarrel",
  cartridge: "TYPES.Ammo.cartridge",
  grenade: "TYPES.Ammo.grenade",
  missle: "TYPES.Ammo.missle",
  fragger: "TYPES.Ammo.fragger",
  blackpowder: "TYPES.Ammo.blackpowder",
  leadbullet: "TYPES.Ammo.leadbullet",
  Ecube: "TYPES.Ammo.Ecube",
  arrow: "TYPES.Ammo.arrow",
  bolt: "TYPES.Ammo.bolt",
  petro: "TYPES.Ammo.petro",
  harpoon: "TYPES.Ammo.harpoon",
  nail: "TYPES.Ammo.nail",
  coal: "TYPES.Ammo.coal",
  boltcoal: "TYPES.Ammo.boltcoal",
  special: "TYPES.Ammo.special",
};
```
Par ceci:
```
DEGENESIS.calibers = {
  "50gl": ".50 GL « Tonnerre »",
  357: ".357 « Cuivre »",
  44: ".44 « Alpine »",
  "410sh": ".410 « Mini » Chevrotine",
  "410sl": ".410 « Mini » Grenaille",
  556: "5.56x45mm OEU « Digital »",
  jacket: "Balle Blindée HF",
  hollowPoint: "Balle Pointe Creuse HF",
  flechette: "5.56 mm Fléchette CHASSE",
  "46x30": "4.6x30mm",
  "9mm": "9mm OEU",
  "5x30": "5x30 mm Sans Douille",
  762: "7.62 « Poing »",
  14: "14mm « Danger »",
  buckshot: "Calibre 12 (Chevrotine)",
  rifleBarrel: "Calibre 12 (Munition à fusil)",
  cartridge: "Cartouche",
  cartridgeSPTH: "Cartouche SP 4016 TH",
  cartridgeEXEG: "Cartouche Aérosol d’EX/EG-1",
  cartridgeBN: "Cartouche Bande noire",
  cartridgeGC: "Cartouche Gaz chloré",
  cartridgeCI: "Cartouche Irritant",
  cartridgeMP: "Cartouche Marqueur phéromonal",
  cartridgePF: "Cartouche Poussière de feu",
  cartridgefreon: "Cartouche au Fréon",
  grenade: "Grenade",
  missle: "Missile",
  fragger: "Balle à fragmentation",
  leadbullet: "Balle en plomb",
  blackpowder: "Poudre Noire",
  Ecube: "E-Cube",
  arrow: "Flèche",
  bolt: "Carreau",
  petro: "Bidon de pétro",
  harpoon: "Harpon",
  nail: "Clou",
  coal: "Charbon",
  boltcoal: "Carreau et Charbon",
  special: "Spécial",
};
```

## COPYRIGHT

**Degenesis®** is **™ SIXMOREVODKA Studio GmbH**. All rights reserved. This module contains information from ***Katharsys*** and ***Artifacts*** that have been used with permission from the publisher. All used content from the handbook belong to the respective authors.
Édition française par **EDGE-STUDIO**. Ce module contient des traductions de ***Katharsys*** et ***Artefacts*** qui ont été utilisées avec l'autorisation de l'éditeur.

**For personal, non-commercial use only**. If you have paid for this module, you have been scammed.
