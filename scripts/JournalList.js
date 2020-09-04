import { getEntries, useJournalEntries } from "./JournalDataProvider.js"


const eventHub = document.querySelector(".form-container")
const contentTarget = document.getElementById("entryLog")

const render = entriesCollection => {
    console.log("Rendering Journal List")
    contentTarget.innerHTML = `
            ${
                entriesCollection.map((cObj) => {
                    const obj = cObj.name
                    return `<div id="${cObj.id}" class="journalEntry">${cObj.date} - ${cObj.concept}: ${cObj.entry}</div>`
                }).join("")
            }
    `
}
export const JournalList = () =>{
    getEntries()
    .then(_ => {
        const entries = useJournalEntries()
        render(entries)
    })

}