package com.library.apiLibrary.servicios;

import com.library.apiLibrary.modelos.Reparacion;
import com.library.apiLibrary.repositorios.ReparacionRepositorio;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReparacionServicio {

    private final ReparacionRepositorio repositorio;

    public ReparacionServicio(ReparacionRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    public List<Reparacion> listar() {
        return repositorio.findAll();
    }

    public Reparacion guardar(Reparacion reparacion) {
        return repositorio.save(reparacion);
    }

    public void eliminar(Long id) {
        repositorio.deleteById(id);
    }
}

