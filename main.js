
function mineBTC(){
    document.getElementById('click1').play()
    localStorage.setItem("Bit",parseFloat(localStorage.getItem("Bit"))+.001)

    


    let mystring = "BTC: "+ parseFloat(localStorage.getItem("Bit")).toFixed(3)
    document.getElementById('btc').innerHTML = mystring.bold();
   


}

function Calculator(){

    let wallet = parseFloat(localStorage.getItem("Bit"));
    let price = itemCalc['price'];
    if (wallet == price || wallet> price ){
        console.log('Purchase Sucessfull')
        localStorage.setItem("Bit",parseFloat(localStorage.getItem('Bit'))-price)
        itemCalc.quantity +=1
        console.log(itemCalc.quantity)
    }
    document.getElementById('btc').innerHTML = 'BTC: '+ parseFloat(localStorage.getItem('Bit')).toFixed(3)
    document.getElementById('Calculator').value = 'Calculator(0.1BTC): '+ parseInt(itemCalc.quantity)
    localStorage.setItem('clacQuan', itemCalc.quantity)


    }

function Rpi(){

    let wallet = parseFloat(localStorage.getItem("Bit"));
    let price = itemRspi['price'];
    if (wallet == price || wallet> price ){
        console.log('Purchase Sucessfull')
        localStorage.setItem("Bit",parseFloat(localStorage.getItem('Bit'))-price)
        itemRspi.quantity +=1
        console.log(itemRspi.quantity)
    }
    document.getElementById('btc').innerHTML = 'BTC: '+ parseFloat(localStorage.getItem('Bit')).toFixed(3)
    document.getElementById('pi').value = 'Raspberry Pi(1 BTC): '+ parseInt(itemRspi.quantity)
    localStorage.setItem('rasQuan', itemRspi.quantity)
}
function sellBTC(){

}

function changeCalc(){
    document.getElementById('btc').innerHTML = 'BTC: '+ parseFloat(localStorage.getItem('Bit')).toFixed(3)
    document.getElementById('Calculator').value = 'Calculator(0.1BTC): '+ parseInt(itemCalc.quantity)
    itemCalc.quantity = parseInt(localStorage.getItem("calcQuan"));
}

function income(){
    let calcQuan = parseInt(localStorage.getItem("calcQuan"));
    let rasQuan = parseInt(localStorage.getItem("rasQuan"));
    let netIncome = calcQuan*calcQuan.income + rasQuan*rasQuan.income;

    localStorage.setItem("Income",netIncome)

    

}

