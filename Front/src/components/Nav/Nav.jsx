import { Link, useLocation } from 'react-router-dom'



export default function Nav(){


    const location = useLocation();

    const claseActiva = "rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white";
    const claseInactiva = "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white";

  
  return( 
    <>
      {/* Include this script tag or install `@tailwindplus/elements` via npm: */}
      {/*  */}
      <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
             
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex shrink-0 items-center">
                <img
                  src="https://www.cadena.com.co/wp-content/uploads/Recurso-2.png"
                  alt="Your Company"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 justify-end">
                  {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                  <Link to="/" className={location.pathname === "/" ? claseActiva : claseInactiva}>Tareas</Link>
                  <Link to="/crear" className={location.pathname === "/crear" ? claseActiva : claseInactiva}>Nueva Tarea</Link>          
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            </div>
          </div>
        </div>
        <el-disclosure id="mobile-menu" hidden="" className="block sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 ">
            {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
            <Link to="/" className={location.pathname === "/" ? claseActiva : claseInactiva}>Tareas</Link>
    
            <Link to="/crear" className={location.pathname === "/crear" ? claseActiva : claseInactiva}>Nueva Tarea</Link>          
          </div>
        </el-disclosure>
      </nav>
    </>
  )
}
