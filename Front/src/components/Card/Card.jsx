import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Card({ id, titulo, descripcion, isCompleted, onToggle, onDelete, onEdit }){
  const [isModalOpen, setIsModalOpen] = useState(false); //Interruptor para el modal

  return(
    <>
      <article className="h-full group relative flex items-start gap-4 rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        {/* Estado / Checkbox */}
        <div className="flex h-6 items-center">
          <input
            type="checkbox"
            id={`task-${id}`}
            checked={isCompleted}
            onChange={() => onToggle && onToggle(id)}
            className="size-5 border-2 border-black text-black focus:ring-black cursor-pointer accent-black"
          />
        </div>

        {/* Contenido */}
        <div className="flex-1 min-w-0">
          <h4 className={`break-words  text-lg font-bold uppercase tracking-tight transition-colors ${isCompleted ? 'text-gray-400 line-through' : 'text-black'}`}>
            {titulo || 'Nueva Tarea'}
          </h4>
          {descripcion && (
            <div className="relative">
              <p className={`mt-1 text-sm font-medium leading-relaxed line-clamp-2 ${isCompleted ? 'text-gray-300 line-through' : 'text-gray-600'}`}>
                {descripcion}
              </p>
              {descripcion.length > 100 && (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-1 text-xs font-bold uppercase tracking-wider text-black hover:underline"
                >
                  [ Detalles ]
                </button>
              )}
            </div>
          )}
        </div>

        {/* Acciones */}
        <div className="flex shrink-0 gap-2">
          <button 
            className="rounded-lg border-2 border-black bg-white p-2 text-black transition-all hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            onClick={() => onDelete && onDelete(id)}
            title="Eliminar tarea"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
            <button className="rounded-lg border-2 border-black bg-white p-2 text-black transition-all hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 " onClick={() => onEdit && onEdit()}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
              </svg>
            </button>
        </div>
      </article>

      <Modal 
        isOpen={isModalOpen} // No olvides david que este es el interruptor para activar el modal 
        onClose={() => setIsModalOpen(false)} 
        title={titulo}
        onToggle={onToggle}
        onDelete={onDelete}
        isCompleted={isCompleted}
        id={id}
      >
        <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{descripcion}</p>
      </Modal>
    </>
  )
}
