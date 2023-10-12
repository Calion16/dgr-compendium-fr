import { configcaliber } from "../../module/config.js";

Hooks.once("ready", function () {
  if (game.system.id === "degenesis") {
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
      cartridge1: "Cartouche SP 4016 TH",
      cartridge2: "Cartouche Aérosol d’EX/EG-1",
      cartridge3: "Cartouche Bande noire",
      cartridge4: "Cartouche Gaz chloré",
      cartridge5: "Cartouche Irritant",
      cartridge6: "Cartouche Marqueur phéromonal",
      cartridge7: "Cartouche Poussière de feu",
      freoncartridge: "Cartouche au Fréon",
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
  }
});