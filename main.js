// Crea la clase Person, con propiedades name, age y genre y el metodo obtDetails () que muestre por consola las propiedades de persona, 
// Clase base Person:

class Person {
    constructor(name, age, genre) {
        this.name = name;
        this.age = age;
        this.genre = genre;
    }

    obtDetails() {
        console.log(`Nombre: ${this.name}, Edad: ${this.age}, Género: ${this.genre}`);
    }
}

class Student extends Person {
    constructor(name, age, genre, course, group) {
        super(name, age, genre);
        this.course = course;
        this.group = group;
    }

    register() {
        console.log(`Estudiante ${this.name} registrado en el curso ${this.course}, grupo ${this.group}.`);
    }
}

class Teacher extends Person {
    constructor(name, age, genre, asignatura, level) {
        super(name, age, genre);
        this.asignatura = asignatura;
        this.level = level;
    }

    assign() {
        console.log(`Profesor ${this.name} asignado a la asignatura ${this.asignatura}, nivel ${this.level}.`);
    }
}

const estudiante = new Student("Catalina", 28, "Femenino", "Karate", "Cinta Negra");
const profesor = new Teacher("Sofia", 20, "Femenino", "Yudo", "Cinturon Rojo");

estudiante.obtDetails();
estudiante.register();

profesor.obtDetails();
profesor.assign();
