
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSkillBarProps {
  icon?: React.ReactNode;
  name: string;
  level: number; // 0-100
  className?: string;
  delay?: number;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({
  icon,
  name,
  level,
  className,
  delay = 0,
}: AnimatedSkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (skillRef.current) {
            observer.unobserve(skillRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = skillRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="mb-4 relative group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {icon && <div className="text-2xl text-primary">{icon}</div>}
          <span className="text-sm font-medium text-gray-700">{name}</span>
        </div>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000"
          style={{ width: `${level}%`, animationDelay: `${delay}ms` }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
