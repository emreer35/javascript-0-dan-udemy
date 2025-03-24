let value 

const now = new Date() // suanki tarihi gosteriyor
const date1 = new Date("3-29-2001 21:30:00")

const date2 = new Date("March 29 2001")

const date3 = new Date("3-29-2001")

value = date1 

value = date1.getMonth() // kacinci ayda oldugunu gosterir 0 dan baslar
value = date1.getDate() // tarihini gosterir 1 den baslar
value = date1.getDay() // gununu gosterir pazardan baslar baslangici 0 olarak kabul eder 


value = date1.getHours()
value = date1.getMinutes()
value = date1.getSeconds()
value = date1.getMilliseconds()

//tarihlerimizi degistirebiliriz

date1.setMonth (8)
date1.setDate(19)
date1.setFullYear(2002)
date1.setHours(20)
date1.setMinutes(15)
date1.setSeconds(5)


value = date1



console.log(value)
