import Card from '../components/Card/Card'
import Pagination from '../components/Pagination/Pagination'
import ControlesBusqueda from '../components/ControlesBusqueda/ControlesBusqueda'
import { useNavigate } from 'react-router-dom'
import { useFiltroTareas } from '../hooks/useFiltroTareas'

export default function Home() {

  
  const navigate = useNavigate();

  const {
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
  } = useFiltroTareas();
  
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
          <ControlesBusqueda
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            filtroEstado={filtroEstado}
            setFiltroEstado={setFiltroEstado}
          />


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
      
          <Pagination
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            setPaginaActual={setPaginaActual}
          />
  
    </>

  )}
 




  </main>
  )
}
