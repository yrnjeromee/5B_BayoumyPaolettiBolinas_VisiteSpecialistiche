const tabella = document.getElementById("tabella");
const submit = document.getElementById("submit");
const card = document.getElementById("card");
const psico = document.getElementById("psico");
const onco = document.getElementById("onco");
const orto = document.getElementById("orto");
const neuro = document.getElementById("neuro");
const tipologieVisite = ["Cardiologia", "Psicologia", "Oncologia", "Ortopedia", "Neurologia"];
let prenotazioni = {};
let tipologiaCorrente = tipologieVisite[0];
//let dataCorrente = moment().startOf('isoWeek');


let data = "";
let ora = 0;
let nome = "";
let diz = {};

submit.onclick = () =>{
    data = document.getElementById("data").value;
    ora = document.getElementById("ora").value;
    nome = document.getElementById("nome").value;
    let lista = [data,ora];
    if(diz[0] === 1){
        lista.push("Cardiologia");
    }
    if(diz[1] === 1){
        lista.push("Psicologia");
    }
    if(diz[2] ===1){
        lista.push("Oncologia");
    }
    if(diz[3] === 1){
        lista.push("Ortologia");
    }
    if(diz[4] === 1){
        lista.push("Neurologia");
    }
    prenotazioni[lista] = nome;
    console.log(prenotazioni);
}

card.onclick = () =>{
    diz[0] = 1;
    diz[1] = 0;
    diz[2] = 0;
    diz[3] = 0;
    diz[4] = 0;
    //card.classlist.add("active")
}

psico.onclick = () =>{
    diz[0] = 0;
    diz[1] = 1;
    diz[2] = 0;
    diz[3] = 0;
    diz[4] = 0;
    //psico.classlist.add("active")
}

onco.onclick = () =>{
    diz[0] = 0;
    diz[1] = 0;
    diz[2] = 1;
    diz[3] = 0;
    diz[4] = 0;
    //onco.classlist.add("active")
}

orto.onclick = () =>{
    diz[0] = 0;
    diz[1] = 0;
    diz[2] = 0;
    diz[3] = 1;
    diz[4] = 0;
    //orto.classlist.add("active")
}

neuro.onclick = () =>{
    diz[0] = 0;
    diz[1] = 0;
    diz[2] = 0;
    diz[3] = 0;
    diz[4] = 1;
    //neuro.classlist.add("active")
}

const myToken = '1d4744d3-cd6c-41a9-8ece-f5e071a27cfd';
const myKey = 'Visite_specialistiche';

template = `
<table class = "tabella">
    <tr>
        <td></td>
        <th>Intestazione 2</th>
        <th>Intestazione 3</th>
        <th>Intestazione 4</th>
        <th>Intestazione 5</th>
        <th>Intestazione 6</th>
    </tr>
</table>`;

function createTable () {
    tabella.innerHTML = template;
};

const scarica = () => {
    return new Promise((resolve) => {
        fetch('https://ws.progettimolinari.it/cache/get', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                key: myToken,
            },
            body: JSON.stringify({
          key: myKey,
        }),
    }).then((r) => r.json())
    .then((r) => {
        lista = r.result;
        console.log(r.result);
        resolve();
    });
});
};

const carica = () => {
    return new Promise((resolve) => {
        fetch('https://ws.progettimolinari.it/cache/set', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                key: myToken,
            },
            body: JSON.stringify({
                key: myKey,
                value: lista,
            }),
        }).then((r) => r.json())
        .then((r) => {
            console.log(r.result);
            console.log(r.result);
            resolve();
        });
    });
};

//setInterval(scarica, 300000);
createTable();