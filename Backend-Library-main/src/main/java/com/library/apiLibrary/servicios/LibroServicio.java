package com.library.apiLibrary.servicios;

import com.library.apiLibrary.modelos.Libro;
import com.library.apiLibrary.repositorios.LibroRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibroServicio {

    @Autowired
    private LibroRepositorio libroRepositorio;

    public LibroServicio(LibroRepositorio libroRepositorio) {
        this.libroRepositorio = libroRepositorio;
    }

    public Libro saveLibro(Libro libro) throws Exception {
        try {
            return libroRepositorio.save(libro);
        } catch (Exception e) {
            throw new Exception("No se pudo guardar el libro...", e);
        }
    }

    public List<Libro> getLibros() throws Exception {
        try {
            return this.libroRepositorio.findAll();
        } catch (Exception e) {
            throw new Exception("Error al obtener la lista de libros", e);
        }
    }

    // ✅ Nueva versión: buscar por nombre de categoría
    public List<Libro> buscarPorCategoria(String categoriaNombre) {
        return libroRepositorio.findByCategoriaNombreContainingIgnoreCase(categoriaNombre);
    }

    public Libro getLibroPorId(Long id) throws Exception {
        try {
            Optional<Libro> libroBuscado = libroRepositorio.findById(id);
            if (libroBuscado.isPresent()) {
                return libroBuscado.get();
            } else {
                throw new Exception("No se encontró el libro con ID: " + id);
            }
        } catch (Exception e) {
            throw new Exception("Error al buscar el libro: " + e.getMessage(), e);
        }
    }

    public List<Libro> buscarPorNombre(String nombre) {
        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre del libro no puede estar vacío");
        }
        return libroRepositorio.findByNombreContainingIgnoreCase(nombre);
    }

    public Libro updateLibro(Long id, Libro datosNuevosLibro) throws Exception {
        try {
            Optional<Libro> libroExistente = libroRepositorio.findById(id);

            if (libroExistente.isPresent()) {
                Libro libroAEditar = libroExistente.get();
                libroAEditar.setNombre(datosNuevosLibro.getNombre());
                libroAEditar.setAutor(datosNuevosLibro.getAutor());
                libroAEditar.setCategoria(datosNuevosLibro.getCategoria());
                libroAEditar.setImagenUrl(datosNuevosLibro.getImagenUrl());
                libroAEditar.setPopularidad(datosNuevosLibro.getPopularidad());

                return libroRepositorio.save(libroAEditar);
            } else {
                throw new Exception("Libro no encontrado con ID: " + id);
            }

        } catch (Exception e) {
            throw new Exception("Error al modificar el libro: " + e.getMessage(), e);
        }
    }

    public boolean deleteLibro(Long id) throws Exception {
        try {
            Optional<Libro> libroAEliminar = libroRepositorio.findById(id);
            if (libroAEliminar.isPresent()) {
                libroRepositorio.deleteById(id);
                return true;
            } else {
                throw new Exception("ID de Libro NO encontrado");
            }
        } catch (Exception e) {
            throw new Exception("Error al eliminar el libro: " + e.getMessage(), e);
        }
    }
}
