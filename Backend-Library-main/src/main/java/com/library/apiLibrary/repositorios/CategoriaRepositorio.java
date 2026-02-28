package com.library.apiLibrary.repositorios;

import com.library.apiLibrary.modelos.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepositorio extends JpaRepository<Categoria, Long> {
}
