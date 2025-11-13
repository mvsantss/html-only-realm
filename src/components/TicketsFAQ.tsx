import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const TicketsFAQ = () => {
  return (
    <section className="bg-landi-white py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-landi-black text-3xl md:text-4xl font-bold text-center mb-8 uppercase">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              O ingresso é por pessoa ou por veículo?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              O ingresso é por pessoa. Cada participante precisa do seu próprio ingresso para entrar no evento.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              Crianças precisam de ingresso?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Crianças pagam a partir de 13 anos. Menores de idade devem ir acompanhados de responsável legal e apresentar documentos + termo assinado.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              Posso levar minha caminhonete?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Sim! O evento é feito para os barulhentos. Traga sua caminhonete e faça parte da maior exposição diesel do interior paulista. Não esqueça do termo de responsabilidade do veículo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              O que está incluído no camarote All Inclusive?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              O camarote All Inclusive inclui open bar (bebidas liberadas) e open food (alimentação completa) durante todo o período do evento, além de área VIP exclusiva com melhor vista.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              Como funciona o combo de grupos com tenda?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Os combos de grupos incluem uma tenda montada (5x5 ou 10x10), área reservada com ponto de energia e ingressos para o grupo (10 ou 20 pessoas). Ideal para clubes, equipes e grupos de amigos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              Posso comprar ingresso na hora?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Recomendamos comprar antecipado pela plataforma Sympla. Os ingressos são por lote e o preço aumenta conforme a venda avança. Garantindo agora você economiza!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              Onde fica o evento?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              EMAPA - Av. Mario Covas, Distrito Industrial Nova Avaré, Avaré - SP. Entrada de Avaré, próximo ao McDonalds. Um dos maiores recintos de eventos do interior paulista!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-landi-black/5 rounded-xl px-6 border-none">
            <AccordionTrigger className="text-landi-black font-semibold text-left hover:no-underline">
              Haverá estacionamento?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Sim! O recinto da EMAPA possui ampla área de estacionamento para caminhonetes e veículos de todos os tamanhos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};