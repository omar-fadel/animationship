"use client";
import React from "react";
import "./style.css";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const container = useRef();

  useGSAP(
    () => {
      const createAnimation = () => {
        const isDesktop = window.innerWidth > 768;

        gsap.set(".heading", {
          yPercent: 100,
          opacity: 0,
        });

        gsap.set(".point", {
          opacity: 0,
        });
        gsap.set(".link", {
          opacity: 0,
          yPercent: 100,
          xPercent: -50,
        });
        gsap.set(".dumbleWrapper", {
          scale: 2.5,
          yPercent: isDesktop ? 60 : 30,
          xPercent: isDesktop ? 0 : 10,
        });
        gsap.defaults({
          duration: 1,
          delay: 0.5,
        });

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          ".heading",
          {
            yPercent: 0,
            opacity: 1,
            delay: 0,
          },
          "a"
        )
          .to(
            ".heading",
            {
              yPercent: -100,
              opacity: 0,
            },
            "b"
          )
          .to(
            ".dumbleWrapper",
            {
              xPercent: isDesktop ? -76.5 : -46,
            },
            "b"
          )
          .to(
            ".point1",
            {
              opacity: 1,
            },
            "b"
          )
          .to(
            ".dumbleWrapper",
            {
              xPercent: isDesktop ? -120 : -65,
            },
            "c"
          )
          .to(
            ".point2",
            {
              opacity: 1,
            },
            "c"
          )
          .to(
            ".dumbleWrapper",
            {
              xPercent: isDesktop ? -150 : -101,
            },
            "d"
          )
          .to(
            ".point3",
            {
              opacity: 1,
            },
            "d"
          )
          .to(
            ".dumbleWrapper",
            {
              xPercent: -100,
              yPercent: 0,
              scale: 1,
            },
            "e"
          )
          .to(
            ".point4",
            {
              opacity: 1,
            },
            "e"
          )
          .to(
            ".link",
            {
              yPercent: 0,
              opacity: 1,
            },
            "f"
          );
      };

      createAnimation();
    },
    { scope: container }
  );

  return (
    <section ref={container} className="Timeline">
      <div className="Frame">
        <div className="heading">Our Story</div>
        <div className="dumbleWrapper">
          <div className="dumble">
            <div className="point point1">
              <div className="detail">
                <h2>1988</h2>
                <p>PrimaFit was founded.</p>
              </div>
            </div>
            <div className="point point2">
              <div className="detail">
                <h2>2002</h2>
                <p>
                  Became the fastest growing home use fitness provider in the
                  archipelago
                </p>
              </div>
            </div>
            <div className="point point3">
              <div className="detail">
                <h2>2017</h2>
                <p>Partnered with biggest gym chains in Indonesia</p>
              </div>
            </div>
            <div className="point point4">
              <div className="detail">
                <h2>2023</h2>
                <p>Indonesia's No.1 commercial Fitness Equipment Suppliers.</p>
              </div>
            </div>
            <img src="/dumble.png" alt="dumble" />
          </div>
        </div>
        <a href="/" className="link">
          <button>
            <img src="/location.svg" alt="loc" />
            <span>Learn More</span>
          </button>
        </a>
      </div>
    </section>
  );
}
