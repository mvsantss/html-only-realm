import landiTurbinaLogo from "@/assets/landi-turbina-logo-new.svg";
import dieselLogo from "@/assets/diesel.png";
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { TicketProgressBanner } from "@/components/TicketProgressBanner";

export const HeaderMobile = () => {
  const { scrollToSection } = useScrollToSection();
  return (
    <section className="relative bg-landi-black flex flex-col overflow-hidden" style={{ height: '100dvh' }}>
      <div className="container mx-auto px-6 py-4 flex-1 flex flex-col justify-center items-center relative z-10">
        <div className="flex flex-col items-center space-y-6 max-w-md w-full">
          <div className="text-center mb-2">
            <h1 className="text-landi-white text-2xl font-bold tracking-tight leading-tight animate-fade-in" style={{
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
          
          <img
            src={landiTurbinaLogo}
            alt="Landi Turbina"
            className="w-full max-w-md"
          />
          
          <div className="text-center space-y-6 w-full">
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-landi-white text-base font-semibold tracking-wide">
                  Prepare-se para 13 e 14 de dezembro
                </p>
                <p className="text-landi-gray text-sm font-normal">
                  Avaré/SP – Recinto de Exposições EMAPA
                </p>
              </div>
              <p className="text-landi-gray text-sm font-normal leading-relaxed px-4">
                Dois dias de ronco, pista, camarote, influenciadores e muito diesel bruto.
              </p>
            </div>
            
            <Button
              size="lg"
              onClick={() => scrollToSection('ingressos')}
              className="bg-landi-gold hover:bg-landi-gold-dark text-black font-bold text-lg md:text-[22px] px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 w-full max-w-sm cursor-pointer"
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

            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="flex flex-col items-center justify-center">
                <p className="text-landi-gray text-[10px] font-medium mb-1 tracking-wider uppercase">
                  APOIO
                </p>
                <img
                  src={dieselLogo}
                  alt="DIESEL MILITIA"
                  className="h-20 w-auto object-contain mx-auto"
                />
              </div>
              <div className="w-full max-w-sm">
                <TicketProgressBanner />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
