let value
const programmer = {
    name : "Yunus Emre Er",
    age : 23,
    email : "yunus_emre_er34@hotmail.com",
    langs : ["C++","Python","MSSQL"],

    adress : {
        city : "Izmir",
        district : "Bornova"
    },

    work : function(){
        console.log("Programci calisiyor...")

    }
}

value = programmer

value = programmer.email // bunu kullan
value = programmer["email"]
value = programmer.langs
value = programmer.adress.city
programmer.work()

const programmers = [
    {name : "yunus emre",age:23},
    {name : "sueda ovalioglu",age:22}
]
value = programmers[0]
value = programmers[1].name


console.log(value)

