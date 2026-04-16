import { useState, useEffect } from 'react';
import { getTareas, crearTarea, actualizarTarea, eliminarTarea } from '../services/tareasService';

export const useTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función principal para cargar la data de arranque desde el Backend
    const cargarTareas = async () => {
        try {
            setLoading(true);
            const data = await getTareas();
            setTareas(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    //  Este efecto se ejecuta automáticamente al abrir/montar la aplicación
    useEffect(() => {
        cargarTareas();
    }, []);

    //  Función de ejemplo de cómo manejar acciones con la UI (Tú harás las de editar y borrar)
    const agregarNuevaTarea = async (nuevaTarea) => {
        try {
            await crearTarea(nuevaTarea);
            // Cuando creamos con éxito en el backend, volvemos a solicitar 
            // la lista completa de tareas ¡Para que la vista se mantenga fresquita!
            await cargarTareas(); 
        } catch (err) {
            console.error(err);
            // Podrías poner también un setError aquí
        }
    };

    // --- ¡Tu turno de nuevo! ---
    // Intenta completar estas dos funciones consumiendo los endpoints de tareasService.js
    // y recordando volver a llamar cargarTareas() si hay éxito, para actualizar la pantalla.
    
    const editarTarea = async (id, datosActualizados) => { 

      try {

        await actualizarTarea(id, datosActualizados)
        
        await cargarTareas(); 
      } catch (error) {
        console.error(error)
      }

    }
    
    
    const eliminar = async (id) => { 

      try {
        await eliminarTarea(id)

        await cargarTareas()
      } catch (error) {
        
      }

    }

    // Finalmente retornamos lo que la pantalla principal (App.jsx) va a poder utilizar.
    return {
        tareas,
        loading,
        error,
        agregarNuevaTarea,
        editarTarea,
        eliminar
    };
};

