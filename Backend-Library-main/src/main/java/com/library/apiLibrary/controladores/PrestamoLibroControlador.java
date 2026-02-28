package com.library.apiLibrary.controladores;

import com.library.apiLibrary.modelos.PrestamoLibro;
import com.library.apiLibrary.servicios.PrestamoLibroServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prestamos-libros")
@CrossOrigin(origins = "*")
public class PrestamoLibroControlador {

    private final PrestamoLibroServicio servicio;

    public PrestamoLibroControlador(PrestamoLibroServicio servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<PrestamoLibro> obtenerTodos() {
        return servicio.listar();
    }

    @PostMapping
    public PrestamoLibro crear(@RequestBody PrestamoLibro prestamoLibro) {
        return servicio.guardar(prestamoLibro);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        servicio.eliminar(id);
    }
}

