package com.library.apiLibrary.servicios;

import com.library.apiLibrary.modelos.PrestamoLibro;
import com.library.apiLibrary.repositorios.PrestamoLibroRepositorio;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrestamoLibroServicio {

    private final PrestamoLibroRepositorio repositorio;

    public PrestamoLibroServicio(PrestamoLibroRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    public List<PrestamoLibro> listar() {
        return repositorio.findAll();
    }

    public PrestamoLibro guardar(PrestamoLibro prestamoLibro) {
        return repositorio.save(prestamoLibro);
    }

    public void eliminar(Long id) {
        repositorio.deleteById(id);
    }
}
