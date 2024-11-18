// Get the current Bitcoin price from localStorage
const currentBitcoinPrice = parseFloat(localStorage.getItem('ExchangeRate'));  // Retrieve price from localStorage

// Define the months for the x-axis
const months = ['January', 'February', 'March', 'April', 'May'];  // Example months

// Create an array with the current Bitcoin price for each month
const bitcoinPrices = months.map(() => currentBitcoinPrice);  // Set each month to the same Bitcoin price

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',  // Line chart to show price over time
    data: {
        labels: months,  // Months as x-axis labels
        datasets: [{
            label: 'Bitcoin Price (USD)',
            data: bitcoinPrices,  // Bitcoin prices for each month (same price for now)
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Bitcoin Price Over Time',  // Title of the chart
                font: {
                    size: 18,
                    weight: 'bold'
                },
                color: '#000',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,  // Prevent starting from zero
                title: {
                    display: true,
                    text: 'Price in USD'
                }
            }
        }
    }
});

