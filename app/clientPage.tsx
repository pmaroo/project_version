"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip, ScrollTrigger } from "gsap/all";

export default function IndexClient() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

  const container = useRef<HTMLUListElement | null>(null);

  useGSAP(
    () => {
      gsap.to(".title", {
        x: -80,
        scrollTrigger: {
          start: 0,
          end: 300,
          scrub: true,
        },
      });
      gsap.to(".title2", {
        x: 80,
        scrollTrigger: {
          start: 0,
          end: 300,
          scrub: true,
        },
      });
      gsap.to(".title", {
        opacity: 0,
        ease: "sine.out",
        scrollTrigger: {
          start: 1900,
          end: 2500,
          scrub: true,
        },
      });
      gsap.to(".title2", {
        opacity: 0,
        ease: "sine.out",
        scrollTrigger: {
          start: 1900,
          end: 2500,
          scrub: true,
        },
      });

      gsap.to(".card", {
        y: 0,
        opacity: 1,
        ease: "sine.out",
        stagger: 1,
        scrollTrigger: {
          start: 150,
          end: 2000,
          scrub: true,
        },
      });

      // 카드 그리드 애니메이션
      gsap.set(".card2", {
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "50%",
        position: "absolute",
      });

      // 스크롤 트리거 생성
      const tl = gsap.timeline({
        scrollTrigger: {
          // trigger: ".card-container", // 트리거 요소
          start: 2300, // 트리거 요소가 있을때 top은 트리거 요소의 상단이 뷰포트하단에 도달했을때
          end: 3000,
          scrub: 1,
          toggleActions: "play none none reverse",

          onEnterBack: () => {
            // 스크롤을 다시 위로 올릴 때 모든 카드를 중앙로
            gsap.set(".card2", {
              xPercent: -50,
              yPercent: -50,
              left: "50%",
              top: "50%",
              position: "absolute",
            });
          },
        },
      });

      // 타임라인에 애니메이션 추가
      tl.to(".card2", {
        x: (index) => {
          const row = Math.floor(index / 5);
          const col = index % 5;
          return (col - 2) * 350; // 300을 600으로 변경하여 양쪽으로 더 넓게 퍼지게 함
        },
        y: (index) => {
          const row = Math.floor(index / 5);
          const col = index % 5;
          return (row - 0.5) * 450;
        },
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });

      gsap.to(".element", {
        scrollTrigger: {
          trigger: ".element",
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
          onEnter: () => {
            // 요소가 중앙에 도달했을 때 실행되는 애니메이션
            gsap.from(".element li", {
              y: 100,
              opacity: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power2.out",
            });
          },
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <article
        className="flex items-start justify-start h-[4000px]"
        ref={container}
      >
        <ul className="sticky top-0 left-0 flex flex-row items-center justify-center w-full h-screen">
          <li className="mr-[30px] translate-x-[130px] title">
            <p className="text-white text-[100px]">
              선물의 <span className="font-[900]">가치</span>
            </p>
          </li>
          <li className="w-[240px] h-[400px] relative card-container">
            <div className="absolute inset-auto bg-red-400 opacity-0 card card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-orange-500 opacity-0 card card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-blue-700 opacity-0 card card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-white opacity-0 card card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-white opacity-0 card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-white opacity-0 card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-white opacity-0 card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-white opacity-0 card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-white opacity-0 card2 translate-y-[200px] size-full"></div>
            <div className="absolute inset-auto bg-white opacity-0 card2 translate-y-[200px] size-full"></div>
          </li>
          <li className="ml-[30px] translate-x-[-130px] title2">
            <p className="text-white text-[100px]">
              깊카와 <span className="font-[900]">같이</span>
            </p>
          </li>
        </ul>
      </article>
      <article className="flex flex-col items-center justify-center w-full py-[400px] ">
        <ul className=" flex flex-row items-center justify-center w-full element py-[100px]">
          <li className="text-white text-[100px] font-[900]">GIFT CARD</li>
          <li className="mx-[50px] ">
            <div className="size-[100px] bg-white rotate-[20deg]"></div>
          </li>
          <li className="text-white text-[100px] font-[900]">깊카</li>
        </ul>
        <ul className="flex flex-row items-center justify-center w-full my-[200px] element">
          <li className="text-white text-[100px] font-[900]">GIFT CARD</li>
          <li className="mx-[50px] ">
            <div className="size-[100px] bg-white rotate-[20deg]"></div>
          </li>
          <li className="text-white text-[100px] font-[900]">깊카</li>
        </ul>
        <ul className="flex flex-row items-center justify-center w-full element">
          <li className="text-white text-[100px] font-[900]">GIFT CARD</li>
          <li className="mx-[50px] ">
            <div className="size-[100px] bg-white rotate-[20deg]"></div>
          </li>
          <li className="text-white text-[100px] font-[900]">깊카</li>
        </ul>
      </article>
    </>
  );
}
