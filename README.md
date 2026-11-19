# Library App · Sombras y Letras

Aplicación full stack para gestionar una biblioteca: libros, autores, categorías, usuarios, préstamos y reparaciones.
Backend en **Java con Spring Boot** expuesto como API REST, base de datos **MySQL** y frontend en **React** (Vite).

*English summary below.*

## Stack

| Capa | Tecnologías |
|---|---|
| Backend | Java 17, Spring Boot 3.4 (Web, Data JPA), Lombok |
| Base de datos | MySQL (`dblibrarybp`) |
| Documentación | Swagger / OpenAPI (springdoc) |
| Pruebas | JUnit 5, Mockito, MockMvc (`@WebMvcTest`) |
| Frontend | React, Vite, React Router, Bootstrap, Chart.js |

## Arquitectura

```
sombrasyletras/          Frontend React (Vite)  ──HTTP──►  http://localhost:8080
Backend-Library-main/    API REST Spring Boot
  controladores/         Endpoints REST
  servicios/             Lógica de negocio
  repositorios/          Spring Data JPA
  modelos/               Entidades JPA
  Base de datos/         Script SQL de la base
```

Cliente y servidor están desacoplados: el frontend solo conoce la URL base de la API (`src/config.js`).

## Endpoints principales

| Recurso | Ruta base | Operaciones |
|---|---|---|
| Libros | `/libros` | `GET` lista, `GET /{id}`, `GET /buscar`, `GET /categoria`, `POST`, `PUT /{id}`, `DELETE /{id}` |
| Préstamos | `/prestamos` | `GET`, `POST`, `DELETE /{id}`, `GET /usuario/{id}` |
| Autores | `/api/autores` | CRUD |
| Categorías | `/api/categorias` | CRUD |
| Usuarios | `/api/usuarios` | CRUD |
| Préstamos de libros | `/api/prestamos-libros` | CRUD |
| Reparaciones | `/api/reparaciones` | CRUD |

Con el backend en marcha, la documentación interactiva queda en `http://localhost:8080/swagger-ui.html`.

## Cómo ejecutarlo

**Requisitos:** Java 17, MySQL y Node.js.

1. Crea la base de datos importando `Backend-Library-main/Base de datos/dblibrarybp.sql`.
2. Ajusta usuario y contraseña de MySQL en `Backend-Library-main/src/main/resources/application.properties`.
3. Backend:
   ```bash
   cd Backend-Library-main
   ./mvnw spring-boot:run        # Windows: mvnw.cmd spring-boot:run
   ```
4. Frontend:
   ```bash
   cd sombrasyletras
   npm install
   npm run dev
   ```

## Pruebas

```bash
cd Backend-Library-main
./mvnw test
```

`LibroControladorTest` prueba el controlador de libros con MockMvc, simulando `LibroServicio` con Mockito, sin levantar el servidor ni la base de datos.

---

## English summary

Full stack library management app. **Java 17 + Spring Boot** REST API (JPA, MySQL, Swagger/OpenAPI docs), controller tests with **JUnit 5, Mockito and MockMvc**, and a **React + Vite** frontend that talks to the API over HTTP. Run the SQL script, set your MySQL credentials in `application.properties`, start the backend with `./mvnw spring-boot:run` and the frontend with `npm install && npm run dev`.

## Autor

**Kevin Bedoya Acevedo** · [Portafolio](https://kevinbedoya.netlify.app) · [LinkedIn](https://linkedin.com/in/dankev109)
