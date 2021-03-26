async function getData() {
    const endpoint = '/api/dining/';
    const request = await fetch(endpoint);
    const result = await request.json();

    const diner = [];
    diner.push(result.data);

    const DiningHallData = diner[0];
    console.table(DiningHallData);
    const target = document.querySelector('#finalTable');

    DiningHallData.forEach((item) => {
        const id = item.hall_id;
        const name = item.hall_name;
        const address = item.hall_address;

        const appendItem = document.createElement('tr');
        appendItem.innerHTML = '<td>${id}</td> <td>${name}</td> <td>${address}</td>';
        target.append(appendItem);
        console.log('ID: ' + id + ', Name: ' + name + ', Address: ' + address);
    });
}

async function windowActions() {
    getData();
}

window.onload = windowActions;