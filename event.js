
function event(){

    var randomnum = (Math.random() * (3 - 0 + 1) ) << 0

    const Events = ['An increase interest in crypto from retail investors has increased the price of BTC!', 
    'A major crypto exchange has crashed due to misallocation of investor\'s funds!',
    'A new disease that is extremely infectious is spreading throughout the country. Officials have decided that shutting down the country is for the best interest of the country. Investors are running to withdraw their money!',
    'Bitcoin Havled, mining rewards reduced by 1/2, but bitcoin prices rose 20%']
    console.log(Events[randomnum])

    if (randomnum== 0){
        console.log('0')
        localStorage.setItem('ExchangeRate', parseInt(parseInt(localStorage.getItem('ExchangeRate'))*1.3))
        document.getElementById('Exchange').innerHTML = ' BTC = '+ parseInt(localStorage.getItem('ExchangeRate'))+ 'USD'
        
        setTimeout(function(){ 
            document.getElementById('Exchange').style.color ='green'
            document.getElementById('Exchange').style.fontSize = '40 px'

        }, 500); 
        document.getElementById('Exchange').style.color ='white'
        document.getElementById('Exchange').style.fontSize = '25 px'
        
       
    }
    if (randomnum== 1){
        console.log('1')
        localStorage.setItem('ExchangeRate', parseInt(parseInt(localStorage.getItem('ExchangeRate'))*.6))
        document.getElementById('Exchange').innerHTML = ' BTC = '+ parseInt(localStorage.getItem('ExchangeRate'))+ 'USD'
        
        setTimeout(function(){ 
            document.getElementById('Exchange').style.color ='red'
            document.getElementById('Exchange').style.fontSize = '40 px'

        }, 500); 
        document.getElementById('Exchange').style.color ='white'
        document.getElementById('Exchange').style.fontSize = '25 px'
    }
    if (randomnum== 3){
        console.log('3')
 
        
    }

    document.getElementById("Newspaper").innerHTML = Events[randomnum]


}

