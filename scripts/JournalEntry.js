const eventHub = document.querySelector(".form-container")

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.date}: ${entry.concept} - ${entry.entry}
        </section>
    `
}