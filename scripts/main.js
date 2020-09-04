import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalListEntry.js"
import { JournalList } from "./JournalList.js"

const eventHub = document.querySelector(".form-container")

console.log(useJournalEntries())
EntryListComponent()
JournalList()