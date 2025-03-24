let value
//  data type conversions to strings

// value= String(123)
// value= String(3.14)
// value = String(true)
// value = String(false)
// value = String(function() {console.log()})
// value = String([1,2,3,4])


// value = (10).toString()
// value = (3.14).toString()

// data type conversions to numbers

value = Number("123") 
value = Number(null) //içi boş
value = Number(undefined) // not a number
value = Number("hello world") //not a number
value = Number(function(){console.log()}) //not a number
value = Number([1,2,3,4]) // not a number

value= Number("3.14")
value= parseFloat("3.14")

value = parseInt("3")


const a = "hello world" + 34 //hello world34

const b = "53"+ 23  // 5323 number conversion to string

const c = Number("53")+23 // toplar 

console.log(c)
console.log(typeof c)

console.log(b)
console.log(typeof b)

console.log(a)
console.log(typeof a)








console.log(value)
console.log(typeof value)
