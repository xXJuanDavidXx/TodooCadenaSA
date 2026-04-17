import { useTareas } from '../hooks/useTareas'
import Card from '../components/Card/Card'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {

  
  const [paginaActual, setPaginaActual] = useState(1)
  const totalTargetasPorPagina = 9



  const { tareas, loading, error, editarTarea, eliminar } = useTareas()
  

  const navigate = useNavigate()

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

  const tareasFiltradas = tareas.filter(tarea => {


    const coincidenciaBusqueda = tarea.titulo.toLowerCase().includes(busqueda.toLowerCase());


    let coincidenciaFiltro = true

    if (filtroEstado === "completados") coincidenciaFiltro = tarea.completado === true;
    if (filtroEstado === "pendientes") coincidenciaFiltro = tarea.completado === false;

      return coincidenciaBusqueda && coincidenciaFiltro

  })


  const indiceUltimaTarea = paginaActual * totalTargetasPorPagina
  const indicePrimeraTarea = indiceUltimaTarea - totalTargetasPorPagina


  const tareasPagina = tareasFiltradas.slice(indicePrimeraTarea, indiceUltimaTarea)

  const totalPaginas = Math.ceil(tareasFiltradas.length / totalTargetasPorPagina)
  
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, filtroEstado]);
  
  return (

    <main className="p-8 bg-gray-50 min-h-screen">

      {loading && <div className="flex items-center justify-center gap-2 min-h-[50vh]">
        <span className="size-3 animate-pulse rounded-full bg-indigo-600" />
        <span className="size-3 animate-pulse rounded-full bg-indigo-600 [animation-delay:0.2s]" />
        <span className="size-3 animate-pulse rounded-full bg-indigo-600 [animation-delay:0.4s]" />
      </div>}


      {error && <div className="text-center text-red-500 font-bold p-10"><p>Ocurrio un error: {error} </p></div>}

      {!loading && !error && (
        <>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">

            {/* Input de Búsqueda */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Buscar por título..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full border-2 border-black p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {/* Icono de Lupa simple de SVG */}
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Selector de Filtro */}
            <div className="flex shrink-0">
              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="cursor-pointer border-2 border-black bg-white p-3 font-semibold focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="todos">Todas las Tareas</option>
                <option value="pendientes">Pendientes</option>
                <option value="completados">Completadas</option>
              </select>
            </div>
          </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


          {tareasFiltradas.length === 0 && <p className="col-span-3 text-center text-gray-500">No hay tareas.</p>}

          {tareasPagina.map(tarea => (

            <Card
              key={tarea.id}
              id={tarea.id}
              titulo={tarea.titulo}
              descripcion={tarea.descripcion}
              isCompleted={tarea.completado}
              onToggle={() => toggleTask(tarea)}
              onDelete={() => onDelete(tarea)}
              onEdit={() => navigate(`/editar/${tarea.id}`)}

            />

          ))}
        </div>
      
  <div className="mt-8 flex items-center justify-center gap-4">
    
    {paginaActual > 1 && <button className="rounded-s-sm border border-black bg-black px-3 py-2 font-medium text-white transition-colors hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-offset-black"  onClick={() => setPaginaActual(paginaActual - 1)}>
      Anterior
    </button>}
    
    <p className="border-black bg-black px-3 py-2 font-medium text-white transition-colors hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-offset-black">
    Pagina {paginaActual} de {totalPaginas}
    </p>
    
    {paginaActual < totalPaginas && <button className="rounded-e-sm border border-black bg-black px-3 py-2 font-medium text-white transition-colors hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-offset-black" onClick={() => setPaginaActual(paginaActual + 1)} >
    Siguiente
    </button>}
  </div>
  
    </>

  )}
 




  </main>
  )
}
