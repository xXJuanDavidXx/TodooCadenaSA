import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useTareas } from "../../hooks/useTareas"
import { getTareabyId } from "../../services/tareasService"


export default function Edit(){
    
    const {id} = useParams();
    const navigate = useNavigate();
    const { editarTarea } = useTareas(); 


    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cargando, setCargando] = useState(true)  


    useEffect( () =>{
      
      const cargarTarea = async () =>{
      try {
        
        const tarea = await getTareabyId(id)
        setTitulo(tarea.titulo)
        setDescripcion(tarea.descripcion || '')
        
      } catch (error) {
        console.error("Error al obtener tarea por ID:", error);
      }finally{
        setCargando(false)
      }

    };
    cargarTarea()
    }, [id]) //DEPENDEMOS COMPLETAMENTE DEL ID


  const handleSubmit = async (e) => {
    e.preventDefault();
      
    if (!titulo.trim()) return;
    
    await editarTarea(id, {titulo : titulo, descripcion : descripcion})
    navigate("/")
  }

  
    if (cargando) return(<div className="flex items-center justify-center gap-2 min-h-[50vh]">
      <span className="size-3 animate-pulse rounded-full bg-indigo-600" />
      <span className="size-3 animate-pulse rounded-full bg-indigo-600 [animation-delay:0.2s]" />
      <span className="size-3 animate-pulse rounded-full bg-indigo-600 [animation-delay:0.4s]" />
    </div>) 

    
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="p-8">
            <h2 className="mb-6 text-center text-2xl font-bold uppercase tracking-tight text-black">
              Editar Tarea
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="titulo" className="block text-sm font-bold uppercase tracking-wide text-black">
                  Título
                </label>
                <input
                  type="text"
                  id="titulo"
                  placeholder="¿Qué hay que hacer?"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className="mt-2 w-full border-2 border-black bg-white px-4 py-3 text-black transition-all placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-bold uppercase tracking-wide text-black">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  placeholder="Detalles de la tarea..."
                  value={descripcion}
                  className="mt-2 w-full resize-none border-2 border-black bg-white px-4 py-3 text-black transition-all placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm"
                  rows={4}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="group relative w-full border-2 border-black bg-black px-6 py-4 font-bold text-white transition-all hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  GUARDAR TAREA
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
