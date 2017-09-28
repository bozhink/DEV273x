class Student {
	//studentName: string;
		
	constructor (private studentName: string){
		var studentGreet: string = "Hello, " + studentName;
		this.GetGreeting(studentGreet);	
	}	
	GetGreeting (studentGreet: string){
		alert(studentGreet);
	}	
} 
var hello = new Student("John");
