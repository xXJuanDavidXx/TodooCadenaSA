import { API_URL } from './api';

export const getTareas = async () => {
    try {
        const response = await fetch(`${API_URL}/tareas`);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();
        return data; // Esto devolverá un arreglo "[]" con las tareas.
    } catch (error) {
        console.error("Error al obtener tareas:", error);
        throw error;
    }
};

export const getTareabyId = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tareas/${id}`);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();
        return data; // Esto devolverá un objeto "{}" con la tarea.
    } catch (error) {
        console.error("Error al obtener tarea por ID:", error);
        throw error;
    }
}


export const crearTarea = async (nuevaTarea) => {
    try {
        const response = await fetch(`${API_URL}/tareas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaTarea),
        });
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();
        return data; // Esto devolverá un objeto "{}" la respuesta OK si todo sale bien. 
    } catch (error) {
        console.error("Error al crear tarea:", error);
        throw error;
    }
}


export const actualizarTarea = async (id, tareaActualizada) => {
    try {
        const response = await fetch(`${API_URL}/tareas/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tareaActualizada),
        });
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();
        return data; // Esto devolverá un objeto "{}" los detalles de la actualización.. 
    } catch (error) {
        console.error("Error al actualizar tarea:", error);
        throw error;
    }
}



export const eliminarTarea = async (id) =>{
  try{
    const response = await fetch(`${API_URL}/tareas/${id}`, { method: "DELETE"})

    if (!response.ok){
      throw new Error(`Error en la petición: ${response.status}`);
    }
    const data = await response.json();
    return data
  }
  catch (error){
     console.error("Error al actualizar tarea:", error);
        throw error;
  }

}
