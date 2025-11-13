import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Itens = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => navigate(-1)} variant="outline" className="mb-6">
          ← Voltar
        </Button>

        <h1 className="text-3xl font-bold mb-8">Regras do Evento</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">ITENS PROIBIDOS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Armas, objetos e substâncias ilícitas</h3>
              <p>Qualquer item proibido por lei, artefatos cortantes, perfurantes, contundentes ou que coloquem terceiros em risco.</p>
            </div>

            <div>
              <h3 className="font-semibold">Vapes / cigarros eletrônicos</h3>
              <p>Proibidos pela Anvisa. Não entram.</p>
            </div>

            <div>
              <h3 className="font-semibold">Comida, bebida e recipientes</h3>
              <p>Qualquer alimento ou líquido (inclusive garrafas, latas, copos térmicos, squeezes e coolers).</p>
              <p className="text-sm mt-1">Exceção apenas com laudo/receituário para necessidade médica ou alimentação infantil.</p>
            </div>

            <div>
              <h3 className="font-semibold">Mochilas e malas de viagem</h3>
              <p>Deixe a bagagem no local de hospedagem ou no veículo. Pequenas bolsas transversais/pochetes podem ser revistadas e liberadas a critério da segurança.</p>
            </div>

            <div>
              <h3 className="font-semibold">Objetos que atrapalham segurança/visibilidade</h3>
              <p>Guarda-chuva, bastão de selfie, tripé, drones, bandeiras com mastro, infláveis, bichos de pelúcia de qualquer tamanho.</p>
            </div>

            <div>
              <h3 className="font-semibold">Itens que geram risco ou perturbação</h3>
              <p>Correntes grossas, capacetes, laser, objetos pontiagudos ou cortantes, fogos de artifício (de qualquer tipo).</p>
            </div>

            <div>
              <h3 className="font-semibold">Câmeras e captação profissional</h3>
              <p>Câmeras fotográficas/vídeo profissionais (inclui action cams/GoPro com acessórios), rádios comunicadores e afins não são permitidos. Use seu smartphone e deixe o registro profissional com a nossa equipe.</p>
            </div>

            <div>
              <h3 className="font-semibold">Chinelo</h3>
              <p>Não recomendado por risco de acidentes em ambiente com grande circulação de pessoas.</p>
            </div>

            <div>
              <h3 className="font-semibold">Itens automotivos e químicos</h3>
              <p>Galões de combustível, fluidos inflamáveis, sprays e similares não entram.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">ITENS PERMITIDOS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Protetor auricular</h3>
              <p>Recomendado. Proteja sua audição para curtir o evento por completo.</p>
            </div>

            <div>
              <h3 className="font-semibold">Óculos (de sol ou de grau)</h3>
              <p>Liberados.</p>
            </div>

            <div>
              <h3 className="font-semibold">Maquiagem e higiene pessoal</h3>
              <p>Necessaire pequena (itens em tamanho de viagem). Sem sprays aerossóis inflamáveis.</p>
            </div>

            <div>
              <h3 className="font-semibold">Roupas adequadas ao clima</h3>
              <p>Bermuda, boné/chapéu e capa de chuva (em caso de previsão). Evite guarda-chuva.</p>
            </div>

            <div>
              <h3 className="font-semibold">Medicação de uso pessoal</h3>
              <p>Liberados.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">CONDUTA E SEGURANÇA</h2>
          
          <div className="space-y-2">
            <p>• Respeite as normas do recinto EMAPA e a legislação local.</p>
            <p>• Proibidos fogos, direção sob efeito de álcool, e qualquer ação que ofereça risco.</p>
            <p>• A organização poderá impedir o acesso ou retirar do evento quem descumprir regras, sem reembolso.</p>
            <p>• A equipe de segurança poderá reter itens considerados perigosos, mesmo que não listados acima.</p>
          </div>
        </section>

        <Button onClick={() => navigate(-1)} variant="outline">
          ← Voltar
        </Button>
      </div>
    </div>;
};
export default Itens;