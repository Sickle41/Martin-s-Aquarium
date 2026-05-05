import { database } from "./aquariumData.js";

export const locationList = () => {
    const locations = database.locations;

    let htmlString = "<article class=\"locations\">\n";

    for (const location of locations) {
        htmlString += `
            <section class=\"location\">
                Name: ${location.name}<br>
                Country: ${location.country}<br>
                Description: ${location.description}
            </section>
        `;
    }

    htmlString += `</article>`;

    return htmlString;
};
