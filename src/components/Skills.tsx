import React from "react";
import AnimatedSection from "./AnimatedSection";
import AnimatedSkillBar from "./AnimatedSkillBar";
// npm install react-icons lucide-react
import {
  SiReact,
  SiSymfony,
  SiLaravel,
  SiJavascript,
  SiPhp,
  SiAmazon,
  SiNginx,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiElastic,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";

const Skills = () => {
  const devSkills = [
    { icon: <SiReact />, name: "React", level: 80 },
    { icon: <SiSymfony />, name: "Symfony", level: 75 },
    { icon: <SiLaravel />, name: "Laravel", level: 70 },
    { icon: <SiJavascript />, name: "JavaScript/TypeScript", level: 72 },
  ];

  const opsSkills = [
    { icon: <SiAmazon />, name: "AWS", level: 60 },
    { icon: <SiNginx />, name: "Nginx/HAProxy", level: 85 },
    { icon: <SiDocker />, name: "Docker/Kubernetes", level: 80 },
    { icon: <SiTerraform />, name: "Terraform", level: 55 },
    { icon: <SiJenkins />, name: "CI/CD Pipelines", level: 85 },
  ];

  const monitoringSkills = [
    { icon: <SiPrometheus />, name: "Prometheus", level: 85 },
    { icon: <SiGrafana />, name: "Grafana", level: 80 },
    { icon: <SiElastic />, name: "ELK Stack", level: 75 },
    { icon: null, name: "Performance Tuning", level: 80 }, // Pas d'icône disponible
    { icon: null, name: "Log Management", level: 85 }, // Pas d'icône disponible
  ];

  const designSkills = [
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop", level: 75 },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator", level: 70 },
    { icon: <SiAdobexd />, name: "Adobe InDesign", level: 80 },
    { icon: null, name: "UI/UX Basics", level: 65 }, // Pas d'icône disponible
    { icon: null, name: "Technical Documentation", level: 85 }, // Pas d'icône disponible
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="section-container">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              A comprehensive set of technical skills that I've acquired and refined throughout my professional journey.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-in-left" delay={200} className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-primary">Development</h3>
            <div>
              {devSkills.map((skill, index) => (
                <AnimatedSkillBar
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" delay={200} className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-primary">Infrastructure & Cloud</h3>
            <div>
              {opsSkills.map((skill, index) => (
                <AnimatedSkillBar
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-left" delay={300} className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-primary">Monitoring & Optimization</h3>
            <div>
              {monitoringSkills.map((skill, index) => (
                <AnimatedSkillBar
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" delay={300} className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-primary">Design & Documentation</h3>
            <div>
              {designSkills.map((skill, index) => (
                <AnimatedSkillBar
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;