import React, { useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Event = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <div id="about">
      {/* Global Section */}
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Review Events World-Wide</p>
            <h2>
              Crafted to perfection <span className="text-white">—</span> from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every Samsung event we host is a reflection of our commitment to innovation
              <span className="text-white">—</span> from groundbreaking product launches to immersive tech showcases.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold"><span>4.8</span>/5</p>
              <p className="text-sm text-white-100">Join 12,000+ YouTubers worldwide enjoying our redesign.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-0 mb-10">
        {["/Review2.jpg", "/Review4.jpg", "/Review1.jpg", "/reviewi.jpg"].map((img, idx) => (
          <div className="relative" key={idx}>
            <div className="noisy" />
            <img src={img} alt={`grid-img-${idx}`} className="w-full h-[400px] object-cover rounded-xl" />
          </div>
        ))}
      </div>

      {/* China Section */}
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">中国最佳评测活动</p>
            <h2>
              精心打造<span className="text-white">—</span> 从调制到点缀
            </h2>
          </div>
          <div className="sub-content">
            <p>
              每一场三星举办的活动都展现了我们对创新的承诺
              <span className="text-white">—</span> 从突破性的产品发布到沉浸式的科技展示。
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold"><span>4.2</span>/5</p>
              <p className="text-sm text-white-100">超过12,000名全球YouTuber正在享受我们的全新设计。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-0 mb-10">
        {["/reviewc.jpg", "/reviewc2.jpg", "/reviewcc7.jpg", "reviewc8.jpg"].map((img, idx) => (
          <div className="relative" key={`china-${idx}`}>
            <div className="noisy" />
            <img src={img} alt={`grid-img-china-${idx}`} className="w-full h-[400px] object-cover rounded-xl" />
          </div>
        ))}
      </div>

      {/* Korea Section with Customer Image and Language Switch */}
      <div className="flex justify-center mb-5">
        <img src="/avtar.png" alt="Customer" className="w-32 h-32 rounded-full object-cover border-4 border-blue-500" />
      </div>

      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">
              {isEnglish ? "Best review products by customer" : "한국 최고의 리뷰 이벤트"}
            </p>
            <h2>
              {isEnglish ? "Crafted to perfection" : "완벽을 위해 정성스럽게"}
              <span className="text-white">—</span>{" "}
              {isEnglish ? "from muddle to garnish" : "첫 단계부터 마지막 장식까지"}
            </h2>
          </div>
          <div className="sub-content">
            <p>
              {isEnglish
                ? "Every Samsung event reflects our commitment to innovation"
                : "삼성의 모든 이벤트는 혁신에 대한 우리의 약속을 반영합니다"}
              <span className="text-white">—</span>{" "}
              {isEnglish
                ? "from groundbreaking product launches to immersive tech showcases."
                : "획기적인 제품 출시부터 몰입형 기술 전시까지."}
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold"><span>4.9</span>/5</p>
              <p className="text-sm text-white-100">
                {isEnglish
                  ? "Over 12,000 YouTubers worldwide enjoy our redesign."
                  : "전 세계 12,000명 이상의 유튜버가 우리의 새로운 디자인을 즐기고 있습니다."}
              </p>
            </div>
          </div>

          {/* Language Switch Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsEnglish(!isEnglish)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition"
            >
              {isEnglish ? "보기: 한국어" : "See in English"}
            </button>
          </div>
        </div>
      </div>

      <div className="top-grid grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-0 mb-20">
        {["/reviewk.jpg", "/reviewk2.jpg", "/reviewk3.jpg", "/reviewk4.jpg"].map((img, idx) => (
          <div className="relative" key={`korea-${idx}`}>
            <div className="noisy" />
            <img src={img} alt={`grid-img-korea-${idx}`} className="w-full h-[400px] object-cover rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
