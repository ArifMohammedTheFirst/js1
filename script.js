


// using this to declare a bunch of these at the same time - arif mohammed

var money = 0,
    pennies = 0,
    nickels = 0,
    dimes = 0,
    quart = 0,
    penniesValue = 0,
    nickelValue = 0,
    dimeValue = 0,
    quartersValue = 0;
    

///Screen
function initialize() {
    //this sets the totals 
    penniesTotal = document.getElementById("penniesTotal");
    nickelsTotal = document.getElementById("nickelsTotal");
    dimeTotal = document.getElementById("dimeTotal");
    quarterTotal = document.getElementById("quarterTotal");

    //nums of each coins set
    numOfPennies = document.getElementById("numOfPennies");
    numOfNickels = document.getElementById("numOfNickels");
    numOfDimes = document.getElementById("numOfDimes");
    numOfQuarters = document.getElementById("numOfQuarters");

    

    sumMoney = document.getElementById("sumMoney");
}

//changes screen values from inputs 
function adaptiveChange() {
    numOfPennies.innerHTML = "Pennies: " + pennies;
    numOfNickels.innerHTML = "Nickels: " + nickels;
    numOfDimes.innerHTML = "Dimes: " + dimes;
    numOfQuarters.innerHTML = "Quarters: " + quart;
    penniesTotal.innerHTML = "Total Sum of Pennies:$ " + penniesValue;
    nickelsTotal.innerHTML = "Total Sum of Nickels:$ " + nickelValue;
    dimeTotal.innerHTML = "Total Sum of Dimes:$ " + dimeValue;
    quarterTotal.innerHTML = "Total Sum of Quarters:$ " + quartersValue;

    sumMoney.innerHTML = "Total Sum of all coins:$ " + (penniesValue + nickelValue + dimeValue + quartersValue);
}


//functions for adding coins

function Penny() {
    if(pennies >= 0){
        pennies += 1;
        penniesValue += 0.01;
        penniesValue = Math.round(100*penniesValue)/100;
        money += 0.01;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}
function Nickel() {
    if(nickels >= 0){
        nickels += 1;
        nickelValue += 0.05;
        nickelValue = Math.round(100*nickelValue)/100;
        money += 0.05;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}
function Dime() {
    if(dimes >= 0){
        dimes += 1;
        dimeValue += 0.10;
        dimeValue = Math.round(100*dimeValue)/100;
        money += 0.10;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}
function Quarter() {
    if(quart >= 0){
        quart += 1;
        quartersValue += 0.25;
        quartersValue = Math.round(100*quartersValue)/100;
        money += 0.25;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}





/// function for subtracting essnetially the opposite
function Pennyminus() {
    if(pennies > 0){
        pennies -= 1;
        penniesValue -= 0.01;
        penniesValue = Math.round(100*penniesValue)/100;
        money -= 0.01;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}

function Nickelminus() {
    if(nickels > 0){
        nickels -= 1;
        nickelValue -= 0.05;
        nickelValue = Math.round(100*nickelValue)/100;
        money -= 0.05;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}

function Dimeminus() {
    if(dimes > 0){
        dimes -= 1;
        dimeValue -= 0.10;
        dimeValue = Math.round(100*dimeValue)/100;
        money -= 0.10;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}

function Quarterminus() {
    if(quart > 0){
        quart += 1;
        quartersValue -= 0.25;
        quartersValue = Math.round(100*quartersValue)/100;
        money -= 0.25;
        money = Math.round(100*money)/100;
    }
    adaptiveChange();
}

