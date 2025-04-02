
import React from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  const projects = [
    {
      title: "Cloud Migration Project",
      description: "Led the migration of a monolithic application to a microservices architecture on AWS. Implemented auto-scaling, load balancing with HAProxy, and high availability with Keepalived.",
      technologies: ["AWS", "Docker", "HAProxy", "Keepalived", "Terraform"],
      image: "cloud.png",
    },
    {
      title: "E-commerce Platform",
      description: "Designed and developed a scalable e-commerce platform using Laravel and React. Set up CI/CD pipelines for automated testing and deployment with zero-downtime updates.",
      technologies: ["Laravel", "React", "MySQL", "Redis", "GitHub Actions"],
      image: "e-commerce.png",
    },
    {
      title: "Monitoring Dashboard",
      description: "Created a comprehensive monitoring solution using Prometheus and Grafana. Implemented custom metrics collection and alerting for critical system components.",
      technologies: ["Prometheus", "Grafana", "Alertmanager", "Node Exporter"],
      image: "monitor.png",
    },
    {
      title: "Authentication System",
      description: "Implemented a secure authentication service using Keycloak. Integrated with multiple applications and set up single sign-on capabilities.",
      technologies: ["Keycloak", "OAuth 2.0", "OIDC", "Symfony", "React"],
      image: "auth.png",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={200 + index * 100}
              className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
