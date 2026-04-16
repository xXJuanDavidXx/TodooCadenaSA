import React from 'react';

export default function Modal({ isOpen, onClose, title, children, onToggle, onDelete, isCompleted, id }) {
  if (!isOpen) return null; // Si todavia no es true no haga nada porfavor... gracias.

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >


        <div className="flex items-center justify-between border-b-2 border-black p-5 bg-white">
          <div className="flex w-12 justify-start">
            <input
              type="checkbox"
              id={`modal-task-${id}`}
              checked={isCompleted}
              onChange={() => onToggle && onToggle(id)}
              className="size-6 border-2 border-black text-black focus:ring-black cursor-pointer accent-black"
            />
          </div>

          <h3 className="flex-1 text-center text-xl font-black uppercase tracking-widest text-black truncate px-2">{title}</h3>

          <div className="flex w-12 justify-end">
            <button 
              className="rounded-lg border-2 border-black bg-white p-2 text-black transition-all hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              onClick={() => {
                onDelete && onDelete(id);
                onClose();
              }}
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
          </div>
        </div>


        <div className="p-8 max-h-[60vh] overflow-y-auto text-black font-medium leading-relaxed bg-white">
          {children}
        </div>

        <div className="border-t-2 border-black p-5 flex justify-center bg-gray-50">
          <button 
            onClick={onClose}
            className="w-full max-w-[200px] border-2 border-black bg-black px-6 py-3 font-bold text-white transition-all hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            CERRAR
          </button>
        </div>
      </div>
    </div>


          <h3 className="flex-1 text-center text-xl font-semibold text-gray-900 truncate px-2">{title}</h3>

          <div className="flex w-10 justify-end">
            <button 
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => {
                onDelete && onDelete(id);
                onClose();
              }}
              title="Eliminar tarea"
            >
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
    





        <div className="p-6 max-h-[70vh] overflow-y-auto text-gray-700 leading-relaxed">
          {children}
        </div>

        <div className="border-t p-4 flex justify-center">
          <button 
            onClick={onClose}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
