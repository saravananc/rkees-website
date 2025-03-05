
import React from "react";
import { FadeIn } from "../animations/FadeIn";

interface LeaderProps {
  name: string;
  title: string;
  credentials: string;
  delay?: number;
}

const LeaderCard: React.FC<LeaderProps> = ({ name, title, credentials, delay = 0 }) => {
  return (
    <FadeIn delay={delay}>
      <div className="glass-card rounded-xl p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-primary font-medium mt-1">{title}</p>
          <p className="text-gray-500 text-sm mt-2">{credentials}</p>
        </div>
      </div>
    </FadeIn>
  );
};

const Leadership: React.FC = () => {
  const leaders = [
    // {
    //   name: "Rengasamy Kasinathan",
    //   title: "Founder",
    //   credentials: "B.E., M.S (USA), P.E., DEE, RPIH",
    // },
    {
      name: "Deivasigamani C.",
      title: "Legal Advisor",
      credentials: "M.A., B.L., Advocate",
    },
    {
      name: "Dr. Sumathi Kasinathan",
      title: "Health Advisor",
      credentials: "M.D. (USA)",
    },
    {
      name: "Lakshmi Narayanan D.",
      title: "Director",
      credentials: "B. Tech (Operations)",
    },
  ];

  return (
    <section id="leadership" >
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Leadership Team</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="section-subtitle">
            Meet the experts who drive our vision and success
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 justify-center">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={index}
              name={leader.name}
              title={leader.title}
              credentials={leader.credentials}
              delay={index * 100}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Leadership;
