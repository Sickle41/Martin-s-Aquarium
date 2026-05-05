import { database } from "./aquariumData.js";

export const tipList = () => {
    // Generate an HTML representation of each tip
    const tips = database.tips

    let tipHTML = `<ul class="tips">`
    
    for (const tip of tips) {
        tipHTML += `<li class="tip">${tip.topic}: ${tip.text}</li>`
    }

    tipHTML += "</ul>"

    return tipHTML
};