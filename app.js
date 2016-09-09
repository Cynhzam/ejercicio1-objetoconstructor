window.addEventListener("load", function(){
    var boton = document.getElementById("calcular")
    boton.addEventListener("click", function(){
        var nombre = document.getElementById("nombre").value;
        var edad = parseInt(document.getElementById("edad").value);
        var sexo = document.getElementById("sexo").value;
        function Persona(nombre, edad, sexo, mayorDeEdad) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.mayorDeEdad = (this.edad >= 18);
            this.presentacion = function(){
                if (this.mayorDeEdad){
                return "hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años y soy mayor de edad ";
                } else{
                return "hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años y soy menor de edad ";
                }
            };
        }; 
        var persona1 = new Persona(nombre, edad, sexo);
        document.getElementById("resultado").innerHTML=persona1.presentacion();
    });  
});