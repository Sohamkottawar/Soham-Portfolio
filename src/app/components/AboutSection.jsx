"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Frameworks & Technologies:</strong> HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js,Node.js</li>
        <li><strong>Databases:</strong> MySQL,PostgreSQL </li>
        <li><strong>Developer Tools:</strong> Git, GitHub</li>
        <li><strong>Soft Skills:</strong> Event Management, Leadership, Teamwork</li>
        <li><strong>Design & Software Tools:</strong> Adobe Photoshop, Adobe Illustrator, Canva, Figma, Autodesk Fusion 360</li>
        
      </ul>
    ),
},
{
  title: "Education",
  id: "education",
  content: (
    <ul className="list-disc pl-2">
        <li>Gyan Mata Vidya Vihar</li>
        <li>Pune Institute Of Computer Technology </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Postman Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am Soham Kottawar, a third-year Information Technology student at PICT, Pune, with a strong background in full-stack web development using Next.js, PostgreSQL, and Node.js. I have worked on impactful projects like the PICTOFEST Platform and PASC Alumni Portal.

            As the Public Relations Officer of PICT Robotics, I’ve enhanced club visibility through strategic outreach and sponsorship management. Additionally, I’ve successfully organized events like the "Web N App" hackathon at Pulzion as an Event Lead for the PICT ACM Student Chapter. Skilled in C++, DSA, and tools like Figma, I am passionate about leveraging technology to create user-focused solutions.
            </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;