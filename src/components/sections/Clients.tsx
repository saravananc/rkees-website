
import React from "react";
import { FadeIn } from "../animations/FadeIn";

const Clients: React.FC = () => {
  const clients = [
    "Environmental Energy Solutions",
    "Kings Development International"
  ];

  return (
    <section id="clients" className="bg-gray-50">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Our Clients</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="section-subtitle">
            Trusted by leading hospitals and organizations
          </p>
        </FadeIn>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">
            {clients.map((client, index) => (
              <FadeIn key={index} delay={index * 50} className="flex items-center justify-center">
                <div className="glass-card p-6 rounded-xl h-full w-full flex items-center justify-center transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                  <p className="text-center font-medium text-gray-800">{client}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Clients;
