const tipologieVisite = ["Cardiologia", "Psicologia", "Oncologia", "Ortopedia", "Neurologia"];
let prenotazioni = {};
let tipologiaCorrente = tipologieVisite[0];  // Tipologia di visita selezionata di default
let dataCorrente = moment().startOf('isoWeek'); // Data di inizio della settimana corrente (lunedì)