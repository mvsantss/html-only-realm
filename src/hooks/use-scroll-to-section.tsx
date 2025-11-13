export const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    // Aguarda o próximo frame para garantir que o DOM está pronto
    requestAnimationFrame(() => {
      const allElements = document.querySelectorAll(`#${sectionId}`);
      
      // Encontra o elemento visível (não hidden)
      let visibleElement: HTMLElement | null = null;
      
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const style = window.getComputedStyle(htmlEl);
        
        // Verifica se o elemento está visível
        if (style.display !== 'none' && style.visibility !== 'hidden' && htmlEl.offsetHeight > 0) {
          visibleElement = htmlEl;
        }
      });
      
      if (visibleElement) {
        // Força scroll imediato usando offsetTop acumulado
        let top = 0;
        let element: HTMLElement | null = visibleElement;
        
        while (element) {
          top += element.offsetTop;
          element = element.offsetParent as HTMLElement | null;
        }
        
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    });
  };

  return { scrollToSection };
};
