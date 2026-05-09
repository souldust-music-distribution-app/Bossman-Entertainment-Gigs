import React from 'react';

const BossmanApp = () => {
  // YOUR INTEGRATED YOUTUBE IDS
  const videoWall = [
    { id: "r0NQmdi8BEA", title: "Vico Green Afro Tech" },
    { id: "l_5mKnJatQs", title: "McLight Live Mix" },
    { id: "C9h5BvJEvHo", title: "Bossman Experience" },
    { id: "serSXGsCDCU", title: "Selective Saturdays" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500 pb-20">
      
      {/* APP HEADER */}
      <header className="pt-20 pb-10 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-yellow-500/10 blur-[100px] rounded-full -z-10"></div>
        <h1 className="text-5xl font-black tracking-tighter leading-none mb-2">
          BOSSMAN <br/> <span className="text-yellow-500">PORTAL</span>
        </h1>
        <p className="text-[10px] tracking-[0.5em] font-bold text-gray-500 uppercase">Vico Green x McLight</p>
      </header>

      {/* MOBILE GIG SLIDER AREA */}
      <section className="px-6 mb-12">
        <h2 className="text-xs font-black uppercase tracking-widest text-yellow-500 mb-4 italic">Next Experience</h2>
        <div className="bg-neutral-900 rounded-[30px] p-2 border border-white/5 shadow-2xl">
          <div className="h-64 bg-neutral-800 rounded-[25px] overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             <div className="absolute bottom-4 left-4">
                <p className="text-[10px] font-black text-yellow-500 uppercase">25 April 2026</p>
                <h3 className="text-xl font-black uppercase">Selective Saturdays</h3>
             </div>
             {/* Replace with your flyer image path */}
             <img src="/assets/flyer.jpg" className="w-full h-full object-cover opacity-60" alt="Gig" />
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEO GRID (The 4 links you provided) */}
      <section className="px-6">
        <h2 className="text-xs font-black uppercase tracking-widest text-yellow-500 mb-4 italic">The Vault (Live Sets)</h2>
        <div className="grid grid-cols-1 gap-6">
          {videoWall.map((vid) => (
            <div key={vid.id} className="group">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black shadow-lg group-active:scale-95 transition-transform">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2">{vid.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING ACTION TAB (App Navigation) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full py-4 px-8 flex justify-between items-center shadow-2xl z-[100]">
        <button className="text-yellow-500 scale-110">🏠</button>
        <button className="text-gray-500 opacity-50">📅</button>
        <button className="bg-yellow-500 text-black font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-tighter">Book</button>
        <button className="text-gray-500 opacity-50">📷</button>
        <button className="text-gray-500 opacity-50">⚙️</button>
      </nav>

    </div>
  );
};

export default BossmanApp;
