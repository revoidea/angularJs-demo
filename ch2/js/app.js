var person = function(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}


function logPerson(person){
  
    console.log(person)
}
var john = new person('john','Doe');
logPerson(john);