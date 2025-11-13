import grafismoBranco from "@/assets/grafismo_branco.svg";
import evento12 from "@/assets/evento-12.webp";
import evento13 from "@/assets/evento-13.webp";
import evento14 from "@/assets/evento-14.webp";
import evento15 from "@/assets/evento-15.webp";
import evento16 from "@/assets/evento-16.webp";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export const AboutMobile = () => {
  const images = [evento12, evento13, evento14, evento15, evento16];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  return (
    <section className="relative bg-landi-red py-12 px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-start gap-3 mb-12">
          <img src={grafismoBranco} alt="" className="h-6 w-auto" />
          <h2 className="text-landi-white text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Onde o ronco vira história
          </h2>
        </div>
        
        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-6 text-landi-white text-center">
            <p className="text-base leading-relaxed font-semibold font-sharp-book-20">
              O 1º Encontro Landi Turbina é o início de um novo ciclo.
            </p>
            <p className="text-base leading-relaxed">
              Dois dias de pista, ronco, lama, camarote e muito diesel!
            </p>
            <p className="text-base leading-relaxed">
              Um evento pra quem vive potência, estilo e verdade – reunindo caminhonetes, parceiros, influenciadores e os barulhentos de todo o Brasil.
            </p>
            <a 
              href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full mt-6"
            >
              <button className="bg-landi-gold hover:bg-landi-gold-dark text-landi-black font-bold text-sm px-4 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-landi-gold animate-pulse-glow w-full whitespace-nowrap overflow-hidden text-ellipsis">
                QUERO FAZER PARTE DESSA HISTÓRIA
              </button>
            </a>
          </div>
          
          <div className="w-screen -mx-6">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                })
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <img
                      src={image}
                      alt={`Encontro Landi Turbina - Foto ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            <div className="flex gap-2 justify-center mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current 
                      ? "w-8 bg-landi-white" 
                      : "w-2 bg-landi-white/40 hover:bg-landi-white/60"
                  }`}
                  aria-label={`Ir para foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
