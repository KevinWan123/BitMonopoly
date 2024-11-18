function event() {
    var randomnum = (Math.random() * (5 - 0 + 1)) << 0;  // Expanded event range

    const Events = [
        'An increase in interest in crypto from retail investors has increased the price of BTC!', 
        'A major crypto exchange has crashed due to misallocation of investor\'s funds!',
        'A new disease that is extremely infectious is spreading throughout the country. Officials have decided that shutting down the country is for the best interest of the country. Investors are running to withdraw their money!',
        'Bitcoin Halved, mining rewards reduced by 1/2, but bitcoin prices rose 20%',
        'A new regulation is announced, making Bitcoin transactions easier and more secure. The price of BTC rises by 15%.', // New event 1
        'A famous CEO tweets about Bitcoin, and the price spikes by 10%.', // New event 2
    ];

    console.log(Events[randomnum]);

    let currentRate = parseInt(localStorage.getItem('ExchangeRate'));

    // Ensure Bitcoin price doesn't go below a minimum value (e.g., 1 USD)
    const minPrice = 1;
    
    if (randomnum === 0) {
        console.log('Interest in Crypto Event');
        currentRate = parseInt(currentRate * 1.3);
    } else if (randomnum === 1) {
        console.log('Exchange Crash Event');
        currentRate = parseInt(currentRate * 0.6);
    } else if (randomnum === 2) {
        console.log('Country Shutdown Event');
        currentRate = parseInt(currentRate * 0.7);
    } else if (randomnum === 3) {
        console.log('Bitcoin Halved Event');
        currentRate = parseInt(currentRate * 1.2); // Price rises after halving
    } else if (randomnum === 4) {
        console.log('Regulation Announcement Event');
        currentRate = parseInt(currentRate * 1.15);  // Increase by 15%
    } else if (randomnum === 5) {
        console.log('CEO Tweet Event');
        currentRate = parseInt(currentRate * 1.1);  // Increase by 10%
    }

    // Ensure Bitcoin price cannot go below the minimum value
    if (currentRate < minPrice) {
        currentRate = minPrice;
    }

    // Update the Exchange Rate and display it
    localStorage.setItem('ExchangeRate', currentRate);
    document.getElementById('Exchange').innerHTML = 'BTC = ' + currentRate + ' USD';

    // Display visual feedback based on the event
    setTimeout(function() {
        if (randomnum === 0 || randomnum === 4 || randomnum === 5) {
            // Green feedback for price increase events
            document.getElementById('Exchange').style.color = 'green';
            document.getElementById('Exchange').style.fontSize = '40px';
        } else if (randomnum === 1 || randomnum === 2) {
            // Red feedback for price decrease events
            document.getElementById('Exchange').style.color = 'red';
            document.getElementById('Exchange').style.fontSize = '40px';
        }
    }, 500);


    document.getElementById('Exchange').style.color = 'white';
    document.getElementById('Exchange').style.fontSize = '25px';
    document.getElementById("Newspaper").innerHTML = Events[randomnum];
}
