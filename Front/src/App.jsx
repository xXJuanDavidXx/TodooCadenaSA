import { useState } from 'react';
import MainLayout from './layout/MainLayout';
import Tarea from './componentes/Tarea/Tarea';
import ModalTarea from './componentes/Tarea/ModalTarea';
import useTareas from './hooks/useTareas';

function App() {
  const { tareas, loading, paginaActual, totalPaginas, cambiarPagina, toggleCompletado } = useTareas();
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  // Array de páginas [1, 2, 3...]
  const pages = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <MainLayout>
      <div className="mb-12 border-b border-red-950/60 pb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-heading font-black bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-red-400 mb-2 filter drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] tracking-tight">
            EL GRIMORIO
          </h1>
          <p className="text-[var(--text-secondary)] font-sans tracking-wide">
            Administra los <span className="text-red-600 font-bold">pactos de sangre</span> y sacrificios pendentes.
          </p>
        </div>
        <button className="bg-red-950/80 hover:bg-black text-red-500 border border-red-900 hover:border-red-500 hover:text-red-400 px-6 py-3.5 font-heading font-bold uppercase tracking-[0.2em] text-sm shadow-[0_0_15px_rgba(185,28,28,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] transition-all flex items-center justify-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Sellar Nuevo Pacto
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center flex-col items-center py-32 gap-6 scale-90 sm:scale-100">
          <div className="w-16 h-16 border-[3px] border-red-950 border-t-red-500 rounded-full animate-spin shadow-[0_0_20px_rgba(220,38,38,0.6)]"></div>
          <span className="text-red-700 font-heading font-bold tracking-[0.3em] uppercase text-sm animate-pulse">
            Invocando Rituales...
          </span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[50vh]">
            {tareas.length === 0 ? (
              <p className="col-span-full text-center py-20 font-heading text-xl text-red-950 tracking-[0.3em] uppercase">
                El abismo está vacío. No hay sangre que cobrar.
              </p>
            ) : (
              tareas.map(tarea => (
                <Tarea 
                  key={tarea.id} 
                  tarea={tarea}
                  onToggle={toggleCompletado}
                  onClick={setTareaSeleccionada} // Abre el modal con esta tarea
                />
              ))
            )}
          </div>

          {/* Paginador Satánico (Full SPA, sin recarga) */}
          {totalPaginas > 1 && (
            <div className="mt-16 mb-8 flex items-center justify-center gap-3 select-none">
              <button 
                disabled={paginaActual === 1}
                onClick={() => cambiarPagina(paginaActual - 1)}
                className="p-3 border border-red-900/40 text-red-800 hover:bg-red-950/40 hover:text-red-500 hover:border-red-700 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-red-900/40 transition-all font-heading"
                aria-label="Página Anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              
              <div className="flex gap-2">
                {pages.map(page => (
                  <button
                    key={page}
                    onClick={() => cambiarPagina(page)}
                    className={`min-w-[44px] h-11 px-2 flex items-center justify-center font-bold font-heading text-lg transition-all ${
                      paginaActual === page
                      ? 'border border-red-600 bg-red-900/20 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                      : 'border border-red-950/60 text-gray-600 hover:border-red-800 hover:text-red-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button 
                disabled={paginaActual === totalPaginas}
                onClick={() => cambiarPagina(paginaActual + 1)}
                className="p-3 border border-red-900/40 text-red-800 hover:bg-red-950/40 hover:text-red-500 hover:border-red-700 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-red-900/40 transition-all font-heading"
                aria-label="Siguiente Página"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          )}
        </>
      )}

      {/* Renderizado condicional del Modal Reactivo */}
      {tareaSeleccionada && (
        <ModalTarea 
          tarea={tareaSeleccionada} 
          onClose={() => setTareaSeleccionada(null)} 
        />
      )}
    </MainLayout>
  );
}

export default App;
