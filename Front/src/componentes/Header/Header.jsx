export default function Header() {
  return (
    <header className="sticky top-0 z-40 glass-dark transition-all duration-300 shadow-[0_4px_30px_rgba(220,38,38,0.05)] border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-950/50 border border-red-800 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(185,28,28,0.4)]">
               {/* Estrella del Sendero de la Mano Izquierda (Pentagrama invertido) */}
               <svg className="w-7 h-7 rotate-180 drop-shadow-[0_0_3px_rgba(220,38,38,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
               </svg>
            </div>
            <span className="font-heading font-black text-2xl tracking-[0.2em] text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">
              OMEGA
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="font-heading tracking-[0.2em] uppercase text-[13px] font-bold text-red-800 hover:text-red-500 transition-colors drop-shadow-md cursor-crosshair">Invocaciones</a>
            <a href="#" className="font-heading tracking-[0.2em] uppercase text-[13px] font-bold text-gray-500 hover:text-red-500 transition-colors cursor-crosshair">Grimorio</a>
            <a href="#" className="font-heading tracking-[0.2em] uppercase text-[13px] font-bold text-gray-500 hover:text-red-500 transition-colors cursor-crosshair">Purgatorio</a>
          </nav>
          
          <div className="flex items-center gap-5">
            <button className="p-2 text-red-900 hover:text-red-500 transition-colors" title="Ajustes Oscuros">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
            <div className="h-10 w-10 border border-red-900 cursor-pointer overflow-hidden relative grayscale hover:grayscale-0 transition-all shadow-[0_0_10px_rgba(220,38,38,0.2)]">
              <img className="object-cover w-full h-full scale-110" src="https://ui-avatars.com/api/?name=Satan&background=000&color=b91c1c&rounded=false&font-weight=bold" alt="Señor Oscuro" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
