import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { X } from "lucide-react";

interface WhatsAppGroupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groupUrl: string;
}

export function WhatsAppGroupModal({ open, onOpenChange, groupUrl }: WhatsAppGroupModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState<"form" | "welcome" | "already-member">("form");
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return phone;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { name: "", phone: "" };
    
    if (!name.trim()) {
      newErrors.name = "Por favor, preencha seu nome completo";
    }
    
    if (!phone.trim()) {
      newErrors.phone = "Por favor, preencha seu WhatsApp";
    }
    
    setErrors(newErrors);
    
    if (newErrors.name || newErrors.phone) {
      return;
    }

    setLoading(true);

    try {
      // Verificar se o telefone já existe no banco
      const leadsRef = collection(db, "leads");
      const q = query(leadsRef, where("phone", "==", phone.trim()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Telefone já cadastrado - mostrar tela especial
        setLoading(false);
        setScreen("already-member");
      } else {
        // Número novo - salvar no Firestore
        await addDoc(collection(db, "leads"), {
          name: name.trim(),
          phone: phone.trim(),
          joinedAt: new Date().toISOString(),
        });

        setLoading(false);
        setScreen("welcome");
      }
    } catch (error) {
      console.error("Error saving:", error);
      toast({
        title: "Erro",
        description: "Não foi possível processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const handleJoinGroup = () => {
    window.open(groupUrl, "_blank");
    onOpenChange(false);
    setName("");
    setPhone("");
    setScreen("form");
  };

  const handleClose = () => {
    onOpenChange(false);
    setName("");
    setPhone("");
    setScreen("form");
    setErrors({ name: "", phone: "" });
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[90vw] sm:max-w-[425px] bg-landi-white border-none max-h-[90vh] overflow-y-auto rounded-3xl">
        <button
          id="cta-modal-whatsapp-fechar"
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-landi-black/5 transition-colors z-50"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-landi-black" />
        </button>
        
        {screen === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-landi-black text-center pr-8">
                Comunidade Exclusiva
              </DialogTitle>
              <DialogDescription className="text-center text-landi-black/70 pt-2">
                <strong className="text-landi-black">Junte-se aos verdadeiros Barulhentos!</strong>
                <br /><br />
                Ao entrar no grupo, você receberá:
                <ul className="text-left mt-3 space-y-2 text-sm">
                  <li>✅ Novidades em primeira mão sobre o evento</li>
                  <li>✅ Promoções exclusivas para membros</li>
                  <li>✅ Conteúdos especiais da comunidade diesel</li>
                  <li>✅ Acesso direto à organização do evento</li>
                </ul>
                <br />
                <span className="text-xs text-landi-black/60">
                  Ao se cadastrar, você concorda em receber mensagens da Landi Turbina via WhatsApp.
                </span>
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-landi-black font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="Digite seu nome completo"
                  className={`border-landi-black/20 ${errors.name ? "border-red-500" : ""}`}
                  disabled={loading}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-landi-black font-medium">
                  WhatsApp
                </Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    handlePhoneChange(e);
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  placeholder="(00) 00000-0000"
                  className={`border-landi-black/20 ${errors.phone ? "border-red-500" : ""}`}
                  disabled={loading}
                  maxLength={15}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
              <Button
                id="cta-modal-whatsapp-enviar"
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-landi-red hover:bg-landi-red/90 text-white font-semibold text-base py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                {loading ? (
                  "Processando..."
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    INGRESSAR NA COMUNIDADE
                  </>
                )}
              </Button>
            </form>
          </>
        )}

        {screen === "welcome" && (
          <div className="py-6 text-center space-y-4">
            <DialogTitle className="text-2xl font-bold text-landi-black">
              Bem-vindo aos Barulhentos!
            </DialogTitle>
            <DialogDescription className="text-base text-landi-black/80 px-4">
              Parabéns, <span className="font-bold text-landi-red">{name}</span>! 
              <br /><br />
              Você agora faz parte dos verdadeiros Barulhentos do diesel. 
              Prepare-se para experiências únicas e conteúdos exclusivos.
              <br /><br />
              <span className="font-semibold text-landi-black">
                Clique no botão abaixo para ingressar na comunidade agora!
              </span>
            </DialogDescription>
            <Button
              id="cta-modal-whatsapp-entrar-grupo-welcome"
              onClick={handleJoinGroup}
              size="lg"
              className="w-full bg-landi-red hover:bg-landi-red/90 text-white font-semibold text-base py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              ENTRAR NO GRUPO AGORA
            </Button>
          </div>
        )}

        {screen === "already-member" && (
          <div className="py-6 text-center space-y-4">
            <DialogTitle className="text-2xl font-bold text-landi-black">
              Você Já É Um de Nós!
            </DialogTitle>
            <DialogDescription className="text-base text-landi-black/80 px-4">
              Olá, <span className="font-bold text-landi-red">{name}</span>!
              <br /><br />
              Identificamos que você já faz parte da nossa lista exclusiva. 
              Isso significa que você já está entre os Barulhentos da Landi Turbina!
              <br /><br />
              <span className="font-semibold text-landi-black">
                Clique abaixo para acessar o grupo exclusivo novamente.
              </span>
            </DialogDescription>
            <Button
              id="cta-modal-whatsapp-acessar-grupo-existing"
              onClick={handleJoinGroup}
              size="lg"
              className="w-full bg-landi-red hover:bg-landi-red/90 text-white font-semibold text-base py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              ACESSAR GRUPO EXCLUSIVO
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
