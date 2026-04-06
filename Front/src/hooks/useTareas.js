import { useState, useEffect } from 'react';

export default function useTareas() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const porPagina = 8; // Tareas por página

  // TODO: [API] Configura tu URL base
  const API_URL = 'http://localhost:3000/api/tareas';

  // --------- 1. LEER TAREAS (GET) CON PAGINACIÓN ---------
  const fetchTareas = async (pagina = paginaActual) => {
    setLoading(true);
    try {
      /* TODO: [API GET] Descomenta y ajusta según tu backend
      const response = await fetch(`${API_URL}?page=${pagina}&limit=${porPagina}`);
      const data = await response.json();
      setTareas(data.items);
      setTotalPaginas(data.totalPages);
      */
      
      // Simulador interactivo mientras conectas la API real
      setTimeout(() => {
        const mockData = Array.from({ length: 24 }, (_, i) => ({
          id: i + 1,
          titulo: `Ritual de Sacrificio ${i + 1}`,
          descripcion: `[Códice #${i + 1}] Esta es la crónica de una invocación de dolor sin fin.\n\n` + `La sangre de los puros debe ser derramada sobre la piedra lunar, invocando el nombre del príncipe caído con cada amanecer, hasta que el cielo sangre ocre. `.repeat(15),
          estado: i % 3 === 0 ? 'completada' : 'pendiente'
        }));
        
        const start = (pagina - 1) * porPagina;
        const end = start + porPagina;
        
        setTareas(mockData.slice(start, end));
        setTotalPaginas(Math.ceil(mockData.length / porPagina));
        setLoading(false);
      }, 600); // Simulando retardo de red infernal

    } catch (error) {
      console.error("Error al obtener tareas benditas/malditas:", error);
      setLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchTareas(paginaActual);
  }, [paginaActual]);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // --------- 2. CREAR TAREA (POST) ---------
  // eslint-disable-next-line no-unused-vars
  const crearTarea = async (nuevaTarea) => {
    try {
      /* TODO: [API POST]
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaTarea)
      });
      fetchTareas(); // Refrescar lista
      */
    } catch (error) {
      console.error("Error al crear la petición a las tinieblas:", error);
    }
  };

  // --------- 3. ACTUALIZAR (PUT/PATCH) ---------
  // eslint-disable-next-line no-unused-vars
  const actualizarTarea = async (id, datosActualizados) => {
    try {
      /* TODO: [API PUT]
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosActualizados)
      });
      fetchTareas();
      */
    } catch (error) {
      console.error("Error al actualizar la maldición:", error);
    }
  };

  // --------- 4. ELIMINAR (DELETE) ---------
  // eslint-disable-next-line no-unused-vars
  const eliminarTarea = async (id) => {
    try {
      /* TODO: [API DELETE]
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTareas();
      */
    } catch (error) {
      console.error("Error al purgar la tarea:", error);
    }
  };

  // --------- 5. TOGGLE COMPLETADO (Sin Recarga) ---------
  const toggleCompletado = async (tarea) => {
    const nuevoEstado = tarea.estado === 'completada' ? 'pendiente' : 'completada';
    
    // UI Update Inmediato (SPA Reactividad instantánea) -> Mutamos localmente
    setTareas(tareas.map(t => t.id === tarea.id ? { ...t, estado: nuevoEstado } : t));

    try {
      /* TODO: [API PATCH/PUT para Check] 
       Petición real silenciosa por debajo
      await fetch(`${API_URL}/${tarea.id}/estado`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado })
      });
      */
    } catch (error) {
      console.error("El servidor rechazó el ritual de completado:", error);
      // Revertir estado local si falla la API
      setTareas(tareas.map(t => t.id === tarea.id ? { ...t, estado: tarea.estado } : t));
    }
  };

  return {
    tareas,
    loading,
    paginaActual,
    totalPaginas,
    cambiarPagina,
    fetchTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
    toggleCompletado
  };
}
