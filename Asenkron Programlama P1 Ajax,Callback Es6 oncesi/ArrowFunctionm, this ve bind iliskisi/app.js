const person = {
    age:25,
    /*
    tellAge : function(){
        // buradaki this person->tellAge icinde oldugu icin person objesini gosteriyor
        console.log(this);
        console.log(this.age);
    }.bind(this)
    // buradaki this ise window objesini gosteriyor
    /*/
    // arrow functions ile thisi gosterirsek yukaridaki functions a bind baglamis gibi oluruz 
    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }

    
}
person.tellAge()