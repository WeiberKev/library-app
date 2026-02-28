package com.library.apiLibrary.repositorios;

import com.library.apiLibrary.modelos.Autor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutorRepositorio extends JpaRepository<Autor, Long> {
}
