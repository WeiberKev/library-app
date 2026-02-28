package com.library.apiLibrary.controladores;

import com.library.apiLibrary.modelos.Reparacion;
import com.library.apiLibrary.servicios.ReparacionServicio;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reparaciones")
@CrossOrigin(origins = "*")
public class ReparacionControlador {

    private final ReparacionServicio servicio;

    public ReparacionControlador(ReparacionServicio servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<Reparacion> listar() {
        return servicio.listar();
    }

    @PostMapping
    public Reparacion guardar(@RequestBody Reparacion reparacion) {
        return servicio.guardar(reparacion);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        servicio.eliminar(id);
    }
}

