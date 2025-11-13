import landiTurbinaLogo from "@/assets/landi-turbina-logo-new.svg";
import dieselLogo from "@/assets/diesel.png";
import { Button } from "@/components/ui/button";

interface HeaderDesktopProps {
  parallaxSlow: number;
  parallaxMedium: number;
  parallaxFast: number;
}

export const HeaderDesktop = ({ parallaxSlow, parallaxMedium, parallaxFast }: HeaderDesktopProps) => {
  return (
    <section className="relative h-screen overflow-hidden bg-landi-black flex flex-col">
      <div className="relative flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center text-center space-y-6 max-w-7xl px-8">
          <div 
            className="text-center mb-2"
            style={{ transform: `translateY(${parallaxSlow}px)` }}
          >
            <h1 className="text-landi-white text-2xl font-bold tracking-tight leading-tight" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              O EVENTO QUE VAI MARCAR O NOVO
              <br />
              CICLO DO{" "}
              <span className="text-landi-red" style={{
                textShadow: '0 0 15px rgba(229, 9, 20, 0.6)'
              }}>
                DIESEL
              </span>
              {" "}NO INTERIOR PAULISTA
            </h1>
          </div>
          
          <div 
            className="w-full"
            style={{ transform: `translateY(${parallaxFast}px)` }}
          >
            <img
              src={landiTurbinaLogo}
              alt="Landi Turbina - 1º Encontro Diesel Interior Paulista"
              className="w-full h-auto mx-auto"
              style={{ maxWidth: '1800px' }}
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          <div 
            className="space-y-4"
            style={{ transform: `translateY(${parallaxFast * 0.8}px)` }}
          >
            <div className="space-y-2">
              <div className="space-y-1">
                <p className="text-landi-white text-base font-semibold tracking-wide">
                  Prepare-se para 13 e 14 de dezembro
                </p>
                <p className="text-landi-gray text-sm font-normal">
                  Avaré/SP – Recinto de Exposições EMAPA
                </p>
              </div>
              <p className="text-landi-gray text-sm font-normal leading-relaxed">
                Dois dias de ronco, pista, camarote, influenciadores e muito diesel bruto.
              </p>
            </div>

            <Button
              id="cta-header-desktop-ingresso"
              size="lg"
              onClick={() => {
                document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-landi-gold hover:bg-landi-gold-dark text-black font-bold text-base px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ 
                boxShadow: '0 0 22px rgba(255, 211, 56, 0.8)',
                animation: 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              GARANTIR MEU INGRESSO AGORA
            </Button>
            
            <p className="text-landi-gold text-xs font-semibold animate-pulse">
              Ingressos voando — garanta o seu antes da virada!
            </p>

            <div 
              className="flex flex-col items-center gap-3 pt-4"
              style={{ transform: `translateY(${parallaxFast * 0.5}px)` }}
            >
              <div className="flex flex-col items-center justify-center">
                <p className="text-landi-gray text-[10px] font-medium mb-1 tracking-wider uppercase">
                  APOIO
                </p>
                <img
                  src={dieselLogo}
                  alt="DIESEL MILITIA - Apoio"
                  className="h-16 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-landi-red py-3 relative z-40">
        <div className="flex items-center justify-center gap-4">
          <svg 
            className="w-5 h-5 text-landi-white animate-bounce" 
            fill="none" 
            strokeWidth="2" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-landi-white text-center text-sm font-medium tracking-wider">
            ROLE A PÁGINA PARA VER MAIS INFORMAÇÕES
          </p>
          <svg 
            className="w-5 h-5 text-landi-white animate-bounce" 
            fill="none" 
            strokeWidth="2" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};
