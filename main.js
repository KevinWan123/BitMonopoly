
function mineBTC(){
    document.getElementById('click1').play()
    localStorage.setItem("Bit",parseFloat(localStorage.getItem("Bit"))+.1)

    


    let mystring = "BTC: "+ parseFloat(localStorage.getItem("Bit")).toFixed(3)
    document.getElementById('btc').innerHTML = mystring.bold();
   


}
function Calculator() {
    purchaseItem(itemCalc, 'calcQuan', 'Calculator', '🧮 Calculator (0.1 BTC): ');
}

function Rpi() {
    purchaseItem(itemRspi, 'rasQuan', 'pi', '🍓 Raspberry Pi (1 BTC): ');
}

function Gpu() {
    purchaseItem(itemGpu, 'gpuQuan', 'gpu', '🎮 GPU Miner (10 BTC): ');
}

function Asic() {
    purchaseItem(itemAsic, 'asicQuan', 'asic', '💻 ASIC Miner (50 BTC): ');
}

function Farm() {
    purchaseItem(itemFarm, 'farmQuan', 'farm', '🏭 Mining Farm (300 BTC): ');
}

function HydroPlant() {
    purchaseItem(itemHydroPlant, 'hydroQuan', 'hydro', '🌊 Hydro Plant (1000 BTC): ');
}

function QuantumMiner() {
    purchaseItem(itemQuantumMiner, 'quantumQuan', 'quantum', '⚛️ Quantum Miner (5000 BTC): ');
}

function AiMiner() {
    purchaseItem(itemAiMiner, 'aiQuan', 'ai', '🤖 AI Miner (10000 BTC): ');
}

function SpaceMiner() {
    purchaseItem(itemSpaceMiner, 'spaceQuan', 'space', '🚀 Space Miner (50000 BTC): ');
}

// Generalized purchase function
function purchaseItem(item, storageKey, elementId, buttonText) {
    // Retrieve current item quantity and wallet balance
    item['quantity'] = parseInt(localStorage.getItem(storageKey)) || 0;
    let wallet = parseFloat(localStorage.getItem("Bit")) || 0;

    // Check if the player has enough BTC to purchase the item
    if (wallet >= item['price']) {
        console.log(`Purchase Successful for ${storageKey}`);
        
        // Deduct price from wallet and increment item quantity
        localStorage.setItem("Bit", wallet - item['price']);
        item["quantity"] += 1;

        // Update localStorage with new item quantity
        localStorage.setItem(storageKey, item["quantity"]);

        // Update displayed BTC balance
        document.getElementById('btc').innerHTML = 'BTC: ' + parseFloat(localStorage.getItem('Bit')).toFixed(3);

        // Update item button with the new quantity
        document.getElementById(elementId).value = buttonText + item['quantity'];

        // Recalculate income
        income();
    } else {
        console.log(`Not enough BTC to purchase ${storageKey}`);
    }

    // Debugging
    console.log(localStorage.getItem(storageKey), storageKey);
}
function sellBTC(){

}




function income() {
    console.log('Income initialized');

    // Define all item keys in an array for easy iteration
    const items = ["calcQuan", "rasQuan", "gpuQuan", "asicQuan", "farmQuan", "hydroQuan", "quantumQuan", "aiQuan", "spaceQuan"];
    const itemObjects = [itemCalc, itemRspi, itemGpu, itemAsic, itemFarm, itemHydroPlant, itemQuantumMiner, itemAiMiner, itemSpaceMiner];

    let netIncome = 0;

    // Loop through each item to calculate total income
    items.forEach((key, index) => {
        let quantity = parseInt(localStorage.getItem(key)) || 0; // Default to 0 if null
        let income = itemObjects[index]["income"];
        netIncome += quantity * income;
    });

    console.log("Total income:", netIncome);

    // Save and display the income
    localStorage.setItem("Income", netIncome);
    document.getElementById('income').innerHTML = "Income: " + netIncome.toFixed(3) + " BTC";
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

    


