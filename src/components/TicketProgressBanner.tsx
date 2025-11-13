import { Clock, TrendingUp } from "lucide-react";

export const TicketProgressBanner = () => {
  const progress = 97;
  const ticketsRemaining = 15;

  return (
    <div className="relative bg-gradient-to-br from-landi-red/90 to-landi-red border-2 border-landi-red rounded-xl p-4 mb-6 overflow-hidden animate-fade-in">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }} />
      </div>
      
      <div className="relative z-10">
        {/* Barra de progresso mais robusta */}
        <div className="relative w-full h-3 bg-black/30 rounded-full overflow-hidden mb-3 shadow-inner">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-1000 ease-out shadow-lg"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          />
        </div>
        
        {/* Texto de urgência */}
        <div className="flex flex-col items-center justify-center gap-1 text-center">
          <p className="text-white text-sm font-bold leading-tight">
            Últimas unidades do Lote 1!
          </p>
          <p className="text-white/90 text-xs font-medium leading-tight">
            Quem deixar pra depois, paga mais caro.
          </p>
        </div>
      </div>
    </div>
  );
};