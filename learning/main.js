let x = 1;
let y = 1;
let currencyX = 'USD';
let currencyY = 'USD';


function getExchangeMultiplier(currency1, currency2) {
    // get excharge rate from Currecy 1 to 2
    return 1.4;
}

function getDisplayValue(currency1, currency2) {
    let rate = getExchangeMultiplier(currency1, currency2);
    y = x * rate;
}