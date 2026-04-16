import { useTareas } from '../hooks/useTareas'
import Card from '../components/Card/Card' 


export default function Home(){

  const {tareas, loading, error, agregarNuevatarea, editarTarea, eliminar} = useTareas() 
  // Ya desestructuradas las tareas| 


  const toggleTask = async (tarea) => {
    await editarTarea(tarea.id, { completado: !tarea.completado})
  }


  const onDelete = async (tarea) => {
    await eliminar(tarea.id)
  }

  return (
    
    <main className="p-8 bg-gray-50 min-h-screen">
      
      {loading && <div className="text-center text-blue-500 font-bold p-10"><p>Cargando tareas... </p></div>}
      

      {error && <div className="text-center text-red-500 font-bold p-10"><p>Ocurrio un error: {error} </p></div>}
    
      { !loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {tareas.length === 0 && <p className="col-span-3 text-center text-gray-500">No hay tareas creadas.</p>}

        {tareas.map(tarea => (

          <Card
          key={tarea.id}
          id={tarea.id}
          titulo={tarea.titulo}
          descripcion={tarea.descripcion}
          isCompleted={tarea.completado}
          onToggle={() => toggleTask(tarea)}
          onDelete={() => onDelete(tarea)}  

        />

        ))}
      </div>
      )}

    </main>
  )
}
