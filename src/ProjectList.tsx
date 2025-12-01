import { useState } from "react";
import Project, { type ProjectData } from "./Project";

const PROJECTS: ProjectData[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    shortDescription: "A comprehensive dashboard for managing online stores.",
    longDescription: "This project is a full-featured admin dashboard for e-commerce platforms. It allows merchants to manage products, orders, and customers. Built with React, Redux Toolkit, and Tailwind CSS, it features real-time data visualization using Recharts and a fully responsive design.",
    screenshot: "",
    liveUrl: "#",
    repoUrl: "#",
    type: "real",
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    shortDescription: "A comprehensive dashboard for managing online stores.",
    longDescription: "This project is a full-featured admin dashboard for e-commerce platforms. It allows merchants to manage products, orders, and customers.",
    screenshot: "",
    liveUrl: "#",
    repoUrl: "#",
    type: "poc",
  },
  {
    id: "3",
    title: "E-Commerce Dashboard",
    shortDescription: "A comprehensive dashboard for managing online stores.",
    longDescription: "This project is a full-featured admin dashboard for e-commerce platforms. It allows merchants to manage products, orders, and customers. Built with React, Redux Toolkit, and Tailwind CSS, it features real-time data visualization using Recharts and a fully responsive design.",
    screenshot: "",
    liveUrl: "#",
    repoUrl: "#",
    type: "poc",
  },
  {
    id: "4",
    title: "E-Commerce Dashboard",
    shortDescription: "A comprehensive dashboard for managing online stores.",
    longDescription: "This project is a full-featured admin dashboard for e-commerce platforms. It allows merchants to manage products, orders, and customers. Built with React, Redux Toolkit, and Tailwind CSS, it features real-time data visualization using Recharts and a fully responsive design.",
    screenshot: "",
    liveUrl: "#",
    repoUrl: "#",
    type: "poc",
  },
];

export default function ProjectList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
        {PROJECTS.map((project) => (
          <Project
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() => handleToggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
