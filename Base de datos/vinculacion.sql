-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2023 a las 00:38:04
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
  `direccion_datos` varchar(20) NOT NULL,
  `ciudad_datos` varchar(20) NOT NULL,
  `correo_principal_datos` varchar(30) NOT NULL,
  `correo_facturacion_datos` varchar(30) NOT NULL,
  `telefono_datos` varchar(20) NOT NULL,
  `telefono_movil_datos` varchar(20) NOT NULL,
  `detalle_actividad_eco_datos` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabla_cuestionario`
--

INSERT INTO `tabla_cuestionario` (`id`, `fecha`, `nombre_datos`, `tipo_documento_datos`, `dv_datos`, `direccion_datos`, `ciudad_datos`, `correo_principal_datos`, `correo_facturacion_datos`, `telefono_datos`, `telefono_movil_datos`, `detalle_actividad_eco_datos`) VALUES
(1, '2023-06-14', 'Integratic', 'CC', '', 'Santigo de cali', 'cali', 'heimdallr20@gmail.co', 'facturacion@integrat', '3176040660', '', ''),
(2, '2023-07-05', 'Astorga', 'nit', '', 'Santigo de cali', 'cali', 'heimdallr20@gmail.co', 'heimdallr20@hotmail.', '0000000', '', ''),
(3, '2023-07-06', 'Patricia', 'Pasaporte', '45878', 'Santigo de cali', 'Bogotá', 'heimdallr20@gmail.com', 'heimdallr20@hotmail.com', '3176040660', '3044561957', '7842145');

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
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
