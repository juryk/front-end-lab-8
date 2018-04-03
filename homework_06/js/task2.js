let ipResponse;

let getIP = () => {
    let value = document.getElementById('ipInput').value;
    sendRequest(value);
}

let showLoadingAnimation = () => {
    document.getElementById("loading").hidden = false;
}
let hideLoadingAnimation = () => {
    document.getElementById("loading").hidden = true;
}
let showValidationButton = () => {
    document.getElementById("validateResponse").hidden = false;
}
let hideValidationButton = () => {
    document.getElementById("validateResponse").hidden = true;
}
let showMessage = (msg) => {
    let message = document.getElementById("message");
    if(message.hidden){
        message.innerHTML = msg;
        message.hidden = false;
    }
}
let hideMessage = () => {
    let message = document.getElementById("message");
    if(!message.hidden){
        message.hidden = true;
    }
}
let hideTable = () => {
    document.getElementById("ipDetails").innerHTML = "";
}

let createTable = obj => {
    let table = document.getElementById("ipDetails");
    let tbody = document.createElement('tbody');
    for (let key in obj){
        let row = document.createElement('tr');
        let keyCell = document.createElement('td');
        keyCell.textContent = key.toUpperCase().replace(/_/g, " ");
        let valueCell = document.createElement('td');
        valueCell.textContent = obj[key];
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    showValidationButton();
}

let sendRequest = (ip) => {
    let url = `https://ipapi.co/${ip}/json/`;
    document.getElementById("ipDetails").innerHTML = '';
    hideMessage();
    hideValidationButton();
    showLoadingAnimation();
    http.get(url)
        .then(response => {
            hideLoadingAnimation();
            ipResponse = JSON.parse(response);
            if(ipResponse.error){
                showMessage(ipResponse.reason)
            } else {
                createTable(ipResponse);
            }
        })
        .catch(err => {
            console.log(err);
        });
}

let validateResponse = () => {
    let url = `https://shrouded-garden-94580.herokuapp.com/`;
    hideTable();
    hideValidationButton();
    showLoadingAnimation();
    http.post(url, ipResponse)
        .then(response => {
            hideLoadingAnimation();
            showMessage(response);
        })
}
