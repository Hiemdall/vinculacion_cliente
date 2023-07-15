-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2023 a las 23:25:50
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
  `fecha_cierre_facturacion` date NOT NULL,
  `Caracteristicas_Tributarias` varchar(30) NOT NULL,
  `retiene_ica` varchar(5) NOT NULL,
  `ica_cod_actividad` varchar(20) NOT NULL,
  `nom_diligencio` varchar(30) NOT NULL,
  `cargo_diligencio` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
