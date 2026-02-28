package com.library.apiLibrary;

import com.library.apiLibrary.controladores.LibroControlador;
import com.library.apiLibrary.modelos.Libro;
import com.library.apiLibrary.servicios.LibroServicio;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(LibroControlador.class)
public class LibroControladorTest {
    @Autowired
    private MockMvc mockMvc;
    @MockitoBean
    private LibroServicio libroServicio;

    // para serializar y deserializar objetos Java en JSON, y viceversa
    private ObjectMapper objectMapper;
    private Libro libroEjemplo;

    @BeforeEach
    void setup(){
        objectMapper = new ObjectMapper();
        libroEjemplo = new Libro();
        libroEjemplo.setId(1L);// 1 de tipo Long
        libroEjemplo.setNombre("Cien Años de Pruebas");

    }
    @Test
    void testCrearLibro() throws Exception {
        /*
        Mockito se usa aquí para simular (mockear)
        el comportamiento de la clase LibroServicio.
        any(Libro.class) indica que no importa qué instancia de Libro se le pase,
        el método saveLibro devolverá siempre el objeto libroEjemplo.
        Esto aísla la prueba del servicio real y simula que se guardó correctamente un libro.
        */
        when(libroServicio.saveLibro(any(Libro.class))).thenReturn(libroEjemplo);

        //Este bloque usa MockMvc, que simula una petición HTTP sin necesidad de levantar un servidor real.
        /*
        post("/libros"): indica que se está haciendo una petición POST al endpoint /libros.
        contentType(MediaType.APPLICATION_JSON): especifica que el cuerpo de la petición será
        en formato JSON.
        content(...): convierte el objeto libroEjemplo a JSON usando ObjectMapper
         y lo manda en el cuerpo de la petición.

         .andExpect(...)
        Después de hacer la petición simulada, se definen las expectativas del resultado:
        .andExpect(status().isCreated())
        Espera que la respuesta tenga un código de estado HTTP 201 Created.

        .andExpect(jsonPath("$.nombre").value("Cien Años de Soledad"));
        Usa jsonPath para validar que la propiedad nombre en el JSON de respuesta
        sea "Cien Años de Soledad".

        En Resumen:
        Simula que el servicio LibroServicio guarda correctamente un libro.
        Hace una petición POST como si un cliente estuviera creando un libro.

        Verifica que:

            La respuesta tiene estado 201 Created.
            El JSON de respuesta contiene el nombre correcto del libro.
         */
        mockMvc.perform(post("/libros")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(libroEjemplo)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.autor").value("Gabriel García Márquez"))
                .andExpect(jsonPath("$.nombre").value("Cien Años de Pruebas"));
    }

    @Test
    void testObtenerLibroPorId() throws Exception {
        when(libroServicio.getLibroPorId(1L)).thenReturn(libroEjemplo);

        mockMvc.perform(get("/libros/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.autor").value("Gabriel García Márquez"));
    }

    @Test
    void testBuscarLibroPorNombre() throws Exception {
        when(libroServicio.buscarPorNombre("Cien")).thenReturn(Arrays.asList(libroEjemplo));

        mockMvc.perform(get("/libros/buscar?nombre=Cien"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nombre").value("Cien Años de Pruebas"));
    }

    @Test
    void testActualizarLibro() throws Exception {
        Libro libroActualizado = new Libro();
        libroActualizado.setId(2L);
        libroActualizado.setNombre("Libro Actualizado");
        // en el dato del id, se puede cambiar a 2L para que genere el error
        // basado en el id que se envía al momento de crear el libro
        // con 1L no genere error
        when(libroServicio.updateLibro(eq(1L), any(Libro.class))).thenReturn(libroActualizado);
        // Si se cambia el id en la url /libros/1 por otro valor
        // se genera el error
        mockMvc.perform(put("/libros/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(libroActualizado)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nombre").value("Libro Actualizado"));
    }
    @Test
    void testEliminarLibro() throws Exception {
        when(libroServicio.deleteLibro(1L)).thenReturn(true);

        mockMvc.perform(delete("/libros/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("Libro eliminado correctamente"));
    }

    @Test
    void testEliminarLibroNoEncontrado() throws Exception {
        when(libroServicio.deleteLibro(2L)).thenReturn(false);

        mockMvc.perform(delete("/libros/2"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Libro no encontrado"));
    }



}
