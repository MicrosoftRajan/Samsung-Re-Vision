import React from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  useGSAP(() => {
    const navteen = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      }
    });

    navteen.fromTo(
      'nav',
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut'
      }
    );
  });

  return (
    <nav className="fixed top-0 w-full z-50 text-white p-4 transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#home" className="flex items-center gap-3">
          <img src="/Samsunglogo.png" alt="logo" className="w-20 h-20" />
          <p className="font-bold text-xl">Samsung Re:Vision</p>
        </a>

        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-blue-500">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
