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
	 idConversion integer primary key auto_increment,
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
 
ALTER TABLE servicio MODIFY calificacion float;
ALTER TABLE usuario modify usuarioNombre varchar(20) unique;
ALTER TABLE usuario modify correo varchar(100) unique;
ALTER TABLE usuario ADD estado Boolean;
ALTER TABLE servicio modify descripcion text;
ALTER TABLE servicio modify nombre varchar(100);
ALTER TABLE comentario modify comentario text;
AlTER TABLE categoria modify descripcionCategoria text;

#procedimientos

#procedimiento almacenado que permite insertar valores en la tabla de usuarios.
DELIMITER //
create procedure sp_agregar_usuarios( in P_Correo varchar(100),
                                      in P_UsuarioNombre varchar(50),
                                      in P_Contrasena varchar(20),
                                      in P_vendedor boolean,
                                      in P_Comprador boolean,
                                      in P_estado boolean)
begin
	
    insert into usuario(correo,usuarioNombre,contrasena,vendedor,comprador, estado)  values 
    (P_Correo,P_UsuarioNombre,P_Contrasena,P_Vendedor,P_Comprador, 1);
    
end//
DELIMITER;

call sp_agregar_usuarios("prueba@gmail.com","prueba","prueba123",0,0);

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


DELIMITER //
CREATE TRIGGER tg_agregar_persona
after insert on usuario
for each row
BEGIN
	declare v_usuario int default 0;
    select idUsuario into v_usuario from usuario where idUsuario = new.idUsuario;
    
    insert into persona(idUsuario, nombre, apellido, telefono, urlFoto) value(v_usuario, "","","","");

END //
DELIMITER ;


#Agregando datos a la tablas
insert into Categoria(nombreCategoria,descripcionCategoria) VALUES
("Electronica","Soluciones a la parte electronica de sus equipos ");

insert into usuario(correo,usuarioNombre,contrasena) values
("crissisabel98@gmail.com","cristi98","cris123"),
("robertoluna@gmail.com","roberLuna","luna123"),
("victor@gmail.com","victorv","victo123"),
("alezzo@gmail.com","alezzo","aless123");


insert into persona(idUsuario,nombre, apellido, telefono, urlFoto) values
(1,"Cristina","Martinez","7777-2200","prueba1.jpg"),
(2,"Roberto","Luna","7227-2230","prueba2.jpg"),
(3,"Victor","Venezuela","7334-2200","prueba3.jpg"),
(4,"Alessandro","Solorzano","3347-2200","prueba4.jpg");
    

insert into servicio(descripcion, nombre, precio, disponible, calificacion, idCategoria, idPersona) values
("reparacion alectrica de refrigeradoras","reparacion de refrigeradoras","100",1,10,1,1),
("reparacion alectrica de carros","soluciones electronicas de carro","100",1,10,1,2);

insert into imagenServicio(url, idServicio)values ("servicio1.jpg",1),("servicio2.jpg",2);
    
insert into comentario(comentario, calificacion, idServicio, idUsuario) values
("Muy buen servicio, lo recomiendo",10,1,1),
("Lo recomiendo",10,2,2);
<<<<<<< HEAD
=======


#-------PROCEDIMIENTOS

#---------procedimiento almacenado que permite insertar valores en la tabla de usuarios.---------
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

#-------------vista de la tabla usuarios---------
create view vw_usuarios as (select * from usuario);
select * from vw_usuarios;

#---------------procedimientos para comentarios----------
DELIMITER //
create procedure sp_agregar_comentarios( in P_Comentario varchar(100),
                                      in P_Calificacion int,
                                      in P_IdServicio int,
                                      in P_IdUsuario int)
begin
	
    insert into comentario(comentario,calificacion,idServicio,idUsuario)  values 
    (P_Comentario,P_Calificacion,P_IdServicio,P_IdUsuario);
    
end//
DELIMITER ;

call sp_agregar_comentarios("Excelente",10,1,1);
select * from comentario;

#----------------vista de la tabla comentario----------
create view vw_comentarios as (select * from comentario);
select * from vw_comentarios;

#procedimientos para imagen
DELIMITER //
create procedure sp_agregar_imagenes( in P_Url varchar(100),
                                      in P_IdServicio int)
begin
	
    insert into imagenServicio(url,idServicio)  values 
    (P_Url,P_IdServicio);
    
end//
DELIMITER ;

call sp_agregar_imagenes("prueba.png",1);
select * from imagenServicio;

#----------vista de la tabla usuarios-----------
create view vw_imagenes as (select * from imagenServicio);
select * from vw_imagenes;

#------------procedimientos para pedido----------
DELIMITER //
create procedure sp_agregar_pedidos( in P_FechaInicio date,
                                      in P_FechaFin date,
                                      in P_HoraInicio time,
                                      in P_HoraFin time,
                                      in P_Total double)
begin
	
    insert into pedido(fechaInicio,fechaFin,horaInicio,horaFin,total)  values 
    (P_FechaInicio,P_FechaFin,P_HoraInicio,P_HoraFin,P_Total);
    
end//
DELIMITER ;
call sp_agregar_pedidos('2021-11-19','2021-11-19','12:00','01:00',1);
select * from pedido;

#vista de la tabla pedidos
create view vw_pedidos as (select * from pedido);
select * from vw_pedidos;

#---------------procedimientos para categoria---------
DELIMITER //
create procedure sp_agregar_categorias( in P_NombreCategoria varchar(50),
                                      in P_DescripcionCategoria varchar(50))
begin
	
    insert into categoria(nombreCategoria,descripcionCategoria)  values 
    (P_NombreCategoria,P_DescripcionCategoria);
    
end//
DELIMITER ;
call sp_agregar_categorias("mecanico","soluciones a motores de carros");
select * from categoria;

#----------vista de la tabla categoria---------
create view vw_categorias as (select * from categoria);
select * from vw_categorias;
    
#---------------procedimientos para historialConversion---------
DELIMITER //
create procedure sp_agregar_conversiones( in P_Moneda varchar(60),
                                      in P_Valor varchar(60),
                                      in P_IdPedido integer)
begin
	
    insert into historialConversion(moneda,valor,idPedido)  values 
    (P_Moneda,P_Valor,P_IdPedido);
    
end//
DELIMITER ;
call sp_agregar_conversiones("bitcoin","00.23445",1);
select * from historialConversion;

#----------vista de la tabla categoria---------
create view vw_conversiones as (select * from historialConversion);
select * from vw_conversiones;


#------CREANDO TRIGGER para insetar el id de usuario a la persona
    
>>>>>>> Developer_CMartinez
