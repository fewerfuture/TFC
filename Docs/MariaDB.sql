CREATE TABLE `nivel_escalada` (
  `nivel_escalada_id` int UNSIGNED NOT NULL PRIMARY KEY,
  `Grado` varchar(20) NOT NULL,
  `Tipo` varchar(4) NOT NULL CHECK (`Tipo` in ('EU','EEUU'))
);

CREATE TABLE `rol` (
  `rol_id` INT UNSIGNED NOT NULL PRIMARY KEY,
  `Rol` varchar(50) NOT NULL
) ;

CREATE TABLE `ubicacion` (
  `ubicacion_id` int UNSIGNED NOT NULL PRIMARY KEY,
  `Nombre` varchar(255) NOT NULL,
  `Altitud` varchar(20) NOT NULL,
  `Latitud` varchar(20) NOT NULL,
  `Longitud` varchar(20) NOT NULL
) ;

CREATE TABLE `usuario` (
  `usuario_id` int UNSIGNED NOT NULL PRIMARY KEY,
  `Nombre` varchar(50) NOT NULL,
  `Correo` varchar(255) NOT NULL CHECK (`Correo` like '%_@__%.__%'),
  `Contrasena` varchar(25) NOT NULL CHECK (char_length(`Contrasena`) >= 8),
  `FK_Nivel_Escalada_ID` int(10) UNSIGNED DEFAULT NULL,
  `FK_Rol_ID` int(10) UNSIGNED DEFAULT NULL,
    
    FOREIGN KEY (FK_Nivel_Escalada_ID) REFERENCES nivel_escalada(ID),
    FOREIGN KEY (FK_Rol_ID) REFERENCES Rol(ID)
);

CREATE TABLE `evento` (
  `evento_id` int UNSIGNED NOT NULL PRIMARY KEY,
  `Nombre` varchar(255) NOT NULL,
  `Fecha_Inicio` datetime NOT NULL,
  `Fecha_Final` datetime NOT NULL,
  `Tipo` varchar(20) NOT NULL CHECK (`Tipo` in ('rocodromo','montaña','vía ferrata')),
  `Finalizado` BOOLEAN DEFAULT FALSE,
  `FK_Ubicacion_ID` int(10) UNSIGNED DEFAULT NULL,
  `FK_Nivel_Escalada_ID` int(10) UNSIGNED DEFAULT NULL,
  `FK_Creador_ID` int(10) UNSIGNED DEFAULT NULL,
    
    FOREIGN KEY (FK_Ubicacion_ID) REFERENCES Ubicacion(ID),
    FOREIGN KEY (FK_Nivel_Escalada_ID) REFERENCES nivel_escalada(ID),
    FOREIGN KEY (FK_Creador_ID) REFERENCES Usuario(ID)
);

CREATE TABLE `evento_usuario` (
  `Usuario_ID` int UNSIGNED NOT NULL,
  `Evento_ID` int UNSIGNED NOT NULL,
    
    PRIMARY KEY (`Usuario_ID`, `Evento_ID`),
    
   FOREIGN KEY (Usuario_ID) REFERENCES Usuario(ID),
   FOREIGN KEY (Evento_ID) REFERENCES Evento(ID)
);


