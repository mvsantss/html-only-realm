import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import grafismoBlack from "@/assets/grafismo_black.svg";

export const EventFAQ = () => {
  return (
    <section className="bg-landi-white py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-3 mb-8">
          <img src={grafismoBlack} alt="" className="h-6 w-auto" />
          <h2 className="text-landi-black text-2xl md:text-4xl font-semibold uppercase tracking-wide text-center">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-landi-black/10 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-landi-black hover:text-landi-red">
              O ingresso é por pessoa ou por veículo?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              O ingresso é individual, por pessoa. Cada participante precisa ter seu próprio ingresso para acessar o evento, independente do veículo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-landi-black/10 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-landi-black hover:text-landi-red">
              Crianças pagam ingresso?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Crianças a partir de 13 anos pagam ingresso. Menores de idade devem estar acompanhados de responsável legal e apresentar documentos e termo assinado obrigatório.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-landi-black/10 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-landi-black hover:text-landi-red">
              Posso comprar ingresso de 1 dia apenas?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Sim! Você pode escolher entre ingressos individuais para sábado (13/12) ou domingo (14/12), ou o pacote completo para os 2 dias com desconto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-landi-black/10 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-landi-black hover:text-landi-red">
              O que inclui o camarote VIP?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              O camarote All Inclusive VIP inclui open bar + open food + área exclusiva. Já o Open Food VIP inclui alimentação completa + área exclusiva (sem bebidas).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-landi-black/10 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-landi-black hover:text-landi-red">
              Como funcionam os combos de grupo com tenda?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Os combos incluem tenda montada + ingressos + energia no local. Tenda 10x10 vem com 20 ingressos e Tenda 5x5 vem com 10 ingressos, ambos para os dois dias do evento.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-landi-black/10 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-landi-black hover:text-landi-red">
              Onde fica o evento?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              O evento acontece no Parque Dr. Fernando Cruz Pimentel - Exposição Municipal Agropecuária e Industrial de Avaré (Emapa), em Avaré - SP.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-landi-black/10 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-landi-black hover:text-landi-red">
              Preciso de algum documento especial?
            </AccordionTrigger>
            <AccordionContent className="text-landi-black/80">
              Sim, é obrigatório apresentar o termo do veículo assinado. Para menores de idade, também é necessário o termo para menor. Ambos estão disponíveis para download na seção de ingressos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-landi-black text-lg mb-4 font-semibold">
            Ainda tem dúvidas?
          </p>
          <a
            href="https://wa.me/5514998882900?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20Encontro%20Landi%20Turbina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            TIRAR MINHAS DÚVIDAS PELO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};
