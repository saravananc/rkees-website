
import React from "react";
import { FadeIn } from "../animations/FadeIn";
import ContactForm from "../ui/ContactForm";

interface OfficeProps {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  delay?: number;
}

const OfficeLocation: React.FC<OfficeProps> = ({
  title,
  address,
  phone,
  email,
  hours,
  delay = 0,
}) => {
  return (
    <FadeIn delay={delay}>
      <div className="glass-card rounded-xl p-6 hover:shadow-md transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-3 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-gray-600">{address}</p>
          </div>
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-3 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p className="text-gray-600">{phone}</p>
          </div>
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-3 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-600">{email}</p>
          </div>
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-3 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-600">{hours}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Contact: React.FC = () => {
  const offices = [
    {
      title: "Headquarters (HQ) - USA",
      address: "1106 Main Street, Peekskill, NY 10566",
      phone: "+1 (914) 788-4165",
      email: "michelle@eespc.com",
      hours: "8:30 AM - 5:00 PM (EST)",
    },
    {
      title: "India Office",
      address: "1408, VBS Rajan Street, Kanathur, Kanchipuram - 603 112",
      phone: "+91 2744 4378",
      email: "lakshmi@rkees.com",
      hours: "4:00 PM - 2:00 AM (IST)",
    },
    {
      title: "New York City Office",
      address: "509 E 88th St, Unit 1C, New York, NY 10128",
      phone: "+1 (914) 788-4165",
      email: "michelle@eespc.com",
      hours: "8:30 AM - 5:00 PM (EST)",
    },
  ];

  return (
    <section id="contact" className="py-10 bg-gray-50">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Get in Touch</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="section-subtitle">
            Have questions or need more information? Contact us today.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <FadeIn direction="left">
              <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
            </FadeIn>
            {offices.map((office, index) => (
              <OfficeLocation
                key={index}
                title={office.title}
                address={office.address}
                phone={office.phone}
                email={office.email}
                hours={office.hours}
                delay={index * 100}
              />
            ))}
          </div>

          <FadeIn direction="right" delay={200}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
