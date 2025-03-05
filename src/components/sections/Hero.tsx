
import React from "react";
import { FadeIn } from "../animations/FadeIn";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
              Innovative Software Solutions for{" "}
              <span className="text-primary">Every Business Need</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-6 text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge software solutions, seamless project management, and expert consulting.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="mt-10 flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
