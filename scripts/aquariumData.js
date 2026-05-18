export const database = {
const fish = [
  {
    name: "Dory",
    species: "Blue Tang",
    length: 15,
    location: "Great Barrier Reef",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Blue_tang_%28Paracanthurus_hepatus%29_01.jpg"
  },
  {
    name: "Bubbles",
    species: "Clownfish",
    length: 6,
    location: "Coral Sea",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Common_clownfish.jpg"
  },
  {
    name: "Shadow",
    species: "Blacktip Reef Shark",
    length: 30,
    location: "Indian Ocean",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Blacktip_reef_shark.jpg"
  },
  {
    name: "Finley",
    species: "Goldfish",
    length: 5,
    location: "Freshwater Pond",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Common_goldfish.jpg"
  },
  {
    name: "Splash",
    species: "Betta Fish",
    length: 9,
    location: "Thailand Rivers",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Betta_splendens.jpg"
  },
  {
    name: "Marlin",
    species: "Swordfish",
    length: 25,
    location: "Atlantic Ocean",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Xiphias_gladius.jpg"
  },
  {
    name: "Pebble",
    species: "Pufferfish",
    length: 12,
    location: "Pacific Ocean",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Arothron_hispidus2.jpg"
  },
  {
    name: "Coral",
    species: "Angelfish",
    length: 8,
    location: "Caribbean Sea",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Queen_Angelfish.jpg"
  },
  {
    name: "Titan",
    species: "Tuna",
    length: 45,
    location: "Mediterranean Sea",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Bluefin-big.jpg"
  },
  {
    name: "Ripple",
    species: "Koi",
    length: 20,
    location: "Japanese Garden Pond",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Koi_fish.jpg"
  },
  {
    name: "Echo",
    species: "Catfish",
    length: 18,
    location: "Mississippi River",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ictalurus_punctatus.jpg"
  },
  {
    name: "Flash",
    species: "Barracuda",
    length: 21,
    location: "Gulf of Mexico",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Great_Barracuda.jpg"
  },
  {
    name: "Sunny",
    species: "Yellow Tang",
    length: 10,
    location: "Hawaiian Reefs",
    diet: "Herbivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Zebrasoma_flavescens_Luc_Viatour.jpg"
  },
  {
    name: "Drift",
    species: "Lionfish",
    length: 27,
    location: "Red Sea",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Pterois_volitans_Manado-e.jpg"
  },
  {
    name: "Wave",
    species: "Salmon",
    length: 14,
    location: "Alaskan Rivers",
    diet: "Omnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Salmo_salar.jpg"
  }
],
    tips: [
        {
            topic: "Water Temperature",
            text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
        },
                {
            topic: "Water Changes",
            text: "Perform regular partial water changes (25-50% weekly) to remove nitrates and replenish essential minerals."
        },
        {
            topic: "Filtration",
            text: "Ensure your aquarium has adequate filtration, including mechanical, chemical, and biological filtration."
        },
        {
            topic: "Feeding",
            text: "Feed your fish small amounts multiple times a day, only what they can consume in a few minutes."
        },
        {
            topic: "Tank Size",
            text: "Choose an appropriately sized tank for the type and number of fish you plan to keep to prevent overcrowding."
        },
        {
            topic: "Quarantine New Fish",
            text: "Always quarantine new fish in a separate tank for at least two weeks before introducing them to your main aquarium."
        }

    ],
    locations: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
        },
                {
            name: "Red Sea",
            country: "Egypt",
            description: "The Red Sea is known for its stunning coral reefs and diverse marine ecosystem."
        },
        {
            name: "Amazon River",
            country: "Brazil",
            description: "The Amazon River is the largest river by discharge volume of water in the world, home to unique freshwater species."
        },
        {
            name: "Lake Malawi",
            country: "Malawi",
            description: "Lake Malawi is an African Great Lake and is known for its cichlid species, which are endemic to the lake."
        },
        {
            name: "Mesoamerican Barrier Reef System",
            country: "Belize",
            description: "The Mesoamerican Barrier Reef System is the second-largest barrier reef in the world, stretching along the coasts of Mexico, Belize, Guatemala, and Honduras."
        },
        {
            name: "Florida Keys",
            country: "United States",
            description: "The Florida Keys are a coral cay archipelago in the southeastern United States, famous for its abundant marine life and reef ecosystems."
        }

    ]
}