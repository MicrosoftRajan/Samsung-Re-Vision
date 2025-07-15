import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

// Register the plugin
gsap.registerPlugin(SplitText);

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth:767})

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars,words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

      gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:"top top ",
        end:"bottom top",
        scrub:true

    }
  })
  .to('.right-leaf',{y:200}, 0)
  .to('.left-leaf',{y:-200}, 0)

  const startVal = isMobile ? 'top 50%':'center 60%';
  const endVal = isMobile ? "120% top":'bottom top';

  let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startVal,
		end: endVal,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};
  }, []);



  return (
    <>
    <section id="hero" className="noisy">
      <h1 className="title">SAMSUNG</h1>
      <img
        src="/women.png"
        alt="logo"
        className="absolute top-10 left-0 w-60 h-60 object-cover"
        style={{ clipPath: "circle(40% at 50% 40%)" }}
      />
      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Innovate Create Inspire</p>
            <p className="subtitle">Innovate Create Fold the Future</p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Samsung’s flagship smartphone lines include the Galaxy S Series, Z
              Fold Series, and Z Flip Series. The Galaxy S25 Ultra (2025) leads
              the Android market with cutting-edge AI features, a powerful
              Snapdragon 8 Gen 3 Elite processor, a 200MP camera, and a titanium
              frame with a built-in S Pen. The Galaxy Z Fold 7 represents
              Samsung's commitment to foldable innovation with a large 8-inch
              display and multitasking features, while the Galaxy Z Flip 7
              combines compact design with modern AI-driven camera technology.
            </p>
            <a href="#cocktails">About Us</a>
          </div>
        </div>
      </div>
    </section>

    <div className="video absolute inset-0">
        <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto"/>
    </div>
    </>


  );
};

export default Hero;
