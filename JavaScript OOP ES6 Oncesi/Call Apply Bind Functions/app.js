// Call Apply Bind 

// ***********************************************************************************
// Call
// ***********************************************************************************

const obj1 = {
    number1: 10,
    number2: 20
}
const obj2 = {
    number1:30,
    number2:40
}

function addNumberTotal(number3,number4){
    // console.log(this); // window objesini gosteriyor constrcuterin icinde olmadigimizdan windowu gstriyor
    // console.log(this.nubmer1); // undefined cunku hangi objeden gelecegini belirtmedik
    console.log(this.number1 + this.number2 + number3 + number4);
}
// addNumberTotal(100,200) // NaN cikti cunku this i hangi objeden alacagini belirtmedik

// call metodu ile obj1 ve obj2 deki degerleri alacagiz 

// () => obj,arg1,arg2,arg3 
// yukaridaki this yerine obj1 i kullanacak
// addNumberTotal.call(obj1,100,200) // 330
// addNumberTotal.call(obj2,100,200) // 370


// ***********************************************************************************
// Apply
// ***********************************************************************************
// () => obj1,[arg1,arg2,arg3]

// addNumberTotal.apply(obj1,[100,200]) // 330
// addNumberTotal.apply(obj2,[100,200]) // 370 

// ***********************************************************************************
// baska bir constructer i cagirmak icin call apply kullanabiliriz
// ***********************************************************************************

// ***********************************************************************************
// Bind
// ***********************************************************************************

//bind sayesinde bir function i bir objeye bagliyoruz
// genelde eventlerde kullanilir
// bind kopya bir fonksiyon uretir 
function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4
}

const copyFunc1 = getNumbersTotal.bind(obj1)
const copyFunc2 = getNumbersTotal.bind(obj2)

// console.log(copyFunc)
// console.dir(copyFunc1) // daha detayli bir goruntu
// console.dir(copyFunc2)

console.log(copyFunc1(100,200)); // 330
console.log(copyFunc2(100,200)); // 370



