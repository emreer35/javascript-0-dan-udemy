const name = "Yunus emre er"
const department = "Software Engineer"
const salary = 4000




// const a = "Name: " + name +"\n" + "department: " + department +"\n" + "Salary: " + salary

// const a = `name:${name}\nDepartment:${department}\nSalary:${salary}` 
// console.log(a)

// asagidaki yukaridakinin aynisi

// const html = "<ul>" +
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>"+
//              "</ul>"
// asagidakini kullanmak daha easy "+" yok  
function a(){
    return "Merhaba"
}
const html = 
            `
            <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 4 }</li>
            <li>${a()} </li>
            </ul>
            `

document.body.innerHTML = html





