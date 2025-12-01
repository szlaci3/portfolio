import ProjectList from "./ProjectList";

export default function LandingPage() {
  return (
    <main className="w-full mx-auto max-w-3xl px-6 py-12 flex flex-col gap-20">
      
      {/* HERO */}
      <section className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Hi, I’m Laszlo.
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          Frontend developer focused on fast, reliable, and thoughtfully crafted user interfaces.
        </p>
      </section>

      {/* PROJECTS */}
      <ProjectList />

      {/* ABOUT */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">About me</h2>
        <p className="text-neutral-500 dark:text-neutral-300 leading-relaxed">
          I enjoy building interfaces that feel simple and natural to use.  
          I’m especially interested in React-based applications, whether it’s interactive
          dashboards, internal tools, or responsive mobile UIs, that handle real-world
          data and bring intuitive and visually appealing technology into the lives of users.
        </p>
        <p className="text-neutral-500 dark:text-neutral-300 leading-relaxed">
          My background is originally in medical studies, which gave me discipline,
          curiosity, and a long-term interest in health tech. Today, I combine that mindset
          with strong frontend fundamentals to create clear and maintainable solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <p className="text-neutral-500 dark:text-neutral-300 leading-relaxed">
          My focus is modern frontend development with React. I enjoy working with
          component-driven architectures, robust state management, and well-organized codebases.
        </p>
        <ul className="flex flex-wrap gap-2 mt-2">
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">React</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">TypeScript</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">Redux</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">Zustand</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">Material UI</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">Tailwind</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">Ant Design</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">REST API</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">GraphQL</li>
          <li className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-sm">Responsive Design</li>
        </ul>
      </section>

      {/* CONTACT / AVAILABILITY */}
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Availability</h2>
        <p className="text-neutral-500 dark:text-neutral-300 leading-relaxed">
          I’m currently open to frontend roles, ideally React-focused.  
          Feel free to reach out, I’m always happy to connect.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-neutral-500 text-sm pt-10 border-t border-neutral-800">
        © {new Date().getFullYear()} Laszlo Szalai — Built with React & Tailwind
      </footer>

    </main>
  );
}
