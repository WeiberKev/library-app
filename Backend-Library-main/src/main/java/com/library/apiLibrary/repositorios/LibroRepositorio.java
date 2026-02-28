package com.library.apiLibrary.repositorios;

import com.library.apiLibrary.modelos.Libro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LibroRepositorio extends JpaRepository<Libro, Long> {

    List<Libro> findByNombreContainingIgnoreCase(String nombre);

    List<Libro> findByCategoriaNombreContainingIgnoreCase(String nombre);
}

