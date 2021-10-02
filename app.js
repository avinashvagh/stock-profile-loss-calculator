//step-1  selection all the elements
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


//Ex-06
submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip, qty, curr);
}
// ex-05
function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        //loss logic here
        var loss = (initial -current) * quantity;
        var lossPercentage = (loss/ initial)*100;

        // console.log('hey  the loss is ${loss} and the percent is ${lossPercentage}%');
    } else if (current >initial) {
        //profit logic here
        var profit = (current- initial) * quantity;
        var profitPercentage = (profit/ initial)*100;

        // console.log('hey  the Profit is ${profit} and the percent is ${profitPercentage}%');

    } else {
        //the rest of logic goes here
        console.log("No pain no gain and no gain no pain");
    }
}

function showOutput(message){
    // switch (status) {
    //     case "PROFIT":
    //         outputBox.innerHTML = message;
    //         break;
    //     case "LOSS":
    //         outputBox.innerHTML = message;
    //         break;
    
    //     default:
    //         break;
    // }

    outputBox.innerHTML = message;
}


// calculateProfitAndLoss(100,10, 10);
// calculateProfitAndLoss(20,10, 100);
// calculateProfitAndLoss(10,10,10);

