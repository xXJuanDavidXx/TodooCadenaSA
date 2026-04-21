export default function Pagination({ paginaActual, totalPaginas, setPaginaActual }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      {paginaActual > 1 && (
        <button
          className="rounded-s-sm border border-black bg-black px-3 py-2 font-medium text-white transition-colors hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-offset-black"
          onClick={() => setPaginaActual(paginaActual - 1)}
        >
          Anterior
        </button>
      )}

      <p className="border-black bg-black px-3 py-2 font-medium text-white transition-colors hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-offset-black">
        Pagina {paginaActual} de {totalPaginas}
      </p>

      {paginaActual < totalPaginas && (
        <button
          className="rounded-e-sm border border-black bg-black px-3 py-2 font-medium text-white transition-colors hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-offset-black"
          onClick={() => setPaginaActual(paginaActual + 1)}
        >
          Siguiente
        </button>
      )}
    </div>
  );
}
