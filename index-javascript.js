const tipologieVisite = ["Cardiologia", "Psicologia", "Oncologia", "Ortopedia", "Neurologia"];
let prenotazioni = {};
let tipologiaCorrente = tipologieVisite[0];  
let dataCorrente = moment().startOf('isoWeek');