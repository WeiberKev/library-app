package com.library.apiLibrary.servicios;

import com.library.apiLibrary.modelos.Categoria;
import com.library.apiLibrary.repositorios.CategoriaRepositorio;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServicio {

    private final CategoriaRepositorio repositorio;

    public CategoriaServicio(CategoriaRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    public List<Categoria> listar() {
        return repositorio.findAll();
    }

    public Categoria guardar(Categoria categoria) {
        return repositorio.save(categoria);
    }

    public void eliminar(Long id) {
        repositorio.deleteById(id);
    }
}
