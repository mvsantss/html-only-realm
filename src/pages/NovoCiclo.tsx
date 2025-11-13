import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { useKonamiCode } from "@/hooks/use-konami-code";
import { MarioEasterEgg } from "@/components/MarioEasterEgg";
import { BarrelRollEffect } from "@/components/BarrelRollEffect";
import { WhatsAppGroupModal } from "@/components/WhatsAppGroupModal";
import { useState } from "react";
import { HeaderDesktop } from "@/components/sections/HeaderDesktop";
import { AboutDesktop } from "@/components/sections/AboutDesktop";
import { LocationDesktop } from "@/components/sections/LocationDesktop";
import { WhatsAppDesktop } from "@/components/sections/WhatsAppDesktop";
import { TicketsDesktop } from "@/components/sections/TicketsDesktop";
import { SponsorsDesktop } from "@/components/sections/SponsorsDesktop";
import { HeaderMobile } from "@/components/sections/HeaderMobile";
import { AboutMobile } from "@/components/sections/AboutMobile";
import { LocationMobile } from "@/components/sections/LocationMobile";
import { WhatsAppMobile } from "@/components/sections/WhatsAppMobile";
import { TicketsMobile } from "@/components/sections/TicketsMobile";
import { SponsorsMobile } from "@/components/sections/SponsorsMobile";
import { EventFAQ } from "@/components/EventFAQ";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";

const Index = () => {
  const parallaxSlow = useParallax(0.3);
  const parallaxMedium = useParallax(0.5);
  const parallaxFast = useParallax(0.7);
  const showMario = useKonamiCode(['U', 'U', 'D', 'D', 'L', 'R', 'L', 'R', 'B', 'A']);
  const doBarrelRoll = useKonamiCode(['D', 'A', 'B', 'R']);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="min-h-screen bg-landi-black pb-20">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <HeaderDesktop 
          parallaxSlow={parallaxSlow}
          parallaxMedium={parallaxMedium}
          parallaxFast={parallaxFast}
        />
        
        {/* Seção de Vídeo 3D - Desktop */}
        <section className="relative bg-landi-black py-20">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <p className="text-landi-white text-xl font-normal">
                  Sente o clima do maior encontro diesel do interior paulista.
                </p>
                <h2 className="text-landi-white text-4xl font-semibold">
                  Veja como vai ser o Encontro Landi Turbina
                </h2>
              </div>
              
              <div className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black isolate aspect-video">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                >
                  <source src="/assets/video3d.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>

              <div className="space-y-6 text-center">
                <p className="text-landi-white text-xl font-semibold">
                  13 e 14 de dezembro - você vai ficar de fora?
                </p>
                
                <div className="flex justify-center">
                  <a 
                    href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-[#FFB800] hover:bg-[#E09A00] text-black font-bold text-lg px-12 py-6 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ 
                        boxShadow: '0px 0px 20px rgba(255, 184, 0, 0.8), 0px 0px 40px rgba(255, 184, 0, 0.4)',
                      }}
                    >
                      QUERO ESTAR LÁ!
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AboutDesktop />
        <LocationDesktop />
        <WhatsAppDesktop onOpenModal={() => setIsWhatsAppModalOpen(true)} />
        <TicketsDesktop />
        <SponsorsDesktop />
        <EventFAQ />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden pb-12 mb-8">
        <HeaderMobile />
        
        {/* Seção de Vídeo 3D - Mobile */}
        <section className="relative bg-landi-black py-12">
          <div className="container mx-auto px-6">
            <div className="space-y-6">
              <div className="space-y-3 text-center">
                <p className="text-landi-white text-base font-normal">
                  Sente o clima do maior encontro diesel do interior paulista.
                </p>
                <h2 className="text-landi-white text-2xl font-semibold leading-tight">
                  Veja como vai ser o Encontro Landi Turbina
                </h2>
              </div>
              
              <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl bg-black isolate aspect-video">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                >
                  <source src="/assets/video3d.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-landi-white text-lg font-semibold">
                  13 e 14 de dezembro - você vai ficar de fora?
                </p>
                
                <div className="flex justify-center">
                  <a 
                    href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full max-w-sm"
                  >
                    <Button
                      size="lg"
                      className="bg-[#FFB800] hover:bg-[#E09A00] text-black font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 w-full"
                      style={{ 
                        boxShadow: '0px 0px 20px rgba(255, 184, 0, 0.8), 0px 0px 40px rgba(255, 184, 0, 0.4)',
                      }}
                    >
                      QUERO ESTAR LÁ!
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AboutMobile />
        <LocationMobile />
        <WhatsAppMobile onOpenModal={() => setIsWhatsAppModalOpen(true)} />
        <TicketsMobile />
        <SponsorsMobile />
        <EventFAQ />
      </div>

      <Footer />
      
      <WhatsAppGroupModal
        open={isWhatsAppModalOpen}
        onOpenChange={setIsWhatsAppModalOpen}
        groupUrl="https://chat.whatsapp.com/IpoGf4NpLVL4E50gyfXXJR"
      />
      
      <MarioEasterEgg show={showMario} />
      <BarrelRollEffect activate={doBarrelRoll} />
    </div>
  );
};

export default Index;
