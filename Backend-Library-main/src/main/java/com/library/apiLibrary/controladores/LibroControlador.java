package com.library.apiLibrary.controladores;

import com.library.apiLibrary.modelos.Libro;
import com.library.apiLibrary.servicios.LibroServicio;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/libros")
@CrossOrigin(origins = "*")
@Tag(name = "Libros", description = "CRUD de Libros")
public class LibroControlador {

    @Autowired
    private LibroServicio libroServicio;

    // Crear un libro
    @PostMapping
    @Operation(summary = "Agregar Libro", description = "Adiciona un libro a Biblioteca")
    public ResponseEntity<?> createLibro(@RequestBody Libro nuevoLibro) {
        try {
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(libroServicio.saveLibro(nuevoLibro));
        } catch (Exception error) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());
        }
    }

    // Obtener todos los libros
    @GetMapping
    public ResponseEntity<?> getAllLibros() {
        try {
            List<Libro> libros = libroServicio.getLibros();
            return ResponseEntity.ok(libros);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    // Obtener libro por ID
    @GetMapping("/{id}")
    @Operation(summary = "Buscar libro por ID", description = "Debe indicar el ID del libro")
    public ResponseEntity<?> getLibroById(@PathVariable Long id) {
        try {
            Libro libro = libroServicio.getLibroPorId(id);
            return ResponseEntity.ok(libro);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("ID de libro NO encontrado");
        }
    }

    // Buscar libro por nombre
    @GetMapping("/buscar")
    public ResponseEntity<?> buscarLibrosPorNombre(@RequestParam String nombre) {
        try {
            List<Libro> libros = libroServicio.buscarPorNombre(nombre);
            if (libros.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("No se encontraron libros con el nombre: " + nombre);
            }
            return ResponseEntity.ok(libros);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al buscar libros: " + e.getMessage());
        }
    }

    // Buscar libro por categoría
    @GetMapping("/categoria")
    public ResponseEntity<?> buscarLibrosPorCategoria(@RequestParam String nombre) {
        try {
            List<Libro> libros = libroServicio.buscarPorCategoria(nombre);
            if (libros.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("No se encontraron libros en la categoría: " + nombre);
            }
            return ResponseEntity.ok(libros);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al buscar libros por categoría: " + e.getMessage());
        }
    }

    // Actualizar un libro
    @PutMapping("/{id}")
    public ResponseEntity<?> updateLibro(@PathVariable Long id, @RequestBody Libro datosNuevosLibro) {
        try {
            Libro libroModificado = libroServicio.updateLibro(id, datosNuevosLibro);
            return ResponseEntity.ok(libroModificado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("ID de libro no encontrado");
        }
    }

    // Eliminar un libro
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarLibro(@PathVariable Long id) {
        try {
            boolean eliminado = libroServicio.deleteLibro(id);
            if (eliminado) {
                return ResponseEntity.ok("Libro eliminado correctamente");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Libro no encontrado");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(e.getMessage());
        }
    }
}
