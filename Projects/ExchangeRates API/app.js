// select elements

const amountElement = document.getElementById("amount")
const firstCurrency = document.getElementById("firstCurrency")
const secondCurrency = document.getElementById("secondCurrency")


eventListener()

const currency = new Currency("USD","TRY")
const ui = new UI(firstCurrency,secondCurrency)

function eventListener(){
    // yazdigimiz her islem degisitigi zaman input eventimiz olusacak 
    amountElement.addEventListener("input",exchangeCurrency)
    // firstCurrency.onchange = function(){
            // currency.changeFirstCurreny(firstCurrency.option[firstCurrency.SelectedIndex[0])
            // ui.changeFirst()
    // }
    secondCurrency.onchange = function(){
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent)
        ui.changeSecond()
    }
}


function exchangeCurrency(){
    currency.changeAmount(amountElement.value)
    currency.exchange()
    .then((result) => {
        ui.displayResult(result);
    }).catch((err) => {
        console.error(err);
    });
}