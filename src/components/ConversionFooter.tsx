import { Button } from "@/components/ui/button";

export const ConversionFooter = () => {
  return (
    <section className="bg-landi-red py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-landi-white text-3xl md:text-5xl font-bold uppercase leading-tight">
          Os barulhentos já garantiram presença.
          <br />
          <span className="text-landi-white/90">E você?</span>
        </h2>
        
        <p className="text-landi-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Garanta agora o ingresso do 1º Encontro Landi Turbina — o evento que marca o novo ciclo.
        </p>
        
        <a 
          href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button
            id="cta-conversion-footer-ingresso"
            size="lg"
            className="bg-landi-white hover:bg-landi-white/90 text-landi-red font-bold text-xl md:text-2xl rounded-full shadow-2xl px-12 py-8 hover:scale-105 transition-transform"
          >
            QUERO MEU INGRESSO →
          </Button>
        </a>
      </div>
    </section>
  );
};