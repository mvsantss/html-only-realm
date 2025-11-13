import grafismoBlack from "@/assets/grafismo_black.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Ticket, Users, Utensils } from "lucide-react";
import { TicketProgressBanner } from "@/components/TicketProgressBanner";

export const TicketsMobile = () => {
  return (
    <>
      <section id="ingressos" className="bg-landi-white py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header com headline forte */}
          <div className="mb-8 text-center">
            <div className="flex flex-col items-center gap-3 mb-4">
              <img src={grafismoBlack} alt="" className="h-6 w-auto" />
              <h2 className="text-landi-black text-2xl font-semibold uppercase tracking-wide">
                INGRESSOS
              </h2>
            </div>
            <h3 className="text-landi-black text-xl font-bold mb-2">
              Dois dias de ronco, lama e diesel — Escolha o seu ingresso e venha viver o ronco que marca o novo ciclo Landi!
            </h3>
          </div>

          {/* Barra de progresso do lote */}
          <TicketProgressBanner />

          {/* Bloco explicativo sobre ingressos */}
          <div className="bg-landi-black/5 rounded-2xl p-6 border border-landi-black/10 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Ticket className="w-6 h-6 text-landi-red flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-landi-black text-base font-bold mb-2">
                  Como funcionam os ingressos:
                </h4>
                <ul className="space-y-2 text-landi-black text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-landi-red font-bold">•</span>
                    <span>O ingresso é <strong>por pessoa</strong>, não por veículo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-landi-red font-bold">•</span>
                    <span>Você escolhe se quer <strong>1 dia</strong> ou <strong>2 dias</strong> juntos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-landi-red font-bold">•</span>
                    <span>Cada ingresso dá acesso completo ao recinto e atrações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-landi-red font-bold">•</span>
                    <span>Crianças e menores devem apresentar termo obrigatório</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Info importante */}
          <div className="mb-8">
            <div className="bg-landi-black/5 rounded-2xl p-4 border border-landi-black/10">
              <p className="text-landi-black text-xs leading-relaxed mb-3">
                <strong className="font-semibold">CRIANÇAS PAGAM A PARTIR DE 13 ANOS</strong> - Menores de idade devem ir acompanhados de responsável legal e apresentar documentos + termo assinado
              </p>
              <div className="pt-3 border-t border-landi-black/10">
              <p className="text-landi-black text-xs font-semibold mb-2">
                Termos obrigatórios:
              </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="/termos/termo-veiculo.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 bg-landi-red hover:bg-landi-red/90 text-landi-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-300"
                  >
                    Termo do Veículo
                  </a>
                  <a
                    href="/termos/termo-menor.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 bg-landi-red hover:bg-landi-red/90 text-landi-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-300"
                  >
                    Termo para Menor
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ingressos Básicos */}
          <div className="mb-12">
            <h3 className="text-landi-black text-xl font-bold text-center mb-2 flex items-center justify-center gap-2">
              <Ticket className="w-5 h-5 text-landi-red" /> Ingressos Individuais
            </h3>
            <p className="text-landi-black/60 text-sm text-center mb-6">Acesso completo ao evento</p>
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-landi-black rounded-xl p-4 text-center active:scale-95 transition-transform"
                >
                  <p className="text-landi-gray text-xs mb-1">Sábado</p>
                  <p className="text-landi-white text-sm font-semibold mb-2">13/12</p>
                  <p className="text-landi-red text-2xl font-bold mb-1">R$ 40</p>
                  <p className="text-landi-white/80 text-xs leading-relaxed">Acesso 1 dia ao recinto + atrações</p>
                </a>

                <a 
                  href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-landi-black rounded-xl p-4 text-center active:scale-95 transition-transform"
                >
                  <p className="text-landi-gray text-xs mb-1">Domingo</p>
                  <p className="text-landi-white text-sm font-semibold mb-2">14/12</p>
                  <p className="text-landi-red text-2xl font-bold mb-1">R$ 40</p>
                  <p className="text-landi-white/80 text-xs leading-relaxed">Acesso 1 dia ao recinto + atrações</p>
                </a>
              </div>

              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-landi-black rounded-xl p-4 text-center relative active:scale-95 transition-transform"
              >
                <div className="absolute -top-2 -right-2 bg-landi-red text-landi-white text-xs font-bold px-3 py-1 rounded-full">
                  10 REAIS OFF
                </div>
                <p className="text-landi-gray text-xs mb-1">Pacote completo</p>
                <p className="text-landi-white text-sm font-semibold mb-1">13 e 14/12</p>
                <p className="text-landi-gray text-xs line-through mb-1">De R$ 80</p>
                <p className="text-landi-red text-2xl font-bold mb-1">R$ 70</p>
                <p className="text-landi-white/80 text-xs leading-relaxed">2 dias de evento + economia de R$10</p>
              </a>

              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-2xl p-8 text-center shadow-2xl relative transform scale-105 active:scale-100 transition-transform border-2 border-[#FFB800]"
                style={{
                  background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
                  boxShadow: '0 0 30px rgba(255, 184, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="absolute -top-3 -right-3 bg-[#FFB800] text-landi-black text-xs font-bold px-4 py-2 rounded-full shadow-lg leading-tight">
                  🔥 COMBO EXCLUSIVO<br/>poucas unidades
                </div>
                <p className="text-landi-white/90 text-sm mb-2">Combo Exclusivo</p>
                <p className="text-landi-white text-xl font-semibold mb-3">2 dias + camiseta oficial</p>
                <p className="text-landi-white text-4xl font-bold mb-2">R$ 129</p>
                <div className="pt-3 border-t border-landi-white/20 mt-3">
                  <p className="text-landi-white/80 text-xs">• Acesso aos 2 dias</p>
                  <p className="text-landi-white/80 text-xs">• Camiseta exclusiva do evento</p>
                  <p className="text-landi-white/80 text-xs">• Economize R$10 e viva os dois dias de ronco!</p>
                </div>
              </a>

              {/* CTA forte após ingressos individuais */}
              <div className="mt-8 space-y-3">
                <a 
                  href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#FFB800] hover:bg-[#E09A00] text-black font-bold text-lg py-6 rounded-xl shadow-xl"
                    style={{ 
                      boxShadow: '0px 0px 20px rgba(255, 184, 0, 0.8), 0px 0px 40px rgba(255, 184, 0, 0.4)',
                    }}
                  >
                    🎟️ GARANTIR MEU INGRESSO AGORA
                  </Button>
                </a>
                <p className="text-center text-landi-black text-sm font-semibold">
                  ⚠️ Lote 1 quase esgotado. Depois disso, o valor sobe!
                </p>
              </div>
            </div>
          </div>

          {/* Camarotes */}
          <div className="mb-12">
            <h3 className="text-landi-black text-xl font-bold text-center mb-2 flex items-center justify-center gap-2">
              <Utensils className="w-5 h-5 text-landi-red" /> Camarotes VIP
            </h3>
            <p className="text-landi-black/60 text-sm text-center mb-6">Experiência premium com open bar e/ou open food</p>
            <div className="space-y-4">
              {/* All Inclusive */}
              <div className="bg-landi-red rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-4">
                  <div className="inline-block bg-landi-white text-landi-red text-xs font-bold px-3 py-1 rounded-full mb-2">
                    EXCLUSIVO
                  </div>
                  <h4 className="text-landi-white text-lg font-bold mb-1">All Inclusive VIP</h4>
                  <p className="text-landi-white/90 text-xs">Open bar + Open food + área exclusiva</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="bg-landi-white/10 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-landi-white text-xs">13/12</p>
                      <p className="text-landi-white text-xl font-bold">R$ 600</p>
                    </div>
                    <p className="text-landi-white/70 text-xs">Open bar + Open food completo + área VIP exclusiva</p>
                  </div>
                  <div className="bg-landi-white/10 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-landi-white text-xs">14/12</p>
                      <p className="text-landi-white text-xl font-bold">R$ 600</p>
                    </div>
                    <p className="text-landi-white/70 text-xs">Open bar + Open food completo + área VIP exclusiva</p>
                  </div>
                  <div className="bg-landi-white/20 rounded-lg p-3 relative">
                    <div className="absolute -top-2 -right-2 bg-landi-white text-landi-red text-xs font-bold px-2 py-1 rounded-full">
                      200 REAIS OFF
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <p className="text-landi-white text-xs">Dois dias</p>
                        <p className="text-landi-white/60 text-xs line-through">R$ 1.200</p>
                      </div>
                      <p className="text-landi-white text-xl font-bold">R$ 1.000</p>
                    </div>
                    <p className="text-landi-white/80 text-xs">Experiência VIP completa nos 2 dias + economia de R$200</p>
                  </div>
                </div>
              </div>

              {/* Open Food */}
              <div className="bg-landi-black rounded-2xl p-6 shadow-xl border-2 border-landi-red/30">
                <div className="text-center mb-4">
                  <div className="inline-block bg-landi-red/80 text-landi-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    PREMIUM
                  </div>
                  <h4 className="text-landi-white text-lg font-bold mb-1">Open Food VIP</h4>
                  <p className="text-landi-white/90 text-xs">Alimentação completa + área exclusiva</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="bg-landi-white/5 rounded-lg p-3 border border-landi-white/10">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-landi-white text-xs">13/12</p>
                      <p className="text-landi-red text-xl font-bold">R$ 350</p>
                    </div>
                    <p className="text-landi-white/70 text-xs">Alimentação premium + área VIP exclusiva</p>
                  </div>
                  <div className="bg-landi-white/5 rounded-lg p-3 border border-landi-white/10">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-landi-white text-xs">14/12</p>
                      <p className="text-landi-red text-xl font-bold">R$ 350</p>
                    </div>
                    <p className="text-landi-white/70 text-xs">Alimentação premium + área VIP exclusiva</p>
                  </div>
                  <div className="bg-landi-white/10 rounded-lg p-3 border border-landi-white/20 relative">
                    <div className="absolute -top-2 -right-2 bg-landi-red text-landi-white text-xs font-bold px-2 py-1 rounded-full">
                      50 REAIS OFF
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <p className="text-landi-white text-xs">Dois dias</p>
                        <p className="text-landi-white/60 text-xs line-through">R$ 700</p>
                      </div>
                      <p className="text-landi-red text-xl font-bold">R$ 650</p>
                    </div>
                    <p className="text-landi-white/80 text-xs">Open food nos 2 dias + economia de R$50</p>
                  </div>
                </div>

                {/* CTA Camarotes */}
                <div className="mt-6 space-y-3">
                  <a 
                    href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[#FFB800] hover:bg-[#E09A00] text-black font-bold text-lg py-6 rounded-xl shadow-xl"
                      style={{ 
                        boxShadow: '0px 0px 20px rgba(255, 184, 0, 0.8), 0px 0px 40px rgba(255, 184, 0, 0.4)',
                      }}
                    >
                      🎟️ GARANTIR CAMAROTE VIP
                    </Button>
                  </a>
                  <p className="text-center text-landi-white text-sm font-semibold">
                    ⚠️ Vagas limitadas para experiência VIP!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Combos de Grupos */}
          <div className="mb-12">
            <h3 className="text-landi-black text-xl font-bold text-center mb-2 flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-landi-red" /> Combos para Grupos
            </h3>
            <p className="text-landi-black/60 text-sm text-center mb-6">Tenda montada + ingressos inclusos + energia no local</p>
            <div className="space-y-4">
              {/* Premium */}
              <div className="bg-landi-black rounded-2xl p-6 shadow-xl">
                <div className="mb-4">
                  <div className="inline-block bg-landi-red text-landi-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    PREMIUM
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <h4 className="text-landi-white text-lg font-bold">Tenda 10x10</h4>
                      <p className="text-landi-white/80 text-xs">+ 20 ingressos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-landi-white text-2xl font-bold">R$ 2.500</p>
                      <p className="text-landi-white/60 text-xs">2 dias</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-xs">Tenda Premium 10m x 10m montada</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-xs">20 ingressos para os dois dias</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-xs">Área reservada com energia</p>
                  </div>
                </div>
              </div>

              {/* Standard */}
              <div className="bg-landi-black rounded-2xl p-6 shadow-xl">
                <div className="mb-4">
                  <div className="inline-block bg-landi-red/80 text-landi-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    STANDARD
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <h4 className="text-landi-white text-lg font-bold">Tenda 5x5</h4>
                      <p className="text-landi-white/80 text-xs">+ 10 ingressos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-landi-red text-2xl font-bold">R$ 1.300</p>
                      <p className="text-landi-white/60 text-xs">2 dias</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-xs">Tenda Standard 5m x 5m montada</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-xs">10 ingressos para os dois dias</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-landi-red flex-shrink-0 mt-0.5" />
                    <p className="text-landi-white/90 text-xs">Área exclusiva no recinto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Combos para Grupos */}
            <div className="mt-8 space-y-3">
              <a 
                href="https://www.sympla.com.br/evento/1-encontro-landi-turbina/3190267" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#FFB800] hover:bg-[#E09A00] text-black font-bold text-lg py-6 rounded-xl shadow-xl"
                  style={{ 
                    boxShadow: '0px 0px 20px rgba(255, 184, 0, 0.8), 0px 0px 40px rgba(255, 184, 0, 0.4)',
                  }}
                >
                  🎟️ RESERVAR COMBO PARA GRUPO
                </Button>
              </a>
              <p className="text-center text-landi-black text-sm font-semibold">
                ⚠️ Espaços limitados! Garanta sua área exclusiva agora
              </p>
            </div>
          </div>

          {/* Link para itens */}
          <div className="text-center">
            <p className="text-landi-black text-sm leading-relaxed">
              Confira a lista de{" "}
              <Link
                to="/itens" 
                className="text-landi-red font-semibold underline hover:text-landi-red/80 transition-colors"
              >
                itens permitidos e proibidos
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
