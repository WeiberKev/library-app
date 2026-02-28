package com.library.apiLibrary.servicios;

import com.library.apiLibrary.modelos.Usuario;
import com.library.apiLibrary.repositorios.UsuarioRepositorio;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServicio {

    private final UsuarioRepositorio usuarioRepositorio;

    public UsuarioServicio(UsuarioRepositorio usuarioRepositorio) {
        this.usuarioRepositorio = usuarioRepositorio;
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepositorio.findAll();
    }

    public Optional<Usuario> obtenerPorUsername(String username) {
        return usuarioRepositorio.findByUsername(username);
    }

    public boolean existeUsername(String username) {
        return usuarioRepositorio.existsByUsername(username);
    }

    public Usuario registrar(Usuario usuario) {
        if (usuarioRepositorio.existsByUsername(usuario.getUsername())) {
            throw new RuntimeException("El nombre de usuario ya existe");
        }
        return usuarioRepositorio.save(usuario);
    }

    public Optional<Usuario> login(String username, String password) {
        return usuarioRepositorio.findByUsername(username)
                .filter(user -> user.getPassword().equals(password));
    }
}

