import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
//import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
//const locationHTML = locationList()

// Render each HTML string to the correct DOM element

const Aquarium = `
    <h1>Fish</h1>
    ${fishHTML}
    `

const fishesInTheSea = document.querySelector("#fishList")

fishesInTheSea.innerHTML = Aquarium

const TipBoard = `
    <h2>Tips</h2>
    ${tipHTML}
    `
const reminders = document.querySelector("#tipList")

reminders.innerHTML = TipBoard