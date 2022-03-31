CREATE DATABASE datos_app;

USE datos_app;

CREATE TABLE usuario(
    Registro_Academico VARCHAR(20) NOT NULL PRIMARY KEY, -              
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    contraseña VARCHAR(35),
    correo VARCHAR(180),
    Cursos_ganados varchar(100),
    Publicacion VARCHAR(350),
    creditos INT(10),
	FOREIGN KEY (Cursos_ganados) REFERENCES cursosDisponibles(codigo)
);

CREATE TABLE cursosDisponibles(
    codigo VARCHAR(20) NOT NULL
    nombreCurso VARCHAR(250) NOT NULL PRIMARY KEY           
    profesor VARCHAR(100),
    detalles TEXT(450)
);

CREATE TABLE nuevaPublicacion(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,               
    titulo VARCHAR(100),
    descripcion TEXT(500),
    Registro_Academico VARCHAR(20) NOT NULL,
    fecha DATE
);

DESCRIBE usuario;
DESCRIBE cursosDisponibles;
DESCRIBE nuevaPublicacion;
