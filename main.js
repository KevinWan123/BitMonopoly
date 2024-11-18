
function mineBTC(){
    document.getElementById('click1').play()
    localStorage.setItem("Bit",parseFloat(localStorage.getItem("Bit"))+.1)

    


    let mystring = "BTC: "+ parseFloat(localStorage.getItem("Bit")).toFixed(3)
    document.getElementById('btc').innerHTML = mystring.bold();

    // Check achievements
    checkAchievements();


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
        checkAchievements();
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
// Achievement Dictionary
const achievements = {
    1: { unlocked: false, message: "Bought your first item!", condition: () => totalItemsBought() >= 1 },
    2: { unlocked: false, message: "Earned 10 BTC!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 10 },
    3: { unlocked: false, message: "Owned 10 items!", condition: () => totalItemsBought() >= 10 },
    4: { unlocked: false, message: "Earned 100 BTC!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 100 },
    5: { unlocked: false, message: "Owned 5 Calculators!", condition: () => itemCalc.quantity >= 5 },
    6: { unlocked: false, message: "Owned 3 Raspberry Pis!", condition: () => itemRspi.quantity >= 3 },
    7: { unlocked: false, message: "Bought a GPU Miner!", condition: () => itemGpu.quantity >= 1 },
    8: { unlocked: false, message: "Generated 100 Watts of Power!", condition: () => totalPowerGenerated() >= 100 },
    9: { unlocked: false, message: "Earned 1,000 BTC in Total!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 1000 },
    10: { unlocked: false, message: "Bought an AI Miner!", condition: () => itemAiMiner.quantity >= 1 },
    11: { unlocked: false, message: "Bought an ASIC Miner!", condition: () => itemAsic.quantity >= 1 },
    12: { unlocked: false, message: "Owned 3 Mining Farms!", condition: () => itemFarm.quantity >= 3 },
    13: { unlocked: false, message: "Bought a Quantum Miner!", condition: () => itemQuantumMiner.quantity >= 1 },
    14: { unlocked: false, message: "Earned 10,000 BTC!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 10000 },
    15: { unlocked: false, message: "Reached 10,000 Watts of Power!", condition: () => totalPowerGenerated() >= 10000 },
    16: { unlocked: false, message: "Bought a Hydro Plant!", condition: () => itemHydroPlant.quantity >= 1 },
    17: { unlocked: false, message: "Owned 5 AI Miners!", condition: () => itemAiMiner.quantity >= 5 },
    18: { unlocked: false, message: "Bought a Space Miner!", condition: () => itemSpaceMiner.quantity >= 1 },
    19: { unlocked: false, message: "Earned 50,000 BTC!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 50000 },
    20: { unlocked: false, message: "Owned 50 items in total!", condition: () => totalItemsBought() >= 50 },
    21: { unlocked: false, message: "Earned 100,000 BTC!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 100000 },
    22: { unlocked: false, message: "Owned 100 items in Total!", condition: () => totalItemsBought() >= 100 },
    23: { unlocked: false, message: "Generated 1,000 Watts of Power!", condition: () => totalPowerGenerated() >= 1000 },
    24: { unlocked: false, message: "Owned 10 Mining Farms!", condition: () => itemFarm.quantity >= 10 },
    25: { unlocked: false, message: "Bought a Geothermal Plant!", condition: () => itemGeothermalPlant.quantity >= 1 },
    26: { unlocked: false, message: "Earned 500,000 BTC!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 500000 },
    27: { unlocked: false, message: "Reached 100,000 Watts of Power!", condition: () => totalPowerGenerated() >= 100000 },
    28: { unlocked: false, message: "Bought a Solar Plant!", condition: () => itemSolarPlant.quantity >= 1 },
    29: { unlocked: false, message: "Own 10 Quantum Miners!", condition: () => itemQuantumMiner.quantity >= 10 },
    30: { unlocked: false, message: "Earned 1,000,000 BTC!", condition: () => parseFloat(localStorage.getItem("Bit")) >= 1000000 }
};


function totalItemsBought() {
    return itemCalc.quantity + itemRspi.quantity + itemGpu.quantity + itemAsic.quantity +
        itemFarm.quantity + itemHydroPlant.quantity + itemQuantumMiner.quantity + itemAiMiner.quantity + itemSpaceMiner.quantity;
}

function totalPowerGenerated() {
    return itemCalc.watt * itemCalc.quantity +
        itemRspi.watt * itemRspi.quantity +
        itemGpu.watt * itemGpu.quantity +
        itemAsic.watt * itemAsic.quantity +
        itemFarm.watt * itemFarm.quantity +
        itemHydroPlant.watt * itemHydroPlant.quantity +
        itemQuantumMiner.watt * itemQuantumMiner.quantity +
        itemAiMiner.watt * itemAiMiner.quantity +
        itemSpaceMiner.watt * itemSpaceMiner.quantity;
}

function checkAchievements() {
    Object.keys(achievements).forEach((id) => {
        const achievement = achievements[id];
        if (!achievement.unlocked && achievement.condition()) {
            unlockAchievement(id, achievement.message);
        }
    });
}

// Unlock an achievement
function unlockAchievement(id, message) {
    achievements[id].unlocked = true;

    // Update the achievement list in the UI
    const achievementElement = document.getElementById(`achievement${id}`);
    if (achievementElement) {
        achievementElement.innerText = achievementElement.innerText.replace("(Locked)", "(Unlocked)");
        achievementElement.classList.add("unlocked");
    }

    // Show a popup for the unlocked achievement
    showAchievementPopup(message);
}

// Show Achievement Popup
function showAchievementPopup(message) {
    const popup = document.getElementById('achievementPopup');
    const popupText = document.getElementById('achievementText');
    popupText.innerText = message;
    popup.style.display = 'block';
}

// Close Achievement Popup
function closePopup() {
    document.getElementById('achievementPopup').style.display = 'none';
}
