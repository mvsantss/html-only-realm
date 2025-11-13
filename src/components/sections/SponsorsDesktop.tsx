import emapaLogo from "@/assets/emapa.png";
import dieselLogo from "@/assets/diesel.png";
import avareLogo from "@/assets/avare.png";
import novaAmericaLogo from "@/assets/nova-america.png";
import autoDevasLogo from "@/assets/auto-devas.png";
import patetaLogo from "@/assets/pateta-radiadores.png";
import grafismoVermelho from "@/assets/grafismo_vermelho.svg";
import { Button } from "@/components/ui/button";

export const SponsorsDesktop = () => {
  return (
    <section className="bg-landi-black py-12 md:py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <img src={grafismoVermelho} alt="" className="h-8 w-auto" />
          <h2 className="text-landi-white text-4xl md:text-5xl font-semibold uppercase tracking-wide">
            PATROCINADORES E APOIADORES
          </h2>
        </div>
        
        <div className="mb-16 pb-12 border-b border-landi-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
            <div className="flex-1 text-left">
              <p className="text-landi-white text-xl leading-relaxed">
                Faça parte dessa história e conecte sua marca ao nosso primeiro encontro diesel.
                <br />
                <span className="text-landi-white/60">Uma oportunidade única de alcançar uma comunidade apaixonada.</span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="https://wa.me/5514998596625?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20como%20ser%20um%20patrocinador%20do%201º%20Encontro%20Landi%20Turbina." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-landi-red hover:bg-landi-red/90 text-landi-white font-semibold text-base px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-xl whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  SEJA PATROCINADOR
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="flex flex-col items-center">
            <h3 className="text-landi-white text-xl font-semibold mb-8 uppercase tracking-widest">
              APOIO
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <img
                src={dieselLogo}
                alt="DIESEL MILITIA"
                className="h-28 w-auto object-contain transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-landi-white text-xl font-semibold mb-8 uppercase tracking-widest">
              LOCAL
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <img
                src={emapaLogo}
                alt="EMAPA"
                className="h-24 w-auto object-contain transition-all duration-300"
              />
              <img
                src={avareLogo}
                alt="Avaré Estância Turística"
                className="h-24 w-auto object-contain transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-landi-white/70 text-base font-medium mb-8 uppercase tracking-widest">
            PATROCINADORES
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src={novaAmericaLogo}
              alt="Nova América"
              className="h-20 w-auto object-contain transition-all duration-300"
            />
            <img
              src={autoDevasLogo}
              alt="Auto Devas"
              className="h-20 w-auto object-contain transition-all duration-300"
            />
            <img
              src={patetaLogo}
              alt="Pateta Radiadores"
              className="h-20 w-auto object-contain transition-all duration-300"
            />
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-landi-white/10 text-center">
          <h3 className="text-landi-white text-2xl md:text-3xl font-bold mb-4">
            Ainda não garantiu seu ingresso?
          </h3>
          <p className="text-landi-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Os lotes estão acabando! Garanta agora sua vaga no maior encontro diesel do interior paulista.
          </p>
          <a 
            href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-landi-white hover:bg-landi-white/90 text-landi-red font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
              COMPRAR INGRESSOS AGORA
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
