create database uberServicio;
use uberServicio;

create table categoria(
	 idCategoria integer primary key auto_increment,
	nombreCategoria varchar(50),
    descripcionCategoria varchar(50)
    );
    
create table usuario(
	idUsuario integer primary key auto_increment,
    correo varchar(60),
    usuarioNombre varchar(50),
    contrasena varchar(20),
    vendedor boolean,
    comprador boolean
    );
    
    
create table pedido(
	 idPedido integer primary key auto_increment,
	fechaInicio date,
    fechaFin date,
    horaInicio time,
    horaFin time,
    total double
    );
    
create table historialConversion(
	 idConversion integer primary key,
	moneda varchar(60),
    valor varchar(60),
    idPedido integer,
    foreign key(idPedido) references pedido(idPedido)
    );
    
create table persona(
	 idUsuario integer primary key,
	nombre varchar(60),
    apellido varchar(60),
    telefono varchar(9),
    urlFoto varchar(50),
    foreign key(idUsuario) references Usuario(idUsuario)
    );
    
create table servicio(
	 idServicio integer primary key auto_increment,
	descripcion varchar(50),
    nombre varchar(80),
    precio float,
    disponible boolean,
    calificacion int,
    idCategoria integer,
    idPersona integer,
    foreign key(idCategoria) references Categoria(idCategoria),
    foreign key(idPersona) references persona(idUsuario)
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

insert into usuario(correo,usuarioNombre,contrasena) values
("crissisabel98@gmail.com","cristi98","cris123"),
("robertoluna@gmail.com","roberLuna","luna123"),
("victor@gmail.com","victorv","victo123"),
("alezzo@gmail.com","alezzo","aless123");


insert into persona(nombre, apellido, telefono, urlFoto) values
("Cristina","Martinez","7777-2200","prueba1.jpg"),
("Roberto","Luna","7227-2230","prueba2.jpg"),
("Victor","Venezuela","7334-2200","prueba3.jpg"),
("Alessandro","Solorzano","3347-2200","prueba4.jpg");
    

insert into servicio(descripcion, nombre, precio, disponible, calificacion, idCategoria, idPersona) values
("reparacion alectrica de refrigeradoras","reparacion de refrigeradoras","100",1,10,1,1),
("reparacion alectrica de carros","soluciones electronicas de carro","100",1,10,1,2);

insert into imagenServicio(url, idServicio)values ("servicio1.jpg",1),("servicio2.jpg",2);
    
insert into comentario(comentario, calificacion, idServicio, idUsuario) values
("Muy buen servicio, lo recomiendo",10,1,1),
("Lo recomiendo",10,2,2);


#procedimientos

#procedimiento almacenado que permite insertar valores en la tabla de usuarios.
DELIMITER //
create procedure sp_agregar_usuarios( in P_Correo varchar(60),
                                      in P_UsuarioNombre varchar(50),
                                      in P_Contrasena varchar(20),
                                      in P_Vendedor boolean,
                                      in P_Comprador boolean)
begin
	
    insert into usuario(correo,usuarioNombre,contrasena,vendedor,comprador)  values 
    (P_Correo,P_UsuarioNombre,P_Contrasena,P_Vendedor,P_Comprador);
    
end//
DELIMITER ;

call sp_agregar_usuarios("erickrapalo@gmail.com","erickra","erick123",1,1);
select * from usuario;

#vista de la tabla usuarios
create view vw_usuarios as (select * from usuario);
select * from vw_usuarios;


DELIMITER //
create procedure sp_agregar_comentario( in P_Comentario varchar(100),
                                      in P_Calificacion int,
                                      in P_IdServicio int,
                                      in P_IdUsuario int)
begin
	declare v_prom float default 0;
    insert into comentario(comentario,calificacion,idServicio,idUsuario)  values 
    (P_Comentario,P_Calificacion,P_IdServicio,P_IdUsuario);
    
    select avg(calificacion) into v_prom from comentario where idServicio =P_IdServicio;
    
    UPDATE servicio SET calificacion= v_prom  WHERE idServicio=P_IdServicio;
    
end//
DELIMITER ;

select * from servicio;
ALTER TABLE servicio MODIFY calificacion float;
