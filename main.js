
function mineBTC(){
    document.getElementById('click1').play()
    localStorage.setItem("Bit",parseFloat(localStorage.getItem("Bit"))+.1)

    


    let mystring = "BTC: "+ parseFloat(localStorage.getItem("Bit")).toFixed(3)
    document.getElementById('btc').innerHTML = mystring.bold();
   


}

function Calculator(){
    itemCalc['quantity'] = parseInt(localStorage.getItem("calcQuan"))
    

    let wallet = parseFloat(localStorage.getItem("Bit"));
    let price = itemCalc['price'];
    if (wallet == price || wallet> price ){
        console.log('Purchase Sucessfull')
        localStorage.setItem("Bit",parseFloat(localStorage.getItem('Bit'))-price)
        itemCalc['quantity'] +=1
  
    }
    console.log("the item", itemCalc['quantity'])
    document.getElementById('btc').innerHTML = 'BTC: '+ parseFloat(localStorage.getItem('Bit')).toFixed(3)
    document.getElementById('Calculator').value = 'Calculator(0.1BTC): '+ parseInt(itemCalc['quantity'])
    localStorage.setItem('calcQuan', itemCalc["quantity"])
    console.log('Item Quan', itemCalc['quantity'], localStorage.getItem("calcQuan"))
    income()


    }

function Rpi(){

    itemRspi['quantity'] = parseInt(localStorage.getItem('rasQuan')) 
    let wallet = parseFloat(localStorage.getItem("Bit"));
    let price = itemRspi['price'];
    if (wallet == price || wallet> price ){
        console.log('Purchase Sucessfull')
        localStorage.setItem("Bit",parseFloat(localStorage.getItem('Bit'))-price)
        itemRspi["quantity"]+=1

    }
    document.getElementById('btc').innerHTML = 'BTC: '+ parseFloat(localStorage.getItem('Bit')).toFixed(3)
    document.getElementById('pi').value = 'Raspberry Pi(1.5 BTC): '+ parseInt(itemRspi['quantity'])
    localStorage.setItem('rasQuan', itemRspi["quantity"])
    console.log(localStorage.getItem('rasQuan'),'rasQuan')
    income()
}
function sellBTC(){

}




function income(){
    console.log('Income initialized')
    let calcQuan = parseInt(localStorage.getItem("calcQuan"));
    let rasQuan = parseInt(localStorage.getItem("rasQuan"));
    let netIncome = calcQuan*itemCalc["income"] + rasQuan*itemRspi["income"];

    
    console.log("my income",calcQuan,itemCalc["income"],rasQuan,itemRspi["income"])

    localStorage.setItem("Income",netIncome)
    document.getElementById('income').innerHTML = "Income:" + netIncome.toFixed(3) +"BTC"

    

}

function sell(){
    console.log("selling btc")
    if (localStorage.getItem('Bit')>1){ 
        localStorage.setItem('Bit', parseFloat(localStorage.getItem('Bit'))-1)
        document.getElementById('btc').innerHTML = 'BTC: '+ parseFloat(localStorage.getItem('Bit'))
        console.log('fiat', localStorage.getItem('Fiat'))

        localStorage.setItem("Fiat",  parseFloat(localStorage.getItem("Fiat")) + parseFloat(localStorage.getItem('ExchangeRate')))
        document.getElementById('Balance').innerHTML = "Balance = $"+ parseFloat(localStorage.getItem("Fiat"))
        
    }
}

function buy(){
    console.log("buying btc")
    if(parseFloat(localStorage.getItem('Fiat'))>parseFloat(localStorage.getItem('ExchangeRate'))) {
        localStorage.setItem('Fiat', parseFloat(localStorage.getItem('Fiat'))-parseFloat(localStorage.getItem('ExchangeRate')))
        localStorage.setItem('Bit', parseFloat(localStorage.getItem("Bit"))+1)

        document.getElementById('btc').innerHTML = 'BTC: '+ parseFloat(localStorage.getItem('Bit'))
        document.getElementById('Balance').innerHTML = "Balance = $"+ parseFloat(localStorage.getItem("Fiat"))


    }
}

    


