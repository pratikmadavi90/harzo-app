const ctx = document.getElementById('salesChart');

new Chart(ctx, {

type: 'bar',

data: {

labels: ['Jan','Feb','Mar','Apr','May','Jun'],

datasets: [{

label: 'Sales',

data: [12000,19000,15000,22000,30000,27000],

backgroundColor: 'green'

}]

}

});