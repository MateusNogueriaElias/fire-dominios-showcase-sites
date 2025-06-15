import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import DynamicParticlesBackground from "../components/DynamicParticlesBackground";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Ripple Effect no CTA Hero Button
    const btn = document.querySelector('.cta-hero-btn');
    if (btn) {
      const rippleSpan = btn.querySelector<HTMLElement>('.cta-btn-ripple');
      let running = false;
      btn.addEventListener('click', function(e:any){
        if (running || !rippleSpan) return;
        running = true;
        rippleSpan.classList.add('ripple-on');
        setTimeout(() => {
          rippleSpan.classList.remove('ripple-on');
          running = false;
        }, 540);
      });
    }

    // Fade out hero ao scroll
    const hero = document.querySelector<HTMLElement>('.fade-out-on-scroll');
    const onScroll = () => {
      if (!hero) return;
      // Só aplica fade se scroll está abaixo de 70px e em desktop
      if (window.scrollY > 70 && window.innerWidth > 770) {
        hero.setAttribute('data-fade','1');
      } else {
        hero.setAttribute('data-fade','0');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
