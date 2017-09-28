var Student = /** @class */ (function () {
    //studentName: string;
    function Student(studentName) {
        this.studentName = studentName;
        var studentGreet = "Hello, " + studentName;
        this.GetGreeting(studentGreet);
    }
    Student.prototype.GetGreeting = function (studentGreet) {
        alert(studentGreet);
    };
    return Student;
}());
var hello = new Student("John");
