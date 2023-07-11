-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2023 a las 00:45:31
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

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
  `nombre` varchar(20) NOT NULL,
  `tipo_documento` varchar(20) NOT NULL,
  `direccion` varchar(20) NOT NULL,
  `ciudad` varchar(20) NOT NULL,
  `correo_principal` varchar(20) NOT NULL,
  `correo_facturacion` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabla_cuestionario`
--

INSERT INTO `tabla_cuestionario` (`id`, `fecha`, `nombre`, `tipo_documento`, `direccion`, `ciudad`, `correo_principal`, `correo_facturacion`, `telefono`) VALUES
(1, '2023-06-14', 'Integratic', 'CC', 'Santigo de cali', 'cali', 'heimdallr20@gmail.co', 'facturacion@integrat', '3176040660');

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
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
