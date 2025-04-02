
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "slide-in-bottom";
  delay?: number;
  className?: string;
}

const AnimatedSection = ({
  children,
  animation = "fade-in",
  delay = 0,
  className,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";

    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "slide-in-left":
        return "animate-slide-in-left";
      case "slide-in-right":
        return "animate-slide-in-right";
      case "slide-in-bottom":
        return "animate-slide-in-bottom";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-700",
        getAnimationClass(),
        !isVisible && {
          "translate-y-10": animation === "fade-in" || animation === "slide-in-bottom",
          "-translate-x-20": animation === "slide-in-left",
          "translate-x-20": animation === "slide-in-right",
        },
        isVisible && "opacity-100 translate-y-0 translate-x-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
