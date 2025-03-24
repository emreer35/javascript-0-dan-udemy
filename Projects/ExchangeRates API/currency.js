class Currency{

    constructor(secondCurrency){
        this.secondCurrency = secondCurrency
        this.url = "http://data.fixer.io/api/latest?access_key=5eda288a50ff9aac46a9010fedb51ae5"

        this.amount = null
    }

    exchange(){
        return new Promise((resolve,reject)=> {
            fetch(this.url)
            .then(response => response.json())
            .then(data => {
            const parity = data.rates[this.secondCurrency]
            const amount2 = Number(this.amount)
            let total = amount2 * parity
            resolve(total);
            
        })
        .catch(err => reject(err))
        })
        
        
    }
    // degisen degerleri degistirmek icin 
    changeAmount(amount){
        this.amount = amount
    }
        
    // normalde first currency de vardi ama bu apide yok 
    // changeFirstCurrency(firstCurrency){
    //     this.firstCurrency = firstCurrency
    // }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency
    }

}