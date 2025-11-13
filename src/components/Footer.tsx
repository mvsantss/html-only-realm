import taglineLogo from "@/assets/tagline.png";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-landi-black py-12 px-6 border-t border-landi-gray/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo e Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              id="cta-footer-logo-topo"
              src={taglineLogo}
              alt="Landi Turbina - Pra quem quer acelerar com estilo"
              className="h-24 md:h-32 w-auto mb-6 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <div className="flex items-center gap-4">
              <a 
                id="cta-footer-youtube"
                href="https://www.youtube.com/@landiturbinaupgrade8199/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-landi-gray hover:text-landi-red transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                id="cta-footer-instagram"
                href="https://www.instagram.com/landiturbina/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-landi-gray hover:text-landi-red transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                id="cta-footer-tiktok"
                href="https://www.tiktok.com/@landi.turbina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-landi-gray hover:text-landi-red transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Endereço e Contato */}
          <div className="space-y-4 text-landi-white">
            <h3 className="text-xl font-semibold mb-4 text-landi-red uppercase tracking-wide">
              Contato
            </h3>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-landi-red flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm leading-relaxed">
                  Avenida Dr Plinio de Almeida Fagundes, 330<br />
                  Vila São Judas Tadeu<br />
                  Avaré - SP, 18705-770
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-landi-red" />
              <a 
                id="cta-footer-telefone"
                href="tel:+5514996952282" 
                className="text-sm hover:text-landi-red transition-colors"
              >
                (14) 99695-2282
              </a>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4 text-landi-white">
            <h3 className="text-xl font-semibold mb-4 text-landi-red uppercase tracking-wide flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Horário de Funcionamento
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-landi-gray">Segunda a Sexta:</span>
                <span className="font-medium">07:00 - 17:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-landi-gray">Sábado e Domingo:</span>
                <span className="font-medium">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-landi-gray/20 text-center text-landi-gray text-sm">
          <p>© {new Date().getFullYear()} Landi Turbina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
