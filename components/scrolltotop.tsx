'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para mostrar o botão quando o usuário rola para baixo
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar para o topo quando o usuário clica no botão
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="fixed bottom-6 right-6 cursor-pointer text-2xl">
          <Image src='/up-arrow.png' width='50' height='50' alt='seta pra cima' />
        </div>
      )}
    </div>
  );
}

