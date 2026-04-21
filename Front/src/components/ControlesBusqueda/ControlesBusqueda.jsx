export default function ControlesBusqueda({ busqueda, setBusqueda, filtroEstado, setFiltroEstado }) {
  return (
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
  );
}
