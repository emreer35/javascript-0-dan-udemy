let value 
const numbers =[42,14,56,89,74,45,55]

// const numbers2 = new Array(1,2,3,4,5)

const langs = ["Python","CSS","JavaScript","C++"]
const a = ["merhaba",22,null,undefined,3,14]
// uzunluk
value = numbers.length
// indexlenme
value = numbers[0]
value = numbers[numbers.length -1]

// herhangi bir indexte yerini degistirme

numbers[2] = 1000
value = numbers
// index Of kacinci yerde 
value = numbers.indexOf(1000)
// arrayin sonuna deger ekleme - push

numbers.push(1050)

value = numbers.length

// Arrayin basina deger ekleme - unshift

numbers.unshift(9039)

value = numbers

// sonundan deger atma -pop

numbers.pop()
value=numbers

// basindan bir deger atma -shift
numbers.shift()
value=numbers

// 1.2.3. degeri atmak icin belli bir kismini atma - splice
numbers.splice(0,3)
value = numbers

// arrayi tam tersine cevirmek - reverse 1 2 3 4 => 4 3 2 1
numbers.reverse()
value=numbers

// siralama - sort
value = numbers.sort()

value = numbers.sort(function(x,y){ // kucukten buyuge
    return x-y
})

value = numbers.sort(function(x,y){ // buyukten kucuge
    return y-x
})







console.log(value)