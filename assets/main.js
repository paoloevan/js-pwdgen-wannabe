// Chiedi nome utente

const nomeUtente = prompt("Qual è il tuo nome?");

// Chiedi cognome utente

const cognomeUtente = prompt("Qual è il tuo cognome?");

// Chiedi colore preferito

const colorePreferito = prompt("Qual è il tuo colore preferito?");

// Scrivi sulla pagina nomecognomecolorepreferito22

const currentYear = Number(2022);

document.getElementById("password").innerHTML = nomeUtente + cognomeUtente + colorePreferito + (currentYear - 2000);