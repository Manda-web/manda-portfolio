
import React from "react";
import { Server, Code, Cloud, Image } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <AnimatedSection animation="slide-in-left" delay={100}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="manda.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-lg glass-panel p-4 flex items-center justify-center">
                <Server className="h-10 w-10 text-primary" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300} className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DevOps Professional</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate DevOps engineer with expertise in bridging development and operations. My approach combines technical skills with a strategic mindset to create efficient, scalable, and reliable infrastructures.
            </p>
            
            <p className="text-gray-600 mb-8">
              With a background in both development and system administration, I create seamless CI/CD pipelines, implement infrastructure as code, and design monitoring solutions that provide real business value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatedSection animation="slide-in-bottom" delay={400} className="glass-panel rounded-xl p-6">
                <Code className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-1">Development</h4>
                <p className="text-sm text-gray-600">
                  React, Symfony, Laravel, and modern frontend/backend technologies
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-bottom" delay={500} className="glass-panel rounded-xl p-6">
                <Server className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-1">Infrastructure</h4>
                <p className="text-sm text-gray-600">
                  AWS, Nginx, HAProxy, Keepalived, containerization
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-bottom" delay={600} className="glass-panel rounded-xl p-6">
                <Cloud className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-1">DevOps</h4>
                <p className="text-sm text-gray-600">
                  CI/CD pipelines, monitoring with Grafana and Prometheus
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-bottom" delay={700} className="glass-panel rounded-xl p-6">
                <Image className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-1">Design</h4>
                <p className="text-sm text-gray-600">
                  Adobe suite: InDesign, Photoshop, Illustrator
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
