
import React from "react";
import { FadeIn } from "../animations/FadeIn";

const About: React.FC = () => {
  const experiences = [
    "The New York Times",
    "US Government Agencies (GSA, FDA, ATF)",
    "New York State & City Agencies",
  ];

  const projects = [
    "Compliance Tracking Software",
    "Deadline Reminders",
    "Job Filing & Violation Status Tracking",
    "Air Quality & Waste Management",
    "Environmental Assessment & Permit Management",
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">About RKEES</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="section-subtitle">
            A full-service environmental engineering and IT solutions firm delivering world-class services.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <FadeIn direction="left">
            <div className="glass-card rounded-xl p-8 py-12">
              <h3 className="text-2xl font-bold mb-4">Our Founder</h3>
              <div className="mb-6">
                <p className="text-lg font-semibold text-primary">
                  Mr. Rengasamy Kasinathan, B.E., M.S (USA), P.E., DEE, RPIH
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                With decades of industry experience, our founder has established RKEES as a leader in environmental engineering and software solutions. His vision drives our commitment to excellence and innovation.
              </p>
              <h4 className="text-xl font-semibold mb-3">Extensive Experience With:</h4>
              <ul className="space-y-2">
                {experiences.map((exp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Major Projects</h3>
              <p className="text-gray-600 mb-6">
                Our team has successfully developed and implemented innovative solutions across a wide range of industries, with particular expertise in environmental compliance and management systems.
              </p>
              <ul className="space-y-4">
                {projects.map((project, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
