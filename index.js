class Employee{
    employeeId;
    name;
    department;

    constructor(employeeId, name, department) {
       this.employeeId = employeeId;
      this.name = name;
       this.department = department;
    }

    showdetails() {
       document.getElementById("p1").innerHTML += `
       employeeId = ${this.employeeId}<br>
       name = ${this.name}<br>
       department = ${this.department}<br>
       ` 
    }
}

const Emp1 = new Employee('001', "Aadya", "IT");
Emp1.showdetails();


//---------------------second program---------------------

class Book{
    title;
    author;
    year_published;

    constructor(title,author,year_published) {
        this.title = title;
        this.author = author;
        this.year_published = year_published;

    }

    showdetails() {
        document.getElementById("p2").innerHTML += `
        title = ${this.title} <br>
        author = ${this.author} <br>
        year = ${this.year_published} <br>
        `
    }
}

const myBook = new Book("Two States", "Chetan Bhagat", "2009"); 
myBook.showdetails();

//------------Rectangle--------

class Rectangle{
    length;
    width;
    area;

    constructor(length,width) {
        this.length = length;
        this.width = width;
        this.area = 0;
       
    }
    
    calculateArea () {
       this.area = this.length * this.width;
    }
    showdetails() {
        document.getElementById("p3").innerHTML += `
        Area of the rectangle = ${this.area} <br>
        `
    }
}

const Rect1 = new Rectangle(20,10); 
Rect1.calculateArea();
Rect1.showdetails();


//-------------Circle----------

class Shape {
    constructor() {
        this.area = 0;
    }

 showarea() {
    return this.area;
}
}
class Circle extends Shape {
    constructor (radius) {
        super();
        this.radius = radius;
    }

    calculatearea() {
        this.area = 3.14 * this.radius * this.radius;
    }
}
    const myCircle = new Circle(5);
    myCircle.calculatearea();
    document.getElementById("p4").innerHTML = "Area = " + myCircle.showarea();
   

    //-----------------------person----------

    class person {
       constructor (name,age) {
        this.name= name;
        this.age = age;
       }
    }

    class Student extends person {
        constructor(name, age, studentId) {
            super(name, age);
            this.studentId = studentId;
        }

        showdetails() {
             document.getElementById("p5").innerHTML +=`
             name = ${this.name} <br>
             age = ${this.age} <br>
             studentId = ${this.studentId} <br>
             `;
        }
    }

    const Stud = new Student("Aadya", 21, 2602);
    Stud.showdetails();

    //--------------Employee-------------

    class Employee1 {
        constructor(name, employeeNo) {
            this.name = name;
            this.employeeNo = employeeNo;
        }
    }

    class Manager extends Employee1 {
        constructor(name, employeeNo, department) {
            super(name, employeeNo);
            this.department = department;
        }

        showdetails() {
            document.getElementById("p6").innerHTML +=`
            name = ${this.name} <br>
            employeeNo = ${this.employeeNo} <br>
            department = ${this.department} <br>
            `;
       }

    }

    const manager1 =  new Manager("Tushar", '001', "Process");
    manager1.showdetails();