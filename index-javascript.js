const tipologieVisite = ["Cardiologia", "Psicologia", "Oncologia", "Ortopedia", "Neurologia"];
let prenotazioni = {};
let tipologiaCorrente = tipologieVisite[0];  
let dataCorrente = moment().startOf('isoWeek');

const tabella = document.getElementById("tabella");

const myToken = '1d4744d3-cd6c-41a9-8ece-f5e071a27cfd';
const myKey = 'Visite_specialistiche';

template = `
<table>
    <tr>
        <th>Intestazione 1</th>
        <th>Intestazione 2</th>
        <th>Intestazione 3</th>
        <th>Intestazione 4</th>
        <th>Intestazione 5</th>
        <th>Intestazione 6</th>
    </tr>
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
        <td>Dato 3</td>
        <td>Dato 4</td>
        <td>Dato 5</td>
        <td>Dato 6</td>
    </tr>
    <tr>
        <td>Dato 7</td>
        <td>Dato 8</td>
        <td>Dato 9</td>
        <td>Dato 10</td>
        <td>Dato 11</td>
        <td>Dato 12</td>
    </tr>
    <tr>
        <td>Dato 13</td>
        <td>Dato 14</td>
        <td>Dato 15</td>
        <td>Dato 16</td>
        <td>Dato 17</td>
        <td>Dato 18</td>
    </tr>
    <tr>
        <td>Dato 19</td>
        <td>Dato 20</td>
        <td>Dato 21</td>
        <td>Dato 22</td>
        <td>Dato 23</td>
        <td>Dato 24</td>
    </tr>
    <tr>
        <td>Dato 25</td>
        <td>Dato 26</td>
        <td>Dato 27</td>
        <td>Dato 28</td>
        <td>Dato 29</td>
        <td>Dato 30</td>
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