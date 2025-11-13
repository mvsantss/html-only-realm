import emapaBlurImage from "@/assets/emapa_blur.png";
import grafismoBlack from "@/assets/grafismo_black.svg";

export const LocationMobile = () => {
  return (
    <section className="relative bg-landi-white py-12 px-6 overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-full z-0 pointer-events-none">
        <img
          src={emapaBlurImage}
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-contain opacity-10"
        />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-start gap-3 mb-8">
          <img src={grafismoBlack} alt="" className="h-6 w-auto" />
          <h2 className="text-landi-black text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            LOCALIZAÇÃO DO EVENTO
          </h2>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-6 text-landi-black">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Parque Dr. Fernando Cruz Pimentel
              </h3>
              <p className="text-sm leading-relaxed mb-3">
                Exposição Municipal Agropecuária e Industrial de Avaré (Emapa)<br />
                Avaré - SP
              </p>
              <p className="text-xs leading-relaxed text-landi-black/70">
                A Emapa é um dos maiores parques de eventos da região, conhecida por sediar a maior festa com portões abertos do país, com grandes shows, rodeio, cavalgada, exposições, julgamentos de raças, parque de diversões e ampla programação. O 1° Encontro Landi Turbina acontecerá neste mesmo espaço.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-landi-black/80">
                <strong>Ponto de referência:</strong><br />
                Entrada de Avaré, próximo ao McDonalds
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-landi-black/10">
              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <button 
                  id="cta-location-mobile-ingresso"
                  className="w-full bg-landi-red hover:bg-landi-red/90 text-landi-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  RESERVAR MEU LUGAR AGORA
                </button>
              </a>
            </div>
          </div>
          
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2768!2d-48.9272!3d-23.0977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5da8e6e9f0001%3A0x1234567890abcdef!2sW335%2BM7%20Distrito%20Industrial%20Nova%20Avar%C3%A9%2C%20Avar%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl shadow-lg"
              title="Mapa de localização do evento"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
