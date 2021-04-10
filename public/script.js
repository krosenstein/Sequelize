let chart = new CanvasJS.Chart("chartContainer", {
    title: {
        text: "Meals and Macros"
    },
    axisX: {
        valueFormatString: "DDD"
    },
    axisY: {
        prefix: "$"
    },
    toolTip: {
        shared: true
    },
    data: [{
        type: "stackedBar",
        name: "Meals",
        showInLegend: "true",
        dataPoints: [
            { x: getMeal(), y: getMacro()}
        ]
    }]
})

async function getMeal() {
    const endpoint = '/api/meals/';

    const request = await fetch(endpoint);
    const result = await request.json();

    const meals = [];
    meals.push(result.data);

    randomNum = Math.random * meals.length;
    return meals[random.num];
}

async function getMacro(meal) {
    const endpoint = '/api/macros/';

    const request = await fetch(endpoint);
    const result = await request.json();

    const macros = [];
    macros.push(result.data);

    macros.forEach((item) => {
        if (item.meal_id == meal) {
            return item;
        }
    })
}

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