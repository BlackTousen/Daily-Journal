import { saveEntry } from "./JournalDataProvider.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".form-container")

const render = () => {
    contentTarget.innerHTML = `
    <form action="">
    <h2>Daily Journal</h2>
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="journalDate">
        <label for="journalConcepts">Concepts Covered</label>
        <input type="text" name="journalConcepts" id="journalConcepts" value="Concepts">
        <label for="journalEntry">Journal Entry</label>
        <input type="text" name="journalEntry" id="journalEntry" value="Entries">
        <label for="journalMood">Mood</label>
        <select id="journalMood" name="moods">
            <option value="happy">&#128522</option>
            <option value="sad">&#128531</option>
            <option value="angry">&#128545</option>
        <label for="journalSubmit">Record Journal Entry</label>
        <input type="submit" name="journalSubmit" id="journalSubmit" value="Record Journal Entry">
    </fieldset>
</form>
    `
    
}


eventHub.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    if (clickEvent.target.id === "journalSubmit") {
        console.log(" value",document.getElementById("journalConcepts").value)
      if (document.getElementById("journalConcepts").value === "Concepts" || document.getElementById("journalEntry") == "Entries") {
        window.alert("Must choose a suspect!");
      } else {
        // Make a new object representation of a note
        const newNote = {
          // Key/value pairs here
          text: document.getElementById("note-text").value,
          date: Date.now(),
          suspect: document.getElementById("note-suspect").value,
        };
  
        // Change API state and application state
        saveEntry(newNote);
      }
    }
  });
export const JournalForm = () => {
    render()
} 