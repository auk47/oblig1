const form = document.querySelector("#ticket-form");
const ticketList = document.querySelector("#ticket-list");
const fornavnInput = document.querySelector("#fornavn");
const etternavnInput = document.querySelector("#etternavn");
const tlfnrInput = document.querySelector("#tlfnr");
const epostInput = document.querySelector("#epost");
const filmInput = document.querySelector("#film");
const antallInput = document.querySelector("#antall");
const navnError = document.querySelector("#navn-error");
const filmError = document.querySelector("#film-error");
const antallError = document.querySelector("#antall-error");
const slettAlleBilletter = document.querySelector("#slett-alle-billetter");

let tickets = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    navnError.textContent = "";
    filmError.textContent = "";
    antallError.textContent = "";

    let fornavn = fornavnInput.value;
    let etternavn = etternavnInput.value;
    let tlfnr = tlfnrInput.value;
    let epost = epostInput.value;
    let film = filmInput.value;
    let antall = antallInput.value;

    if (!fornavn) {
        navnError.textContent = "Navn er påkrevd";
    }
    if (!etternavn) {
        navnError.textContent = "Navn er påkrevd";
    }
    if (!tlfnr) {
        navnError.textContent = "Navn er påkrevd";
    }
    if (!epost) {
        navnError.textContent = "Navn er påkrevd";
    }
    if (!film) {
        filmError.textContent = "Film er påkrevd";
    }
    if (!antall) {
        antallError.textContent = "Antall billetter er påkrevd";
    }

    if (fornavn && etternavn && tlfnr && epost && film && antall) {
        let ticket = { fornavn, etternavn, tlfnr, epost, film, antall };
        tickets.push(ticket);
        renderTickets();
        form.reset();
    }
});

slettAlleBilletter.addEventListener("click", () => {
    tickets = [];
    renderTickets();
});

function renderTickets() {
    ticketList.innerHTML = "";
    tickets.forEach((ticket) => {
        let ticketItem = document.createElement("li");
        ticketItem.textContent = `Navn: ${ticket.fornavn} ${ticket.etternavn} | Tlf.nr: ${ticket.tlfnr} | Epost: ${ticket.epost} | Film: ${ticket.film} | Antall billetter: ${ticket.antall}`;
        ticketList.appendChild(ticketItem);
    });
}
