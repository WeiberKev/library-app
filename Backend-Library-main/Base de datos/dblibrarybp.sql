-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2025 a las 16:18:09
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dblibrarybp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

CREATE TABLE `autor` (
  `id` bigint(20) NOT NULL,
  `biografia` varchar(255) DEFAULT NULL,
  `nacionalidad` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `obra_destacada` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`id`, `biografia`, `nacionalidad`, `nombre`, `genero`, `imagen_url`, `obra_destacada`) VALUES
(1, 'Autor de Cien años de soledad', 'Colombiano', 'Gabriel García Márquez', 'Realismo mágico', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gabriel_Garcia_Marquez.jpg/250px-Gabriel_Garcia_Marquez.jpg', 'Cien años de soledad'),
(5, 'Autora de clásicos del romanticismo.', 'Inglesa', 'Jane Austen', 'Romántico', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jane_Austen%2C_from_A_Memoir_of_Jane_Austen_%281870%29.jpg/250px-Jane_Austen%2C_from_A_Memoir_of_Jane_Austen_%281870%29.jpg', 'Orgullo y prejuicio'),
(6, 'Autor visionario sobre el totalitarismo y la censura.', 'Británica', 'George Orwell', 'Ciencia Ficción', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9yb3J3r4KgEWkyyOf1A3ocwpxLzYPe_lTtQ&s', '1984'),
(7, 'Autora de una de las sagas más populares del mundo.', 'Británica', 'J.K. Rowling', 'Fantasía', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg', 'Harry Potter y la piedra filosofal'),
(8, 'Piloto y escritor, creador de un clásico de la literatura infantil.', 'Francesa', 'Antoine de Saint-Exupéry', 'Fábula', 'https://www.gaceta.unam.mx/wp-content/uploads/2020/06/saindes.jpg', 'El Principito'),
(9, 'Reconocido por sus obras distópicas sobre la sociedad futura.', 'Estadounidense', 'Ray Bradbury', 'Ciencia Ficción', 'https://revistamundodiners.com/wp-content/uploads/2020/07/foto-2.jpg', 'Fahrenheit 451'),
(10, 'Famoso por combinar misterio y amor por los libros.', 'Española', 'Carlos Ruiz Zafón', 'Misterio', 'https://forbes.es/wp-content/uploads/2020/06/EATXGjvWwAEOV2j.jpeg', 'La sombra del viento'),
(11, 'Autora de novelas históricas con elementos mágicos.', 'Chilena', 'Isabel Allende', 'Realismo mágico', 'https://cdn.aarp.net/content/dam/aarp/entertainment/celebrities/2018/08/1140-isabel-allende-esp.jpg', 'La casa de los espíritus'),
(12, 'Poeta español del romanticismo, conocido por sus rimas y leyendas.', 'Español', 'Gustavo Adolfo Bécquer', 'Romántico', 'https://www.euston96.com/wp-content/uploads/2018/01/Gustavo-Adolfo-B%C3%A9cquer-768x518.jpg', 'Rimas y leyendas'),
(13, 'Autora de literatura con elementos mágicos y culinarios.', 'Mexicana', 'Laura Esquivel', 'Realismo mágico', 'https://frasesdelavida.com/wp-content/uploads/2023/06/laura-esquivel-libros.jpg', 'Como agua para chocolate'),
(14, 'Autora de novelas históricas con elementos mágicos', 'Chilena', 'Isabel Allende', 'Realismo mágico', 'IMG_1128-scaled.jpg (2560×1920)', 'La casa de los espíritus'),
(15, 'Autor de Cien años de soledad', 'Colombiano', 'Gabriel García Márquez', 'Realismo mágico', 'https://www.biografiasyvidas.com/biografia/g/fotos/garcia_marquez_gabriel.jpg', NULL),
(16, 'Autor argentino reconocido por su estilo innovador en la narrativa.', 'Argentino', 'Julio Cortázar', 'Literatura', 'https://cdn.goconqr.com/uploads/image_clipping/image/327281/desktop_julio-cortazar.jpg', 'Rayuela'),
(17, 'Escritor mexicano de renombre, autor de obras clave de la literatura latinoamericana.', 'Mexicano', 'Carlos Fuentes', 'Literatura', 'https://cdn.britannica.com/96/226696-050-358FA781/Mexican-writer-and-diplomat-Carlos-Fuentes-1987.jpg', 'La muerte de Artemio Cruz'),
(18, 'Figura importante del romanticismo gallego y español.', 'Española', 'Rosalía de Castro', 'Romántico', 'https://th.bing.com/th/id/OIP.rjdrpQJ19LLB3OVnkl5UOgHaKT?rs=1&pid=ImgDetMain', 'Cantares gallegos'),
(19, 'Uno de los principales exponentes del romanticismo español.', 'Español', 'José de Espronceda', 'Romántico', 'https://th.bing.com/th/id/OIP.FPbu9WP622ZEIcD1uKA60AHaJ4?rs=1&pid=ImgDetMain', 'El estudiante de Salamanca'),
(20, 'Autora argentina destacada en la ciencia ficción y la fantasía.', 'Argentina', 'Angélica Gorodischer', 'Ciencia Ficción', 'https://th.bing.com/th/id/OIP.htiDPA_VOn0Nm9coFgzhlwHaE8?rs=1&pid=ImgDetMain', 'Kalpa Imperial'),
(21, 'Escritor español, autor de ciencia ficción, fantasía y cómics.', 'Español', 'Rafael Marín', 'Ciencia Ficción', 'https://www.fabulantes.com/wp-content/uploads/2023/04/rafael-marin-portada-2-683x1024.jpg', 'Lágrimas de luz'),
(22, 'Autora española conocida por su versatilidad en géneros como la ciencia ficción.', 'Española', 'Elia Barceló', 'Ciencia Ficción', 'https://th.bing.com/th/id/R.39708ca78b0ee60bb24e72f85acb6b5c?rik=WeUhTlsgUHq9UA&pid=ImgRaw&r=0', 'El vuelo del hipogrifo'),
(23, 'Escritora argentina conocida por su saga de fantasía épica.', 'Argentina', 'Liliana Bodoc', 'Fantasía', 'https://th.bing.com/th/id/OIP.ObW1VeAOKa3SMBkU1FYYBgHaE7?rs=1&pid=ImgDetMain', 'La saga de los confines'),
(24, 'Autora española especializada en literatura juvenil fantástica.', 'Española', 'Laura Gallego', 'Fantasía', 'https://th.bing.com/th/id/R.2627864b2d83322782a5006e63d0da2b?rik=fsiaAxMSA0RWdg&pid=ImgRaw&r=0', 'Memorias de Idhún'),
(25, 'Escritor español enfocado en la fantasía heroica.', 'Español', 'Andrés Díaz Sánchez', 'Fantasía', 'https://th.bing.com/th/id/OIP.mmW8cjb9yIeUQ1Lx4SEM2QAAAA?rs=1&pid=ImgDetMain', 'La maza sagrada'),
(26, 'Poeta colombiano, autor de famosas fábulas infantiles.', 'Colombiano', 'Rafael Pombo', 'Fábula', 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/12094536/image/6f504bf18636fe553ecbefd05f305698', 'El renacuajo paseador'),
(27, 'Autor español conocido por sus fábulas moralizantes.', 'Español', 'Félix María de Samaniego', 'Fábula', 'https://th.bing.com/th/id/R.9c7de7c437413655fd7a613f16be45fb?rik=3W5GbK3bYcPZxQ&pid=ImgRaw&r=0', 'Fábulas'),
(28, 'Poeta y fabulista español del siglo XVIII.', 'Español', 'Tomás de Iriarte', 'Fábula', 'https://www.todo-argentina.net/biografias-argentinas/imagenes/tomas_de_iriarte.jpg', 'Fábulas literarias'),
(29, 'Famoso por combinar misterio y amor por los libros.', 'Española', 'Carlos Ruiz Zafón', 'Misterio', 'https://wmagazin.com/wp-content/uploads/2020/06/NO-ppal-Carlos-Ruiz-Zafon-muere1jpg.jpg', 'La sombra del viento'),
(30, 'Autor español reconocido por sus thrillers.', 'Español', 'Juan Gómez-Jurado', 'Misterio', 'https://estaticos-cdn.prensaiberica.es/clip/651e9fba-c346-4768-91bd-9028e2de85eb_16-9-discover-aspect-ratio_default_0.jpg', 'Reina Roja'),
(31, 'Escritor español con novelas de intriga y misterio.', 'Español', 'Jordi Sierra i Fabra', 'Misterio', 'https://www.loqueleo.com/pr/uploads/2017/10/resized/800_jordi-sierra-fabra.jpg', 'Campos de fresas'),
(32, 'Máximo exponente de la literatura española.', 'Español', 'Miguel de Cervantes', 'Clásico', 'https://th.bing.com/th/id/OIP.Bniw993q93NLKzUSnJWWAgHaJL?rs=1&pid=ImgDetMain', 'Don Quijote de la Mancha');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `descripcion`, `nombre`) VALUES
(1, 'Libros narrativos y novelas', 'Literatura'),
(3, 'Narrativa fantástica con elementos mágicos dentro de contextos reales.', 'Realismo mágico'),
(4, 'Historias de amor, pasión y emociones intensas.', 'Romántico'),
(5, 'Tecnología, universos futuristas y mundos alternativos.', 'Ciencia Ficción'),
(6, 'Magia, criaturas míticas y mundos imaginarios.', 'Fantasía'),
(7, 'Relatos breves con moralejas, usualmente protagonizados por animales.', 'Fábula'),
(8, 'Historias con suspenso, enigmas y resolución de crímenes.', 'Misterio'),
(9, 'Obras literarias históricas de gran valor cultural.', 'Clásico'),
(10, 'Relatos que provocan miedo, horror o tensión.', 'Terror'),
(11, 'Historias heroicas, batallas legendarias y aventuras grandiosas.', 'Épico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `reparacion_id` bigint(20) DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `autor_id` bigint(20) NOT NULL,
  `categoria_id` bigint(20) NOT NULL,
  `popularidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id`, `nombre`, `reparacion_id`, `imagen_url`, `titulo`, `autor_id`, `categoria_id`, `popularidad`) VALUES
(2, 'Cien años de soledad', NULL, 'https://images.cdn2.buscalibre.com/fit-in/360x360/38/12/3812f54c9c10992f538ead2c95d775ed.jpg', NULL, 1, 3, 5),
(3, 'Crónica de una muerte anunciada', NULL, 'https://tienda.javeriana.edu.co/uploads/javeriana/product_images/19281/full/cronica-de-una-muerte-anunciada-debolsi_Os7uL.jpg', NULL, 1, 1, 4),
(6, '1984', NULL, 'https://images.cdn1.buscalibre.com/fit-in/360x360/10/42/10426f9e9ae4f7cd9eb5d33cef5aa143.jpg', NULL, 6, 3, 5),
(7, 'Orgullo y prejuicio', NULL, 'https://m.media-amazon.com/images/S/pv-target-images/15a41e61c30b3e9df74d61ac747fe3e1d5dc4ba30cf8ca3ac85a9148344efeba.jpg', NULL, 5, 4, 5),
(8, 'Harry Potter y la piedra filosofal', NULL, 'https://image.cdn0.buscalibre.com/5b56b6968863b5e8148b4568.RS500x500.jpg', NULL, 7, 6, 5),
(9, 'La casa de los espíritus', NULL, 'https://images.cdn1.buscalibre.com/fit-in/360x360/bf/30/bf3012b29b7a91ec9442ae13e90d7b4c.jpg', NULL, 11, 3, 5),
(10, 'La sombra del viento', NULL, 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/330/original/portada_la-sombra-del-viento-20-aniversario_carlos-ruiz-zafon_202103111500.jpg', NULL, 10, 8, 4),
(11, 'Fahrenheit 451', NULL, 'https://images.cdn1.buscalibre.com/fit-in/360x360/39/0c/390cf389c0c83ef393d8a0b763e856c0.jpg', NULL, 9, 5, 4),
(12, 'Un Mundo Feliz', NULL, 'https://images.cdn1.buscalibre.com/fit-in/360x360/4d/4f/4d4fa8bd3eaf0296c64927555fe9228f.jpg', NULL, 12, 5, 4),
(13, 'La muerte de Artemio Cruz', NULL, 'https://th.bing.com/th/id/OIP.oJHuurnZo1mPx4JNS_ckfAAAAA?rs=1&pid=ImgDetMain', NULL, 17, 1, 3),
(14, 'Rayuela', NULL, 'https://th.bing.com/th/id/OIP.3JC7cYJma5L1loQbibntLQHaMI?rs=1&pid=ImgDetMain', NULL, 16, 1, 5),
(15, 'La Casa de Los Espiritus', NULL, 'https://th.bing.com/th/id/R.a222e82ae6e5df6aa3d1fda5777e5ddb?rik=cqmijTQmUM7r%2bg&pid=ImgRaw&r=0', NULL, 5, 3, 4),
(16, 'Como agua para chocolate', NULL, 'https://th.bing.com/th/id/OIP.P_bWf4rsSlZdQMD6ZHrfgQHaK9?rs=1&pid=ImgDetMain', NULL, 6, 3, 4),
(17, 'Rimas y leyendas', NULL, 'https://th.bing.com/th/id/R.446b1a538ff564d2303086111e681149?rik=mtUbDD01XWw%2fig&pid=ImgRaw&r=0g', NULL, 7, 4, 3),
(18, 'Cantares gallegos', NULL, 'https://images-na.ssl-images-amazon.com/images/I/51kMNardwrL.jpg', NULL, 8, 4, 5),
(19, 'El estudiante de Salamanca', NULL, 'https://th.bing.com/th/id/OIP.N00Yy3Hx5qrUhcOZ4I6ECAAAAA?rs=1&pid=ImgDetMain', NULL, 9, 4, 4),
(20, 'Kalpa Imperial', NULL, 'https://th.bing.com/th/id/OIP.r3YVr9kHlicss_3xjABEMwAAAA?rs=1&pid=ImgDetMain', NULL, 10, 5, 3),
(21, 'Lágrimas de luz', NULL, 'https://th.bing.com/th/id/OIP.vEb_sEPkcByieVjuJZfcmgHaLW?rs=1&pid=ImgDetMain', NULL, 11, 5, 4),
(22, 'El vuelo del hipogrifo', NULL, 'https://cloud10.todocoleccion.online/libros-segunda-mano-ciencia-ficcion-fantasia/tc/2019/11/05/01/182236252_tcimg_895DB902.jpg?r=1', NULL, 12, 5, 4),
(23, 'La saga de los confines', NULL, 'https://m.media-amazon.com/images/I/616W5DIRqML._SY445_SX342_.jpg', NULL, 13, 6, 3),
(24, 'Memorias de Idhún', NULL, 'https://m.media-amazon.com/images/I/51-pDnvHxCL.jpg', NULL, 14, 6, 3),
(25, 'Fábulas', NULL, 'https://images.cdn3.buscalibre.com/fit-in/360x360/e8/f4/e8f496f002e7280a4fd44c69108e9d05.jpg', NULL, 17, 7, 4),
(26, 'Fábulas literarias', NULL, 'https://pendulo.com/imagenes_grandes/9788495/978849563672.GIF', NULL, 18, 7, 5),
(27, 'La sombra del viento', NULL, 'https://th.bing.com/th/id/OIP.diZkINPz2aQnvOdf-QFvsAHaHa?rs=1&pid=ImgDetMain', NULL, 19, 8, 5),
(28, 'Don Quijote de la Mancha', NULL, 'https://th.bing.com/th/id/R.7548e86f3c4df2481895a4e610b361da?rik=B4k8JrNyXbGX3w&pid=ImgRaw&r=0', NULL, 22, 9, 5),
(29, 'Azul...', NULL, 'https://http2.mlstatic.com/D_NQ_NP_826913-MLC70465640389_072023-O.webp', NULL, 29, 4, 5),
(30, 'Martín Fierro', NULL, 'https://th.bing.com/th/id/OIP.DEvbUNXx9WTcjC7HQlhepQHaKh?rs=1&pid=ImgDetMain', NULL, 28, 11, 3),
(31, 'La Araucana', NULL, 'https://th.bing.com/th/id/OIP.6622g-I_u35jsExfitdItQAAAA?rs=1&pid=ImgDetMain', NULL, 29, 11, 3),
(32, 'La Grandeza Mexicana', NULL, 'https://th.bing.com/th/id/OIP.n2Il48mJK892JdkIOUOdpwAAAA?rs=1&pid=ImgDetMain', NULL, 30, 11, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `id` bigint(20) NOT NULL,
  `fechadevolucion` date DEFAULT NULL,
  `fechaprestamo` date DEFAULT NULL,
  `libro_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo_libro`
--

CREATE TABLE `prestamo_libro` (
  `id` bigint(20) NOT NULL,
  `libro_id` bigint(20) NOT NULL,
  `prestamo_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reparacion`
--

CREATE TABLE `reparacion` (
  `id` bigint(20) NOT NULL,
  `libro_id` bigint(20) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `password`, `role`, `username`) VALUES
(1, 'cliente123', 'CLIENTE', 'cliente1'),
(2, 'admin123', 'ADMIN', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK5o8hyav1crytl0w88avqvi55p` (`reparacion_id`),
  ADD KEY `FKe1ss87ymon6qj17bhr6jfh0c4` (`autor_id`),
  ADD KEY `FK5n4c3r1vke5yf6b6vd804c77y` (`categoria_id`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKk7uwwn2ov4su2plcn1jh4dbi0` (`libro_id`);

--
-- Indices de la tabla `prestamo_libro`
--
ALTER TABLE `prestamo_libro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpktuni36rafnsrw2cifiq54hj` (`libro_id`),
  ADD KEY `FK8o6otqunuj5t1bng5f1i0nb1n` (`prestamo_id`);

--
-- Indices de la tabla `reparacion`
--
ALTER TABLE `reparacion`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKe9983co95welnt639rjj0geas` (`libro_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK863n1y3x0jalatoir4325ehal` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autor`
--
ALTER TABLE `autor`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `prestamo_libro`
--
ALTER TABLE `prestamo_libro`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `reparacion`
--
ALTER TABLE `reparacion`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `FK5n4c3r1vke5yf6b6vd804c77y` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`),
  ADD CONSTRAINT `FKe1ss87ymon6qj17bhr6jfh0c4` FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`),
  ADD CONSTRAINT `FKjpvf6bb059eassewelthnt2te` FOREIGN KEY (`reparacion_id`) REFERENCES `reparacion` (`id`);

--
-- Filtros para la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `FKk7uwwn2ov4su2plcn1jh4dbi0` FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id`);

--
-- Filtros para la tabla `prestamo_libro`
--
ALTER TABLE `prestamo_libro`
  ADD CONSTRAINT `FK8o6otqunuj5t1bng5f1i0nb1n` FOREIGN KEY (`prestamo_id`) REFERENCES `prestamo` (`id`),
  ADD CONSTRAINT `FKpktuni36rafnsrw2cifiq54hj` FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id`);

--
-- Filtros para la tabla `reparacion`
--
ALTER TABLE `reparacion`
  ADD CONSTRAINT `FKofl1j4qs0s8dte65y2io5nb88` FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
