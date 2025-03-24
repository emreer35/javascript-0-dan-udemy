// duragan method , classin icinde yazarsak obje olsuturmasak dahi kullanabiliyoruz
// Static Methods
/*
class Matematik {
    
    cube(x){
        console.log(x*x*x);
    }
}
const math = new Matematik()
math.cube(3)
console.log(math);
*/
// ***********************************************************************************
// static, obje olusturmadan kullanilir
// ***********************************************************************************
class Matematik {
    
    static cube(x){
        console.log(x*x*x); // static ile yazildiginda class in proto suna yazilmiyor 
    }
}
// const math = new Matematik()
// Matematik.cube(3)
// console.log(math);
// Math.cube(4)

// Object.create 

console.log(Math.sqrt(4)); // static olarak davranir


