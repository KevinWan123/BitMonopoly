function event() {
    const weightedEvents = [
        { event: 'An increase in interest in crypto from retail investors has increased the price of BTC!', weight: 3.03 }, // Positive
        { event: 'A major crypto exchange has crashed due to misallocation of investor\'s funds!', weight: 1 }, // Negative
        { event: 'A new disease that is extremely infectious is spreading throughout the country. Officials have decided that shutting down the country is for the best interest of the country. Investors are running to withdraw their money!', weight: 1 }, // Negative
        { event: 'Bitcoin Halved, mining rewards reduced by 1/2, but bitcoin prices rose 20%', weight: 2.02 }, // Positive
        { event: 'A new regulation is announced, making Bitcoin transactions easier and more secure. The price of BTC rises by 15%.', weight: 3.03 }, // Positive
        { event: 'A famous CEO tweets about Bitcoin, and the price spikes by 10%.', weight: 3.03 }, // Positive
        { event: 'A large-scale hack has drained several Bitcoin wallets, causing a panic sell-off.', weight: 1 }, // Negative
        { event: 'A major tech company has announced they will accept Bitcoin as payment, boosting its price.', weight: 2.02 }, // Positive
        { event: 'An environmental report highlights Bitcoin mining\'s energy consumption, leading to stricter regulations.', weight: 1 }, // Negative
        { event: 'A major government announces plans to adopt Bitcoin as legal tender, causing a price surge.', weight: 3.03 }, // Positive
        { event: 'The stock market crashes, causing investors to flock to Bitcoin as a safe-haven asset.', weight: 2.02 }, // Positive
        { event: 'A major Bitcoin mining operation shuts down, reducing supply and causing a price increase.', weight: 2.02 }, // Positive
        { event: 'An influential financial analyst declares Bitcoin a bubble, leading to a price drop.', weight: 1 }, // Negative
        { event: 'A new scaling solution improves Bitcoin transaction speed, attracting more users.', weight: 2.02 } // Positive
    ];

    // Create a weighted pool
    const weightedPool = [];
    weightedEvents.forEach((item, index) => {
        for (let i = 0; i < Math.floor(item.weight * 100); i++) { // Scale weights for finer control
            weightedPool.push(index);
        }
    });

    // Randomly pick an event based on weight
    const randomnum = weightedPool[Math.floor(Math.random() * weightedPool.length)];

    // Map events
    const Events = weightedEvents.map(item => item.event);
    console.log(Events[randomnum]);

    let currentRate = parseInt(localStorage.getItem('ExchangeRate')) || 100; 

    // Minimum price
    const minPrice = 50;

    // Adjust the current rate based on the event
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
        currentRate = parseInt(currentRate * 1.2); 
    } else if (randomnum === 4) {
        console.log('Regulation Announcement Event');
        currentRate = parseInt(currentRate * 1.15);
    } else if (randomnum === 5) {
        console.log('CEO Tweet Event');
        currentRate = parseInt(currentRate * 1.1);
    } else if (randomnum === 6) {
        console.log('Hack Event');
        currentRate = parseInt(currentRate * 0.8);
    } else if (randomnum === 7) {
        console.log('Tech Company Bitcoin Adoption Event');
        currentRate = parseInt(currentRate * 1.25);
    } else if (randomnum === 8) {
        console.log('Environmental Report Event');
        currentRate = parseInt(currentRate * 0.9);
    } else if (randomnum === 9) {
        console.log('Government Bitcoin Legal Tender Event');
        currentRate = parseInt(currentRate * 1.4);
    } else if (randomnum === 10) {
        console.log('Stock Market Crash Event');
        currentRate = parseInt(currentRate * 1.3);
    } else if (randomnum === 11) {
        console.log('Mining Operation Shutdown Event');
        currentRate = parseInt(currentRate * 1.2);
    } else if (randomnum === 12) {
        console.log('Analyst Declares Bubble Event');
        currentRate = parseInt(currentRate * 0.85);
    } else if (randomnum === 13) {
        console.log('Scaling Solution Event');
        currentRate = parseInt(currentRate * 1.2);
    }

    // Ensure price doesn't drop below the minimum
    if (currentRate < minPrice) {
        currentRate = minPrice;
    }

    // Update the Exchange Rate
    localStorage.setItem('ExchangeRate', currentRate);
    document.getElementById('Exchange').innerHTML = 'BTC = ' + currentRate + ' USD';

    // Visual feedback for the event
    setTimeout(function () {
        if (randomnum === 0 || randomnum === 4 || randomnum === 5 || randomnum === 7 || randomnum === 9 || randomnum === 10 || randomnum === 11 || randomnum === 13) {
            document.getElementById('Exchange').style.color = 'green';
            document.getElementById('Exchange').style.fontSize = '40px';
        } else {
            document.getElementById('Exchange').style.color = 'red';
            document.getElementById('Exchange').style.fontSize = '40px';
        }
    }, 500);

    // Reset the display style
    document.getElementById('Exchange').style.color = 'white';
    document.getElementById('Exchange').style.fontSize = '25px';

    // Display the event in the newspaper
    document.getElementById("Newspaper").innerHTML = Events[randomnum];
}
