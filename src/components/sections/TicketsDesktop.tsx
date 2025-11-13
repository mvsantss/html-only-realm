import grafismoBlack from "@/assets/grafismo_black.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Ticket } from "lucide-react";
import { TicketProgressBanner } from "@/components/TicketProgressBanner";

export const TicketsDesktop = () => {
  return (
    <>
      <section id="ingressos" className="bg-landi-white py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header com headline forte */}
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-4">
              <img src={grafismoBlack} alt="" className="h-8 w-auto" />
              <h2 className="text-landi-black text-4xl md:text-5xl font-semibold uppercase tracking-wide">
                INGRESSOS
              </h2>
            </div>
            <h3 className="text-landi-black text-3xl font-bold mb-3">
              Dois dias de ronco, lama e diesel!
            </h3>
            <p className="text-landi-black/70 text-lg">
              Garanta seu lugar no maior encontro diesel do interior paulista
            </p>
          </div>

          {/* Barra de progresso do lote */}
          <div className="max-w-4xl mx-auto">
            <TicketProgressBanner />
          </div>

          {/* Bloco explicativo sobre ingressos */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-landi-black/5 rounded-2xl p-8 border border-landi-black/10">
              <div className="flex items-start gap-4">
                <Ticket className="w-8 h-8 text-landi-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-landi-black text-xl font-bold mb-4">
                    Como funcionam os ingressos:
                  </h4>
                  <ul className="space-y-3 text-landi-black text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-landi-red font-bold text-xl">•</span>
                      <span>O ingresso é <strong>por pessoa</strong>, não por veículo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-landi-red font-bold text-xl">•</span>
                      <span>Você escolhe se quer <strong>1 dia</strong> (sábado ou domingo) ou <strong>2 dias</strong> juntos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-landi-red font-bold text-xl">•</span>
                      <span>Cada ingresso dá acesso completo ao recinto e todas as atrações do evento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-landi-red font-bold text-xl">•</span>
                      <span>Crianças e menores de idade devem apresentar termo obrigatório</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Info importante */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-landi-black/5 rounded-2xl p-6 border border-landi-black/10">
              <p className="text-landi-black text-sm leading-relaxed mb-4">
                <strong className="font-semibold">CRIANÇAS PAGAM A PARTIR DE 13 ANOS</strong> - Menores de idade devem ir acompanhados de responsável legal e apresentar documentos + termo assinado
              </p>
              <div className="pt-4 border-t border-landi-black/10">
                <p className="text-landi-black text-sm font-semibold mb-3">
                  Termos obrigatórios para participação:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/termos/termo-veiculo.pdf"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-landi-red hover:bg-landi-red/90 text-landi-white text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    Termo de Responsabilidade do Veículo
                  </a>
                  <a
                    href="/termos/termo-menor.pdf"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-landi-red hover:bg-landi-red/90 text-landi-white text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    Termo para Menor de Idade
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ingressos Básicos */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-landi-black text-2xl font-bold text-center mb-2">Ingressos Individuais</h3>
            <p className="text-landi-black/60 text-base text-center mb-8">Acesso completo ao evento</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-landi-black rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <p className="text-landi-gray text-sm mb-2">Sábado</p>
                <p className="text-landi-white text-lg font-semibold mb-3">13/12</p>
                <p className="text-landi-red text-3xl font-bold">R$ 40</p>
                <p className="text-landi-white/60 text-sm mt-3">Acesso 1 dia</p>
              </a>

              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-landi-black rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <p className="text-landi-gray text-sm mb-2">Domingo</p>
                <p className="text-landi-white text-lg font-semibold mb-3">14/12</p>
                <p className="text-landi-red text-3xl font-bold">R$ 40</p>
                <p className="text-landi-white/60 text-sm mt-3">Acesso 1 dia</p>
              </a>

              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-landi-black rounded-xl p-6 text-center hover:scale-105 transition-transform relative cursor-pointer"
              >
                <div className="absolute -top-2 -right-2 bg-landi-red text-landi-white text-xs font-bold px-3 py-1 rounded-full">
                  R$ 10 OFF
                </div>
                <p className="text-landi-gray text-sm mb-2">Pacote completo</p>
                <p className="text-landi-white text-lg font-semibold mb-1">13 e 14/12</p>
                <p className="text-landi-gray text-xs line-through mb-2">De R$ 80</p>
                <p className="text-landi-red text-3xl font-bold">R$ 70</p>
                <p className="text-landi-white/60 text-sm mt-3">2 dias de evento</p>
              </a>

              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-landi-red rounded-2xl p-10 text-center transform scale-110 shadow-2xl relative cursor-pointer"
              >
                <div className="absolute -top-3 -right-3 bg-landi-white text-landi-red text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MAIS VENDIDO
                </div>
                <p className="text-landi-white/90 text-base mb-2">Combo Exclusivo</p>
                <p className="text-landi-white text-2xl font-semibold mb-4">2 dias + camiseta oficial</p>
                <p className="text-landi-white text-5xl font-bold mb-4">R$ 129</p>
                <div className="pt-4 border-t border-landi-white/20">
                  <p className="text-landi-white/80 text-sm">• Acesso aos 2 dias</p>
                  <p className="text-landi-white/80 text-sm">• Camiseta exclusiva do evento</p>
                </div>
              </a>
            </div>
          </div>

          {/* Camarotes */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-landi-black text-2xl font-bold text-center mb-2">Camarotes VIP</h3>
            <p className="text-landi-black/60 text-base text-center mb-8">Experiência premium com open bar e/ou open food</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Camarote All Inclusive */}
              <div className="bg-landi-red rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-landi-white text-landi-red text-xs font-bold px-4 py-1.5 rounded-full mb-3">
                    EXCLUSIVO
                  </div>
                  <h4 className="text-landi-white text-2xl font-bold mb-2">All Inclusive VIP</h4>
                  <p className="text-landi-white/90 text-sm">Open bar + Open food + área exclusiva</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-landi-white/10 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="text-landi-white text-sm">Primeiro dia (13/12)</p>
                    </div>
                    <p className="text-landi-white text-2xl font-bold">R$ 600</p>
                  </div>

                  <div className="bg-landi-white/10 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="text-landi-white text-sm">Segundo dia (14/12)</p>
                    </div>
                    <p className="text-landi-white text-2xl font-bold">R$ 600</p>
                  </div>

                  <div className="bg-landi-white/20 rounded-lg p-4 relative">
                    <div className="absolute -top-2 -right-2 bg-landi-white text-landi-red text-xs font-bold px-3 py-1 rounded-full">
                      R$ 200 OFF
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-landi-white text-sm">Dois dias (13 e 14/12)</p>
                        <p className="text-landi-white/60 text-xs line-through">De R$ 1.200</p>
                      </div>
                      <p className="text-landi-white text-2xl font-bold">R$ 1.000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Camarote Open Food */}
              <div className="bg-landi-black rounded-2xl p-8 shadow-xl border-2 border-landi-red/30">
                <div className="text-center mb-6">
                  <div className="inline-block bg-landi-red/80 text-landi-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">
                    PREMIUM
                  </div>
                  <h4 className="text-landi-white text-2xl font-bold mb-2">Open Food VIP</h4>
                  <p className="text-landi-white/90 text-sm">Alimentação completa + área exclusiva</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-landi-white/5 rounded-lg p-4 flex justify-between items-center border border-landi-white/10">
                    <div>
                      <p className="text-landi-white text-sm">Primeiro dia (13/12)</p>
                    </div>
                    <p className="text-landi-red text-2xl font-bold">R$ 350</p>
                  </div>

                  <div className="bg-landi-white/5 rounded-lg p-4 flex justify-between items-center border border-landi-white/10">
                    <div>
                      <p className="text-landi-white text-sm">Segundo dia (14/12)</p>
                    </div>
                    <p className="text-landi-red text-2xl font-bold">R$ 350</p>
                  </div>

                  <div className="bg-landi-white/10 rounded-lg p-4 border border-landi-white/20 relative">
                    <div className="absolute -top-2 -right-2 bg-landi-red text-landi-white text-xs font-bold px-3 py-1 rounded-full">
                      R$ 50 OFF
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-landi-white text-sm">Dois dias (13 e 14/12)</p>
                        <p className="text-landi-white/60 text-xs line-through">De R$ 700</p>
                      </div>
                      <p className="text-landi-red text-2xl font-bold">R$ 650</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Combos de Grupos */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-landi-black text-2xl font-bold text-center mb-2">Combos para Grupos</h3>
            <p className="text-landi-black/60 text-base text-center mb-8">Tenda montada + ingressos inclusos + energia no local</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Combo Premium */}
              <div className="bg-landi-black rounded-2xl p-8 shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block bg-landi-red text-landi-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      PREMIUM
                    </div>
                    <h4 className="text-landi-white text-xl font-bold mb-1">Tenda 10x10</h4>
                    <p className="text-landi-white/80 text-sm">+ 20 ingressos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-landi-white text-3xl font-bold">R$ 2.500</p>
                    <p className="text-landi-white/60 text-xs">2 dias</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">Tenda Premium 10m x 10m montada</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">20 ingressos para os dois dias</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">Área reservada com ponto de energia</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">Ideal para clubes e equipes</p>
                  </div>
                </div>
              </div>

              {/* Combo Standard */}
              <div className="bg-landi-black rounded-2xl p-8 shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block bg-landi-red/80 text-landi-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      STANDARD
                    </div>
                    <h4 className="text-landi-white text-xl font-bold mb-1">Tenda 5x5</h4>
                    <p className="text-landi-white/80 text-sm">+ 10 ingressos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-landi-red text-3xl font-bold">R$ 1.300</p>
                    <p className="text-landi-white/60 text-xs">2 dias</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">Tenda Standard 5m x 5m montada</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">10 ingressos para os dois dias</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">Área exclusiva dentro do recinto</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-sm">Ideal para grupos menores</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mt-12"
            >
              <Button
                size="lg"
                className="w-full bg-landi-red hover:bg-landi-red/90 text-landi-white font-bold text-xl rounded-full shadow-xl py-8"
              >
                COMPRAR INGRESSOS →
              </Button>
            </a>
          </div>

          {/* Link para itens */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <p className="text-landi-black text-lg leading-relaxed">
              Confira a lista completa de{" "}
              <Link 
                to="/itens" 
                className="text-landi-red font-semibold underline hover:text-landi-red/80 transition-colors"
              >
                itens permitidos e proibidos no evento
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
