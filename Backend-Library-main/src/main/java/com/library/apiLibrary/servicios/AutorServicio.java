package com.library.apiLibrary.servicios;

import com.library.apiLibrary.modelos.Autor;
import com.library.apiLibrary.repositorios.AutorRepositorio;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutorServicio {

    private final AutorRepositorio repositorio;

    public AutorServicio(AutorRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    public List<Autor> listar() {
        return repositorio.findAll();
    }

    public Autor guardar(Autor autor) {
        return repositorio.save(autor);
    }

    public void eliminar(Long id) {
        repositorio.deleteById(id);
    }
}
