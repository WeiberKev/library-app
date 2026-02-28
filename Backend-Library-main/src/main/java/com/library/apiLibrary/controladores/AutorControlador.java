package com.library.apiLibrary.controladores;

import com.library.apiLibrary.modelos.Autor;
import com.library.apiLibrary.servicios.AutorServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/autores")
@CrossOrigin(origins = "*")
public class AutorControlador {

    private final AutorServicio servicio;

    public AutorControlador(AutorServicio servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<Autor> listar() {
        return servicio.listar();
    }

    @PostMapping
    public Autor guardar(@RequestBody Autor autor) {
        return servicio.guardar(autor);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        servicio.eliminar(id);
    }
}
