import { mostHolyFish, soldierFish, regularFish } from './aquariumData.js';

const fishConverter = (fishObject) => {
    const fishHTML = `
        <section class="fish-card">
            <img class="fish-card__image" src="${fishObject.image}" alt="${fishObject.name}" />
            <h3 class="fish-card__name">${fishObject.name}</h3>
            <p class="fish-card__species">${fishObject.species}</p>
            <p class="fish-card__length">Length: ${fishObject.length} cm</p>
            <p class="fish-card__location">Found in: ${fishObject.location}</p>
            <p class="fish-card__diet">Diet: ${fishObject.diet}</p>
        </section>
    `
    return fishHTML
}

export const fishList = () => {
    const holyFish = mostHolyFish();
    const soldiers = soldierFish();
    const regulars = regularFish();

    let allFishHTML = "<h2>Holy Fish</h2>";
    for (const fish of holyFish) {
        allFishHTML += fishConverter(fish);
    }

    allFishHTML += "<h2>Soldier Fish</h2>";
    for (const fish of soldiers) {
        allFishHTML += fishConverter(fish);
    }

    allFishHTML += "<h2>Regular Fish</h2>";
    for (const fish of regulars) {
        allFishHTML += fishConverter(fish);
    }

    return allFishHTML;
};