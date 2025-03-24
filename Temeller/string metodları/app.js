let value

const firstname = "Louis"
const lastname = "Armstrong"

const langs = "Java,Python,C++"

value = firstname + lastname
value = firstname + " " + lastname

value = "Yunus Emre "
// value = value + "Er" aşağıdaki gibi
value += "Er" // value = value + "Er"

value = firstname.length //uzunluğu
value = lastname.length
value = firstname.concat(" ",lastname," ", "Caz") // firstname + " " + ...

value = firstname.toLowerCase() // küçük harf
value = firstname.toUpperCase() // büyük harf

value = firstname[0] // L karakteri
value = firstname[2]
value = firstname[4]
value = firstname[firstname.length - 1] // S karakteri sondan 1.
value = firstname[firstname.length - 2] // i karakteri sondan 2.

// Index Of kaçıncı indexte
 
value = firstname.indexOf("L")
value = firstname.indexOf("o")
value = firstname.indexOf("l") // -1 değeri karşımıza çıkıyor çünkü küçük l yok



// Char At indexte kaçıncı karakter var

value = firstname.charAt(0)
value = firstname.charAt(firstname.length -1)

// Split bölmek

value = langs.split(",") // ayrı bir elemanmış gibi gösterir

// Replace yerini değiştirme 

value = langs.replace("Python","CSS")


// Includes içerir mi var mı sorgulama

value = langs.includes("Java") // bulursa true
value = langs.includes("CSS") // bulamazsa false 





console.log(value)