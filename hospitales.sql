-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2020 a las 12:02:49
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospitales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellidos` varchar(45) DEFAULT NULL,
  `fecha_nacimiento` varchar(45) DEFAULT NULL,
  `Direccion` varchar(45) DEFAULT NULL,
  `foto_perfil` varchar(80) DEFAULT NULL,
  `fecha_creacion` varchar(45) DEFAULT NULL,
  `Telefono` varchar(45) DEFAULT NULL,
  `Especialidad` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`id`, `Nombre`, `Apellidos`, `fecha_nacimiento`, `Direccion`, `foto_perfil`, `fecha_creacion`, `Telefono`, `Especialidad`) VALUES
(1, 'Giancarlo', 'Pasquale Bellido', '1994-07-04', 'Av. Ostria Gutierrez, 33', 'avatarDoc.png', '2020-05-21', '74183449', 'Traumatologo'),
(2, 'Carla', 'Pasquale Bellido', '1992-05-29', 'Jaime Mendoza', 'avatarDoc.png', '2020-05-21', '7394566', 'Bactereologo'),
(3, 'Carlos', 'Mamani', '1992-06-18', 'Av, Andrees', 'avatarDoc.png', '24/5/2020', '78963254', 'Traumatologo'),
(4, 'Mijael', 'Hurtado Lopez', '1967-06-21', 'Calle Figgueroa', 'avatarDoc.png', '24/5/2020', '78532695', 'cardiologia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Avatar` varchar(80) DEFAULT NULL,
  `fecha_creacion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id`, `Nombre`, `Descripcion`, `Avatar`, `fecha_creacion`) VALUES
(1, 'Traumatologo', 'Especialista en los Huesos del Cuerpo Humano', 'AvatarTraumatologia.png', '22/05/2020'),
(2, 'cardiologia', 'Especialidad para tratar el corazon', 'AvatarCardiologia.png', '24-05-2020'),
(3, 'Dentista', 'Especialista en Dientes', 'AvatarDentista.png', NULL),
(4, 'Bactereologo', 'Bactereas', 'AvatarBactereologia.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital`
--

CREATE TABLE `hospital` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `Telefono` varchar(45) NOT NULL,
  `Direccion` varchar(45) NOT NULL,
  `fecha_creacion` varchar(45) NOT NULL,
  `Ciudad` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hospital`
--

INSERT INTO `hospital` (`id`, `Nombre`, `Descripcion`, `Telefono`, `Direccion`, `fecha_creacion`, `Ciudad`) VALUES
(1, 'Santa Barbara', 'Hospital publico ', '64-56532', 'Ayacucho,34', '2020-05-22', 'Sucre'),
(3, 'Hospital Lajastambo', 'Hospital Publico para ateender enfermos de COVID-19.', '64-78452', 'Lajastambo, S/N', '22/5/2020', 'Sucre'),
(4, 'Hospital Jesuus de Nazareth', 'Hospital privado para acccidentes de automoviles.', '64-898655', 'Av, Bolivia, 78', '22/5/2020', 'Sucre'),
(5, 'Cristo Rey', 'Hospital privado', '64-8523', 'Japon,85', '22/5/2020', 'Sucre'),
(6, 'Hospital Jaime Mendoza', 'Hospital publico', '64-78625', 'Colon, S/N', '24/5/2020', 'Sucre'),
(7, 'Hospital Universitario', 'Hospital publico y atencion para estudiantes de la Universidad San Francisco Xavier de Chuquisaca', '64-89563', 'San Juanillo, 45', '24/5/2020', 'Sucre'),
(8, 'Hospital Trinidad', 'Hospital publico para enfermos de covid-19', '78941533', 'Av. Bolivar', '24/5/2020', 'Trinidad'),
(9, 'Hospital Cosmil', 'Centro centinela', '78451265', 'Av. Centinela, 56', '24/5/2020', 'Trinidad'),
(10, 'Hospital de Clinicas', 'Atencion 24 horaas', '2-225896', 'Av. Costanera', '24/5/2020', 'La Paz');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

CREATE TABLE `notas` (
  `id` int(11) NOT NULL,
  `Descripcion` varchar(1000) DEFAULT NULL,
  `fecha_visita` varchar(45) DEFAULT NULL,
  `fecha_creacion` varchar(45) DEFAULT NULL,
  `Paciente` varchar(45) NOT NULL,
  `Doctor` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `notas`
--

INSERT INTO `notas` (`id`, `Descripcion`, `fecha_visita`, `fecha_creacion`, `Paciente`, `Doctor`) VALUES
(3, 'consulta 1', '2020-05-05', '2020-05-19', 'Dario', 'Carla'),
(14, 'Consulta de prueba 1', '2020-05-31', '25/5/2020', 'Francisco', 'Giancarlo'),
(15, 'Consulta de prueba', '2020-05-31', '25/5/2020', 'Dario', 'Carla'),
(16, 'Consulta de prueba', '2020-05-29', '25/5/2020', 'Manolo', 'Mijael'),
(17, 'Consulta de prueba', '2020-05-20', '25/5/2020', 'Antonella', 'Carlos'),
(18, 'Consulta de prueba', '2020-05-23', '25/5/2020', 'Dario', 'Giancarlo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellidos` varchar(45) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `Direccion` varchar(45) DEFAULT NULL,
  `foto_perfil` varchar(80) DEFAULT NULL,
  `fecha_creacion` varchar(45) DEFAULT NULL,
  `Telefono` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `Nombre`, `Apellidos`, `fecha_nacimiento`, `Direccion`, `foto_perfil`, `fecha_creacion`, `Telefono`) VALUES
(1, 'Francisco', 'Cortez Gonzales', '0000-00-00', 'Olañeta,148', 'avatarPaciente.jpg', '0000-00-00', '71156984'),
(2, 'Dario', 'Pelaez', '1990-05-05', 'olañeta, 148', 'avatarPaciente.jpg', '0000-00-00', '4564353'),
(3, 'Manolo', 'Perez', '2020-05-04', 'Manolandia, 12', 'avatarPaciente.jpg', '0000-00-00', '64-897731'),
(6, 'Antonella', 'Cardozo', '2019-11-29', 'Av. Canada', 'C:\\fakepath\\avatarPaciente.jpg', NULL, '78895632');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Especialidad` (`Especialidad`),
  ADD KEY `Nombre` (`Nombre`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Nombre` (`Nombre`);

--
-- Indices de la tabla `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `notas`
--
ALTER TABLE `notas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Paciente` (`Paciente`),
  ADD KEY `Doctor` (`Doctor`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Nombre` (`Nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `doctores`
--
ALTER TABLE `doctores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `hospital`
--
ALTER TABLE `hospital`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `notas`
--
ALTER TABLE `notas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD CONSTRAINT `doctores_ibfk_1` FOREIGN KEY (`Especialidad`) REFERENCES `especialidades` (`Nombre`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`Paciente`) REFERENCES `pacientes` (`Nombre`) ON UPDATE CASCADE,
  ADD CONSTRAINT `notas_ibfk_2` FOREIGN KEY (`Doctor`) REFERENCES `doctores` (`Nombre`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
