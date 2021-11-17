create database uberServicio;
use uberServicio;

create table categoria(
	 idCategoria integer primary key auto_increment,
	nombreCategoria varchar(50),
    descripcionCategoria varchar(50)
    );
    
create table usuario(
	idUsuario integer primary key auto_increment,
	nombre varchar(50),
    apellido varchar(50),
    correo varchar(60),
    telefono varchar(9),
    usuarioNombre varchar(50),
    contrasena varchar(20),
    urlFotoPerfil varchar(50)
    );
    
create table pedido(
	 idPedido integer primary key auto_increment,
	Fecha date,
    Hora time,
    total double
    );
    
create table servicio(
	 idServicio integer primary key auto_increment,
	descripcion varchar(50),
    nombre varchar(80),
    precio float,
    disponible boolean,
    calificacion int,
    idCategoria integer,
    idUsuario integer,
    foreign key(idCategoria) references Categoria(idCategoria),
    foreign key(idUsuario) references Usuario(idUsuario)
    );
    
create table imagenServicio(
	 idImagen integer primary key auto_increment,
	url varchar(50),
    idServicio int,
    foreign key(idServicio) references servicio(idServicio)
    );

create table comentario(
	 idComentario integer primary key auto_increment,
	comentario varchar(100),
	calificacion int,
    idServicio int,
    idUsuario int,
    foreign key(idServicio) references servicio(idServicio),
    foreign key(idUsuario) references Usuario(idUsuario)
    );
    
create table pedidoServicio(
	 idPedido integer,
	idServicio integer,
    foreign key(idPedido) references pedido(idPedido),
    foreign key(idServicio) references servicio(idServicio),
    primary key(idPedido, idServicio)
    );
    
    
#Agregando datos a la tablas

insert into Categoria(nombreCategoria,descripcionCategoria) VALUES
("Electronica","Soluciones a la parte electronica de sus equipos ");

insert into usuario(nombre,apellido,correo,telefono,usuarioNombre,contrasena,urlFotoPerfil) values
("Cristina","Martinez","crissisabel98@gmail.com","7777-2200","cristi98","cris123","prueba1.jpg"),
("Roberto","Luna","robertoluna@gmail.com","7227-2230","roberLuna","luna123","prueba2.jpg"),
("Victor","Venezuela","victor@gmail.com","7334-2200","victorv","victo123","prueba3.jpg"),
("Alessandro","Solorzano","alezzo@gmail.com","3347-2200","alezzo","aless123","prueba4.jpg");

insert into pedido(Fecha, Hora, total) values
('2021-11-17', '09:14:00', 3);

insert into servicio(descripcion, nombre, precio, disponible, calificacion, idCategoria, idUsuario) values
("reparacion alectrica de refrigeradoras","reparacion de refrigeradoras","100",1,10,1,1),
("reparacion alectrica de carros","soluciones electronicas de carro","100",1,10,1,2);

insert into imagenServicio(url, idServicio)values ("servicio1.jpg",1),("servicio2.jpg",2);
    
insert into comentario(comentario, calificacion, idServicio, idUsuario) values
("Muy buen servicio, lo recomiendo",10,1,1),
("Lo recomiendo",10,2,2);
    
    