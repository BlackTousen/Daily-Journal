import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalListEntry.js"
import { JournalList } from "./JournalList.js"
import { JournalForm } from "./JournalForm.js"

const eventHub = document.querySelector(".form-container")

console.log(useJournalEntries())
getEntries()
.then(_ => {
    JournalForm()
    JournalList()
    // EntryListComponent()
})