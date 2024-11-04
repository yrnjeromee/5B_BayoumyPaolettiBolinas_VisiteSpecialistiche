const createTable = () =>{
    idTabella.innerHTML = tabella
}

const idTabella = document.getElementById("tabella")

const tabella = `<table class="tabella">
                <td>
                </td>
                <th>
                    Lunedì 
                </th>
                <th>
                    Martedì
                </th>
                <th>
                    Mercoledì
                </th>
                <th>
                    Giovedì
                </th>
                <th>
                    Venerdì
                </th>
                <tr><td class="miao">8</td></tr>
                <tr><td class="miao">9</td></tr>
                <tr><td class="miao">10</td></tr>
                <tr><td class="miao">11</td></tr>
                <tr><td class="miao">12</td></tr>
              </table>`

createTable()