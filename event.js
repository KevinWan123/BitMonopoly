function event() {
    const weightedEvents = [
        { event: 'An increase in interest in crypto from retail investors has increased the price of BTC!', weight: 3 }, // Positive
        { event: 'A major crypto exchange has crashed due to misallocation of investor\'s funds!', weight: 1 }, // Negative
        { event: 'A new disease that is extremely infectious is spreading throughout the country. Officials have decided that shutting down the country is for the best interest of the country. Investors are running to withdraw their money!', weight: 1 }, // Negative
        { event: 'Bitcoin Halved, mining rewards reduced by 1/2, but bitcoin prices rose 20%', weight: 2 }, // Positive
        { event: 'A new regulation is announced, making Bitcoin transactions easier and more secure. The price of BTC rises by 15%.', weight: 3 }, // Positive
        { event: 'A famous CEO tweets about Bitcoin, and the price spikes by 10%.', weight: 3 }  // Positive
    ];


    const weightedPool = [];
    weightedEvents.forEach((item, index) => {
        for (let i = 0; i < item.weight; i++) {
            weightedPool.push(index);
        }
    });


    const randomnum = weightedPool[Math.floor(Math.random() * weightedPool.length)];


    const Events = weightedEvents.map(item => item.event);
    console.log(Events[randomnum]);

    let currentRate = parseInt(localStorage.getItem('ExchangeRate')) || 100; 

    // mIN PRICE 50 USD
    const minPrice = 50;

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
    setTimeout(function () {
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
