package com.library.apiLibrary.repositorios;

import com.library.apiLibrary.modelos.PrestamoLibro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrestamoLibroRepositorio extends JpaRepository<PrestamoLibro, Long> {
}
