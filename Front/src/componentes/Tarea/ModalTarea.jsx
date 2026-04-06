export default function ModalTarea({ tarea, onClose }) {
  if (!tarea) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay oscuro y desenfocado con cursor pointer para cerrar */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
      ></div>

      {/* Contenedor del Modal Infernal */}
      <div className="relative w-full max-w-3xl flex flex-col bg-[var(--bg-secondary)] border border-red-900/50 shadow-[0_0_80px_rgba(220,38,38,0.2)] overflow-hidden scale-100 animate-fade-in-up sm:max-h-[85vh] h-full sm:h-auto">
        
        {/* Cabecera pegajosa */}
        <div className="flex justify-between items-center p-5 sm:p-8 border-b border-red-900/40 bg-[var(--bg-tertiary)] shrink-0">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 tracking-wider">
            {tarea.titulo}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 hover:rotate-90 transition-all duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Cuerpo (Scrollable, Descripciones épicas) */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 bg-[var(--bg-secondary)]">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm font-heading uppercase tracking-widest text-red-900">
              Estado del Ritual: 
            </span>
            <span className={`px-4 py-1.5 text-xs font-bold font-heading uppercase tracking-widest border ${
              tarea.estado === 'completada' 
              ? 'border-gray-600 text-gray-500 bg-[var(--bg-tertiary)]' 
              : 'border-red-900/60 text-red-500 bg-red-950/20 shadow-[0_0_10px_rgba(220,38,38,0.2)]'
            }`}>
              {tarea.estado === 'completada' ? 'Almas Segadas (Completado)' : 'Sangre Pendiente'}
            </span>
          </div>

          <div className="prose prose-invert prose-red max-w-none text-gray-400 font-sans leading-relaxed text-base sm:text-lg whitespace-pre-wrap">
            {tarea.descripcion}
          </div>
        </div>

        {/* Footer pegajoso con acciones */}
        <div className="p-5 sm:p-6 border-t border-red-900/40 bg-[var(--bg-tertiary)] flex justify-end gap-5 shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-800 hover:border-gray-500 text-gray-500 hover:text-white font-heading uppercase text-sm font-bold tracking-[0.2em] transition-colors focus:outline-none"
          >
            Repudio
          </button>
          <button className="px-8 py-2.5 bg-red-950 border border-red-800 hover:border-red-500 hover:bg-black text-red-500 hover:text-red-400 font-heading uppercase text-sm font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(185,28,28,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all focus:outline-none focus:ring-1 focus:ring-red-500">
            Forjar Pacto (Editar)
          </button>
        </div>
      </div>
    </div>
  );
}
