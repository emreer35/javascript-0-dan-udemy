document.getElementById("ajax").addEventListener("click",getAllEmployees)


function getAllEmployees(){
    const xhr = new XMLHttpRequest()
    // console.log(xhr);
    xhr.open("GET","employees.json",true)
    xhr.send()
    xhr.onload = function(){
        if(this.status == 200){
            const tbody = document.getElementById("employees")
            const employees = JSON.parse(this.responseText);
            employees.forEach(employee => {
                tbody.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
                `
            });
        }
    }
}   