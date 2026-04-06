export default function Tarea({ tarea, onToggle, onClick }) {
  const isCompletada = tarea.estado === 'completada';
  
  return (
    <article 
      className="group relative bg-[var(--bg-secondary)] p-6 flex flex-col h-full satanic-border cursor-pointer select-none"
      onClick={() => onClick(tarea)}
    >
      <div className="flex justify-between items-start mb-5">
        <label 
          className="flex items-center gap-3 cursor-pointer z-10"
          onClick={(e) => e.stopPropagation()} // Evitar abrir Modal al hacer toggle
        >
          <div className="relative flex items-center justify-center w-6 h-6 border-[1.5px] border-red-900 bg-[#0a0a0a] rounded-sm overflow-hidden group/check hover:border-red-500 transition-colors shadow-[0_0_10px_rgba(220,38,38,0.15)]">
            <input 
              type="checkbox" 
              checked={isCompletada} 
              onChange={() => onToggle(tarea)}
              className="peer sr-only"
            />
            {/* Visto rojo sangre (SVG customizado) */}
            <svg 
              className={`w-5 h-5 text-red-600 drop-shadow-[0_0_5px_rgba(220,38,38,1)] transition-transform duration-300 ${isCompletada ? 'scale-100' : 'scale-0'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className={`text-xs font-heading font-bold uppercase tracking-[0.2em] transition-colors ${
            isCompletada ? 'text-gray-700 line-through' : 'text-red-800 group-hover:text-red-500'
          }`}>
            {isCompletada ? 'Alma Segada' : 'Sangre Pendiente'}
          </span>
        </label>
      </div>
      
      <h3 className={`text-xl font-heading font-bold tracking-wide mb-3 transition-colors ${
        isCompletada ? 'text-gray-700' : 'text-gray-200 group-hover:text-red-500'
      }`}>
        {tarea.titulo}
      </h3>
      
      <p className={`text-sm line-clamp-3 mb-6 flex-1 font-sans leading-relaxed ${
        isCompletada ? 'text-gray-800' : 'text-gray-500'
      }`}>
        {tarea.descripcion}
      </p>
      
      <div className="mt-auto pt-4 border-t border-red-950/40 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-red-900 font-heading font-bold tracking-[0.25em] uppercase flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Invocación
        </span>
        <button 
          className="text-red-900 group-hover:text-red-500 focus:outline-none focus:ring-0 transition-colors"
          title="Ver Pacto Completo"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>
    </article>
  );
}
