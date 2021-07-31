class Prsons {  // super class
  #address; //private inst with #
  #name;
  constructor(name, address) {
    this.#name = name;
    this.#address = address;
  }

  get Name() {
    return this.#name;
  }
  get Address() {
    return this.#address;
  }
  set Address(address) {
    this.#address = address;
  }
  set Name(name) {
    this.#name = name;
  }

  toString() {
    return "(" + this.name + ", " + this.address + ")";
  }
}

class Students extends Prsons { // sub-class of Persons = extends
  #count = 0;
  #course = [];
  #grade = []; //new Array(30);
  constructor(name, address) {
    super(name, address);
    //\this.#numCourse=numCourse;
    //this.#course=course;
    //this.#grade=grade;
    //this.#count=0;
  }

  addCourseGrade(addCO, addGR) {
    //var part=[];

    this.#course.push(addCO);
    //this.#grade=[addGR];
    this.#grade.push(addGR);
    this.#count++;
    //if(this.#count>30)
    //console.log("max courses reached");
    //this.#count--;
  }
  PrintGrade() {
    var x = "";
    for (var i = 0; i < this.#grade.length; i++) {
      x += this.#course[i] + ": (" + this.#grade[i] + ") \n";
    }
    return x;
    //return "Course:" + this.#course + ", " + "Grade:" + this.#grade;
    //return this.#grade[i];
  }
  getAvrage() {
    //console.log(Object.values(this.#grade));
    //return Object.values(this.#grade)/this.#count;
    var total = 0;
    for (var x of this.#grade) {
      //return this.#grade[x]/this.#count;
      total += x;
    }
    return total / this.#count;
  }

  toString() {
    //return super.toString();
    return super.toString() + "\n," + this.PrintGrade();
  }
}

class Teacher extends Prsons { // sub-class of Persons = extends
  #count = 0;
  #course = [];
  #grade = []; //new Array(30);
  constructor(name, address) {
    super(name, address);
  }

  addCourseGrade(addCO, addGR) {
    //var part=[];

    this.#course.push(addCO);
    //this.#grade=[addGR];
    this.#grade.push(addGR);
    this.#count++;

    //if(this.#count>30)
    //console.log("max courses reached");
    //this.#count--;
  }
  RemoveCourse() {
    this.#course.pop();
    //this.#grade=[addGR];
    this.#grade.pop();
    this.#count--;
    console.log(this.#grade);
  }

  toString() {
    return (
      "Name,Address" +
      super.toString() +
      " Course: " +
      this.#course +
      " ," +
      "Grade:" +
      this.#grade
    );
  }
}

////  testing and running in your console  

var zx = new Prsons();
zx.name = "safarji";
zx.address = "KSA";
//console.log(zx.toString());

var zxx = new Students();
zxx.addCourseGrade("EN", 66);
zxx.addCourseGrade("AR", 77);
zxx.addCourseGrade("CS", 88);
zxx.name = "safarji";
zxx.address = "K";

var s = new Students();
s.addCourseGrade("EN", 66);
s.addCourseGrade("AR", 77);
s.addCourseGrade("CS", 88);
s.name = "AA";
s.address = "GG";

//zxx.toString();
//console.log(zxx.PrintGrade());
console.log(zxx.toString());
console.log(s.toString());
//console.log(zxx.getAvrage());

var r = new Teacher();
r.name = "H";
r.address = "XC";
r.addCourseGrade("VV", 66);
r.addCourseGrade("dd", 88);
console.log(r.toString());
r.RemoveCourse();
console.log(r.toString());
