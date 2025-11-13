import encontroLogo from "@/assets/encontro.png";
import emapaLogo from "@/assets/emapa.png";
import dieselLogo from "@/assets/diesel.png";
import equipeImage from "@/assets/equipe.jpg";
import celularImage from "@/assets/celular.png";
import emapaBlurImage from "@/assets/emapa_blur.png";
import avareLogo from "@/assets/avare.png";
import grafismoBranco from "@/assets/grafismo_branco.svg";
import grafismoVermelho from "@/assets/grafismo_vermelho.svg";
import grafismoBlack from "@/assets/grafismo_black.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { ConversionFooter } from "@/components/ConversionFooter";
import { TicketsFAQ } from "@/components/TicketsFAQ";
import { useParallax } from "@/hooks/use-parallax";
import { AboutDesktop } from "@/components/sections/AboutDesktop";
import { AboutMobile } from "@/components/sections/AboutMobile";
import { TicketsDesktop } from "@/components/sections/TicketsDesktop";
import { TicketsMobile } from "@/components/sections/TicketsMobile";
import { LocationDesktop } from "@/components/sections/LocationDesktop";
import { LocationMobile } from "@/components/sections/LocationMobile";
import { WhatsAppDesktop } from "@/components/sections/WhatsAppDesktop";
import { WhatsAppMobile } from "@/components/sections/WhatsAppMobile";
import { SponsorsDesktop } from "@/components/sections/SponsorsDesktop";
import { SponsorsMobile } from "@/components/sections/SponsorsMobile";
import { WhatsAppGroupModal } from "@/components/WhatsAppGroupModal";
import { useState } from "react";

const Index = () => {
  const parallaxSlow = useParallax(0.3);
  const parallaxMedium = useParallax(0.5);
  const parallaxFast = useParallax(0.7);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-landi-black overflow-x-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* SEÇÃO 1: HEADER - Inclui a faixa vermelha */}
        <section className="relative h-screen overflow-hidden bg-landi-black flex flex-col">
          <div className="relative flex-1 flex items-end justify-center">
            {/* Logo do encontro - atrás do homem, maior */}
            <div 
              className="absolute top-16 left-1/2 -translate-x-1/2 z-10 w-full max-w-6xl px-8"
              style={{ transform: `translate(-50%, ${parallaxSlow}px)` }}
            >
              <img
                src={encontroLogo}
                alt="1° Encontro Landi Turbina"
                className="w-full h-auto mb-8"
              />
            </div>
            
            
            {/* ELEM_HEADER - Mais centralizado e menor */}
            <div 
              className="absolute bottom-4 left-1/2 translate-x-8 text-left z-30 max-w-xl"
              style={{ transform: `translate(2rem, ${parallaxFast}px)` }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-landi-red text-xl font-bold uppercase tracking-wide leading-tight">
                    Dois dias de ronco, lama e diesel!
                  </h3>
                  <p className="text-landi-white text-base font-normal tracking-wide leading-tight">
                    SOMENTE NOS DIAS
                  </p>
                  <h2 className="text-landi-white text-4xl font-semibold tracking-wide leading-tight">
                    13 E 14 DE DEZEMBRO
                  </h2>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-landi-red hover:bg-landi-red/90 text-landi-white font-medium text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      GARANTIR MEU INGRESSO!
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-landi-black border-landi-red">
                    <DialogHeader>
                      <DialogTitle className="text-landi-white text-xl">
                        Garantir meu ingresso!
                      </DialogTitle>
                      <DialogDescription className="text-landi-gray">
                        Popup de teste - Em breve formulário de inscrição para o evento.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                {/* Logos de EMAPA e DIESEL */}
                <div 
                  className="flex items-start justify-start gap-12 pt-6"
                  style={{ transform: `translateY(${parallaxFast * 0.5}px)` }}
                >
                  <div className="text-center">
                    <p className="text-landi-gray text-xs font-medium mb-3 tracking-wider">
                      LOCAL
                    </p>
                    <img
                      src={emapaLogo}
                      alt="EMAPA"
                      className="h-20 w-auto"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-landi-gray text-xs font-medium mb-3 tracking-wider">
                      APOIO
                    </p>
                    <img
                      src={dieselLogo}
                      alt="DIESEL MILITIA"
                      className="h-20 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faixa vermelha - parte da seção 1 */}
          <div className="w-full bg-landi-red py-3 relative z-40 -mt-16">
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

        {/* SEÇÃO 2: SOBRE */}
        <AboutDesktop />

        {/* SEÇÃO 3: LOCALIZAÇÃO */}
        <LocationDesktop />

        {/* SEÇÃO 4: INGRESSOS */}
        <TicketsDesktop />

        {/* SEÇÃO 5: FAQ */}
        <TicketsFAQ />

        {/* SEÇÃO 6: COMUNIDADE WHATSAPP */}
        <WhatsAppDesktop onOpenModal={() => setIsWhatsAppModalOpen(true)} />

        {/* SEÇÃO 7: PATROCINADORES E APOIADORES */}
        <SponsorsDesktop />

        {/* SEÇÃO 8: RODAPÉ DE CONVERSÃO */}
        <ConversionFooter />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* SEÇÃO 1: HEADER */}
        <section className="relative min-h-screen overflow-hidden bg-landi-black pb-0 flex flex-col justify-between">
          <div className="container mx-auto px-6 py-8 flex-1 flex flex-col">
            <div className="flex flex-col items-center space-y-6">
              {/* Logo do encontro no topo */}
              <img
                src={encontroLogo}
                alt="1° Encontro Landi Turbina"
                className="w-full max-w-xs mb-4 mt-6"
              />
              
              {/* Textos e CTA */}
              <div className="text-center space-y-4 w-full mt-4">
                <h3 className="text-landi-red text-lg font-bold uppercase tracking-wide leading-tight mb-2">
                  Dois dias de ronco, lama e diesel!
                </h3>
                <div className="space-y-0.5 mb-6">
                  <p className="text-landi-white text-xs font-normal tracking-wide">
                    SOMENTE NOS DIAS
                  </p>
                  <h2 className="text-landi-white text-2xl font-semibold tracking-wide">
                    13 E 14 DE DEZEMBRO
                  </h2>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-landi-red hover:bg-landi-red/90 text-landi-white font-medium text-sm px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full max-w-xs"
                    >
                      GARANTIR MEU INGRESSO!
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-landi-black border-landi-red">
                    <DialogHeader>
                      <DialogTitle className="text-landi-white text-xl">
                        Garantir meu ingresso!
                      </DialogTitle>
                      <DialogDescription className="text-landi-gray">
                        Popup de teste - Em breve formulário de inscrição para o evento.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                {/* Logos de EMAPA e DIESEL */}
                <div className="flex items-start justify-center gap-8 pt-4">
                  <div className="text-center flex-1">
                    <p className="text-landi-gray text-[10px] font-medium mb-2 tracking-wider uppercase">
                      LOCAL
                    </p>
                      <img
                        src={emapaLogo}
                        alt="EMAPA"
                        className="h-16 w-auto object-contain mx-auto"
                      />
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-landi-gray text-[10px] font-medium mb-2 tracking-wider uppercase">
                      APOIO
                    </p>
                      <img
                        src={dieselLogo}
                        alt="DIESEL MILITIA"
                        className="h-16 w-auto object-contain mx-auto"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faixa vermelha */}
          <div className="w-full bg-landi-red py-3 relative z-40">
            <div className="flex items-center justify-center gap-3">
              <svg 
                className="w-4 h-4 text-landi-white animate-bounce" 
                fill="none" 
                strokeWidth="2" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <p className="text-landi-white text-center text-xs font-medium tracking-wider">
                ROLE A PÁGINA PARA VER MAIS INFORMAÇÕES
              </p>
              <svg 
                className="w-4 h-4 text-landi-white animate-bounce" 
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

        {/* SEÇÃO 2: SOBRE */}
        <AboutMobile />

        {/* SEÇÃO 3: LOCALIZAÇÃO */}
        <LocationMobile />

        {/* SEÇÃO 4: INGRESSOS */}
        <TicketsMobile />

        {/* SEÇÃO 5: FAQ */}
        <TicketsFAQ />


        {/* DIVISOR: COMUNIDADE WHATSAPP */}
        <section className="bg-landi-black relative overflow-visible py-6 px-6">
          <div className="container mx-auto max-w-4xl relative">
            {/* Linha divisória com gradiente */}
            <div className="h-px bg-gradient-to-r from-transparent via-landi-white/20 to-transparent mb-6"></div>
            
            <div className="flex items-center gap-3 w-full">
              {/* Imagem do celular à esquerda - reduzido para mobile */}
              <div className="relative -ml-2 -my-3 flex-shrink-0">
                <img
                  src={celularImage}
                  alt="Comunidade WhatsApp"
                  className="w-16 h-auto object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.35)] relative z-10"
                />
              </div>
              
              {/* Texto e CTA - compacto */}
              <div className="space-y-3 flex-1 min-w-0 pr-2">
                <h3 className="text-landi-white text-base md:text-xl font-semibold uppercase tracking-wide leading-tight break-words">
                  COMUNIDADE WHATSAPP
                </h3>
                <p className="text-landi-white/80 text-sm break-words">
                  Faça parte da nossa comunidade exclusiva e fique por dentro de tudo sobre o evento.
                </p>
                
                <div className="pt-1">
                  <a
                    href="https://chat.whatsapp.com/IpoGf4NpLVL4E50gyfXXJR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full max-w-xs"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      ENTRAR NO GRUPO
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Linha divisória inferior com gradiente */}
            <div className="h-px bg-gradient-to-r from-transparent via-landi-white/20 to-transparent mt-6"></div>
          </div>
        </section>

        {/* SEÇÃO 5: PATROCINADORES E APOIADORES */}
        <section className="bg-landi-black py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Título Principal - alinhado à esquerda */}
            <div className="flex items-start gap-2 mb-8 w-full">
              <h2 className="flex-1 min-w-0 break-words text-landi-white text-xl md:text-3xl font-semibold uppercase tracking-wide leading-tight">
                PATROCINADORES E APOIADORES
              </h2>
            </div>
            
            {/* CTA de patrocínio */}
            <div className="mb-12 pb-8 border-b border-landi-white/10">
              <div className="space-y-4">
                <p className="text-landi-white text-base leading-relaxed">
                  Faça parte dessa história e conecte sua marca ao maior encontro diesel do interior paulista.
                  <br />
                  <span className="text-landi-white/60">Uma oportunidade única de alcançar uma comunidade apaixonada.</span>
                </p>
                <a 
                  href="https://wa.me/5514998882900?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20como%20ser%20um%20patrocinador%20do%201º%20Encontro%20Landi%20Turbina." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="bg-landi-red hover:bg-landi-red/90 text-landi-white font-semibold text-sm px-8 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl w-full"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    SEJA PATROCINADOR
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Grid de logos dos patrocinadores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Apoio */}
              <div className="flex flex-col items-center">
                <h3 className="text-landi-white/70 text-sm font-medium mb-4 uppercase tracking-widest">
                  APOIO
                </h3>
                <div className="w-full max-w-[200px] h-px mb-6 bg-gradient-to-r from-transparent via-landi-white/20 to-transparent"></div>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <img
                    src={dieselLogo}
                    alt="DIESEL MILITIA"
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Local */}
              <div className="flex flex-col items-center">
                <h3 className="text-landi-white/50 text-xs font-medium mb-4 uppercase tracking-widest">
                  LOCAL
                </h3>
                <div className="w-full max-w-[350px] h-px mb-6 bg-gradient-to-r from-transparent via-landi-white/20 to-transparent"></div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <img
                    src={emapaLogo}
                    alt="EMAPA"
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src={avareLogo}
                    alt="Avaré Estância Turística"
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: REGRAS DO EVENTO */}
        <section className="bg-landi-white py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-landi-black text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-6">
              REGRAS DO EVENTO
            </h2>
            
            <p className="text-landi-black text-base md:text-lg leading-relaxed mb-6">
              Para garantir a segurança e o conforto de todos os participantes, é importante conhecer as regras e itens permitidos no evento.
            </p>
            
            <Link to="/itens" className="block">
              <Button
                size="lg"
                className="bg-landi-red hover:bg-landi-red/90 text-landi-white font-semibold text-sm px-8 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl w-full max-w-md"
              >
                VER ITENS PERMITIDOS E PROIBIDOS
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* RODAPÉ */}
      <Footer />
      
      {/* Modal WhatsApp */}
      <WhatsAppGroupModal
        open={isWhatsAppModalOpen}
        onOpenChange={setIsWhatsAppModalOpen}
        groupUrl="https://chat.whatsapp.com/IpoGf4NpLVL4E50gyfXXJR"
      />
    </div>
  );
};

export default Index;
