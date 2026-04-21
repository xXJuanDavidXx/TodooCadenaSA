import { useState, useEffect, useMemo } from 'react'
import { useTareas } from './useTareas'

export const useFiltroTareas = () => {
  const [paginaActual, setPaginaActual] = useState(1)
  const totalTargetasPorPagina = 9

  const { tareas, loading, error, editarTarea, eliminar } = useTareas()

  const toggleTask = async (tarea) => {
    await editarTarea(tarea.id, { completado: !tarea.completado })
  }

  const onDelete = async (tarea) => {
    const confirmado = window.confirm(`¿Estás seguro de eliminar "${tarea.titulo}"?`)
    if (!confirmado) return;
    await eliminar(tarea.id)
  }

  const [busqueda, setBusqueda] = useState("")
  const [filtroEstado, setFiltroEstado] = useState("todos")   // Todas, Completadas, pendientes.

  const tareasFiltradas = useMemo(() => {
    return tareas.filter(tarea => {
      const coincidenciaBusqueda = tarea.titulo.toLowerCase().includes(busqueda.toLowerCase());
      let coincidenciaFiltro = true
      if (filtroEstado === "completados") coincidenciaFiltro = tarea.completado === true;
      if (filtroEstado === "pendientes") coincidenciaFiltro = tarea.completado === false;
      return coincidenciaBusqueda && coincidenciaFiltro
    })
  }, [tareas, busqueda, filtroEstado])

  const indiceUltimaTarea = paginaActual * totalTargetasPorPagina
  const indicePrimeraTarea = indiceUltimaTarea - totalTargetasPorPagina

  const tareasPagina = tareasFiltradas.slice(indicePrimeraTarea, indiceUltimaTarea)
  const totalPaginas = Math.ceil(tareasFiltradas.length / totalTargetasPorPagina)
  
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, filtroEstado]);

  return {
    loading,
    error,
    busqueda,
    setBusqueda,
    filtroEstado,
    setFiltroEstado,
    tareasFiltradas,
    tareasPagina,
    paginaActual,
    totalPaginas,
    setPaginaActual,
    toggleTask,
    onDelete
  }
}
