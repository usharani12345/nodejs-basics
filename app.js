function myfun(a,b){
	return a+b;
}
console.log(myfun(2,3));

function Employee(firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}
var emp = new Employee("usha","rani");
console.log(emp.firstname);
console.log(emp.lastname);