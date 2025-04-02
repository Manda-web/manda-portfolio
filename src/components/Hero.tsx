
import React from "react";
import { ArrowDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/5 w-24 h-24 rounded-full bg-blue-200/20 animate-float" style={{ animationDelay: "2s" }}></div>
        <img src="manda-2.jpg" alt="Manda"  style={{borderTopRightRadius: '50%'}} />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in" delay={100}>
            <h4 className="text-lg font-medium text-primary mb-2">Hello, I'm a</h4>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              DevOps Engineer
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={500}>
            <p className="text-lg font-medium text-primary mb-8">
              Specializing in React, Symfony, Laravel, and AWS infrastructure. Creating efficient, scalable, and reliable systems through modern DevOps practices.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={700}>
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 btn-hover-effect">
              View My Work
            </button>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="text-sm font-medium text-primary/70">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary/70" />
      </div>
    </section>
  );
};

export default Hero;
