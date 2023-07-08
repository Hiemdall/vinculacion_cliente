-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2023 a las 16:30:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vinculacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_cuestionario`
--

CREATE TABLE `tabla_cuestionario` (
  `id` int(20) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  `nombre_datos` varchar(20) NOT NULL,
  `tipo_documento_datos` varchar(20) NOT NULL,
  `dv_datos` varchar(20) NOT NULL,
  `numero_datos` varchar(30) NOT NULL,
  `direccion_datos` varchar(20) NOT NULL,
  `departamento_datos` varchar(30) NOT NULL,
  `ciudad_datos` varchar(20) NOT NULL,
  `correo_principal_datos` varchar(30) NOT NULL,
  `telefono_datos` varchar(20) NOT NULL,
  `telefono_movil_datos` varchar(20) NOT NULL,
  `detalle_actividad_eco_datos` varchar(20) NOT NULL,
  `nombre_legal` varchar(30) NOT NULL,
  `tipo_documento_legal` varchar(10) NOT NULL,
  `dv_legal` varchar(10) NOT NULL,
  `numero_legal` varchar(30) NOT NULL,
  `departamento_legal` varchar(20) NOT NULL,
  `ciudad_legal` varchar(20) NOT NULL,
  `direccion_legal` varchar(30) NOT NULL,
  `correo_principal_legal` varchar(20) NOT NULL,
  `telefono_legal` varchar(20) NOT NULL,
  `telefono_movil_legal` varchar(20) NOT NULL,
  `nombre_contabilidad` varchar(20) NOT NULL,
  `correo_contabilidad` varchar(30) NOT NULL,
  `telefono_fijo_contabilidad` varchar(30) NOT NULL,
  `ext_contabilidad` varchar(5) NOT NULL,
  `telefono_movil_contabilidad` varchar(20) NOT NULL,
  `nombre_tesoreria` varchar(20) NOT NULL,
  `correo_tesoreria` varchar(30) NOT NULL,
  `telefono_fijo_tesoreria` varchar(20) NOT NULL,
  `ext_tesoreria` varchar(5) NOT NULL,
  `telefono_movil_tesoreria` varchar(20) NOT NULL,
  `nombre_cartera` varchar(20) NOT NULL,
  `correo_cartera` varchar(20) NOT NULL,
  `telefono_fijo_cartera` varchar(20) NOT NULL,
  `ext_cartera` varchar(5) NOT NULL,
  `telefono_movil_cartera` varchar(20) NOT NULL,
  `fecha_cierre_facturacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabla_cuestionario`
--

INSERT INTO `tabla_cuestionario` (`id`, `fecha`, `nombre_datos`, `tipo_documento_datos`, `dv_datos`, `numero_datos`, `direccion_datos`, `departamento_datos`, `ciudad_datos`, `correo_principal_datos`, `telefono_datos`, `telefono_movil_datos`, `detalle_actividad_eco_datos`, `nombre_legal`, `tipo_documento_legal`, `dv_legal`, `numero_legal`, `departamento_legal`, `ciudad_legal`, `direccion_legal`, `correo_principal_legal`, `telefono_legal`, `telefono_movil_legal`, `nombre_contabilidad`, `correo_contabilidad`, `telefono_fijo_contabilidad`, `ext_contabilidad`, `telefono_movil_contabilidad`, `nombre_tesoreria`, `correo_tesoreria`, `telefono_fijo_tesoreria`, `ext_tesoreria`, `telefono_movil_tesoreria`, `nombre_cartera`, `correo_cartera`, `telefono_fijo_cartera`, `ext_cartera`, `telefono_movil_cartera`, `fecha_cierre_facturacion`) VALUES
(18, '08/07/23', 'Heimdall', 'Pasaporte', '0001', '124', 'Santigo de cali', 'Amazonas', 'leticia', 'heimdallr20@gmail.com', '3176040660', '45', '111', 'Pablo Peres', 'Pasaporte', '111', '8745212', 'Amazonas', 'leticia', 'Santigo de cali', 'pablo@gmail.com', '3176040660', '3044561957', 'Heimdall Rojas', 'heimdall@gmail.com', '3044561957', '24587', '3176040660', 'Andrea Jimenez', 'T@1', '3176040660', '421', '3176040660', 'Carme Delgado', 'carmen@1', '3176040660', '5421', '3176040660', '2023-07-06'),
(19, '08/07/23', 'Heimdall', 'Pasaporte', '0001', '457', 'Santigo de cali', 'Amazonas', 'leticia', 'heimdallr20@gmail.com', '3176040660', '3176040660', '111', 'Pablo Peres', 'Pasaporte', '111', '8745212', 'Amazonas', 'leticia', 'Santigo de cali', 'pablo@gmail.com', '3176040660', '3176040660', 'Heimdall Rojas', 'heimdall@gmail.com', '3176040660', '24587', '3176040660', 'Andrea Jimenez', 'T@1', '3176040660', '421', '3176040660', 'Carme Delgado', 'carmen@1', '3176040660', '5421', '3176040660', '0000-00-00'),
(20, '08/07/23', 'Heimdall', 'Pasaporte', '0001', '457', 'Santigo de cali', 'Amazonas', 'leticia', 'heimdallr20@gmail.com', '3176040660', '3176040660', '111', 'Pablo Peres', 'Pasaporte', '111', '8745212', 'Amazonas', 'leticia', 'Santigo de cali', 'pablo@gmail.com', '3176040660', '3176040660', 'Heimdall Rojas', 'heimdall@gmail.com', '3176040660', '24587', '3176040660', 'Andrea Jimenez', 'T@1', '3176040660', '421', '3176040660', 'Carme Delgado', 'carmen@1', '3176040660', '5421', '3176040660', '0000-00-00'),
(21, '08/07/23', 'heimdall', 'Pasaporte', '45878', '44', 'Santigo de cali', 'Antioquia', 'Medellin', 'heimdallr20@gmail.com', '3176040660', '3176040660', '7842145', 'Pablo Peres', 'Pasaporte', '354353', '8745212', 'Amazonas', '', 'Santigo de cali', 'pablo@gmail.com', '3176040660', '3176040660', 'Heimdall Rojas', 'heimdall@gmail.com', '3044561957', '24587', '3176040660', 'Andrea Jimenez', 'T@1', '3176040660', '421', '3176040660', 'Carme Delgado', 'carmen@1', '3176040660', '5421', '3176040660', '0000-00-00'),
(22, '08/07/23', 'Heimdall', 'Pasaporte', '0001', '78', 'Santigo de cali', 'Antioquia', 'Medellin', 'heimdallr20@gmail.com', '3176040660', '3044561957', '7842145', '111', 'Pasaporte', '354353', '8745212', 'Amazonas', 'leticia', 'Santigo de cali', 'pablo@gmail.com', '3176040660', '3176040660', 'Heimdall Rojas', 'heimdall@gmail.com', '3176040660', '88', '3044561957', 'Andrea Jimenez', 'T@1', '3176040660', '421', '3176040660', 'Carme Delgado', 'carmen@1', '3176040660', '5421', '3176040660', '0000-00-00'),
(23, '08/07/23', 'Heimdall', 'Pasaporte', '456', '44', 'Santigo de cali', 'Amazonas', 'leticia', 'heimdallr20@gmail.com', '3176040660', '3176040660', '111', 'Pablo Peres', 'Pasaporte', '147', '8745212', 'Amazonas', 'leticia', 'Santigo de cali', 'pablo@gmail.com', '3176040660', '3176040660', 'Heimdall Rojas', 'heimdall@gmail.com', '3176040660', '24587', '3176040660', 'Andrea Jimenez', 'T@1', '3176040660', '1111', '3176040660', 'Carme Delgado', 'carmen@1', '3176040660', '5421', '3176040660', '2023-07-14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabla_cuestionario`
--
ALTER TABLE `tabla_cuestionario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla_cuestionario`
--
ALTER TABLE `tabla_cuestionario`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
