Descripción del Proyecto
Este proyecto define una jerarquía de clases en JavaScript:

La clase base Person, que representa una persona y contiene propiedades como name, age, y genre, y un método obtDetails() para mostrar sus detalles.
La clase Student, que hereda de Person y añade las propiedades course y group, además del método register() para registrar al estudiante.
La clase Teacher, que hereda de Person y añade las propiedades asignatura (asignatura que enseña) y level, junto con el método assign() para asignar al profesor a su asignatura y nivel.
Cada clase demuestra cómo se puede estructurar el código usando la herencia y cómo las clases hijas pueden extender la funcionalidad de una clase base.

Estructura de Clases
Person: Clase base que incluye propiedades generales de una persona (name, age, genre) y el método obtDetails() que muestra estas propiedades en la consola.
Student: Clase que hereda de Person y añade las propiedades course (curso en el que está inscrito el estudiante) y group (grupo del estudiante). También incluye el método register() para registrar al estudiante y mostrar su curso y grupo.
Teacher: Clase que hereda de Person y añade las propiedades asignatura (asignatura que enseña el profesor) y level (nivel en el que enseña). Incluye el método assign() para asignar al profesor a una asignatura y nivel.
Requisitos
Un navegador web moderno con consola de JavaScript (por ejemplo, Chrome, Firefox, Edge).
No se requieren librerías o dependencias adicionales.
