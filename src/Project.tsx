
export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  screenshot: string;
  liveUrl: string;
  repoUrl?: string;
  type: "real" | "poc";
}

interface ProjectProps {
  project: ProjectData;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function Project({ project, isExpanded, onToggle }: ProjectProps) {
  const isReal = project.type === "real";

  return (
    <div
      onClick={onToggle}
      className={`
        relative overflow-hidden rounded-2xl 
        bg-white dark:bg-neutral-900 
        border border-neutral-200 dark:border-neutral-800
        transition-all duration-300 ease-in-out cursor-pointer 
        hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700
        ${isExpanded ? "col-span-1 md:col-span-2 row-span-2" : "col-span-1"}
      `}
    >
      <div className="p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              {isReal && (
                <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium border border-green-200 dark:border-green-800">
                  Real software in production
                </span>
              )}
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Collapsed Content */}
        {!isExpanded && (
          <div className="mt-2">
            <span className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium underline decoration-transparent hover:decoration-current transition-all">
              Visit website &rarr;
            </span>
          </div>
        )}

        {/* Expanded Content */}
        <div
          className={`
            grid transition-all duration-300 ease-in-out overflow-hidden
            ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}
          `}
        >
          <div className="min-h-0 flex flex-col md:flex-row gap-6">
            {/* Screenshot */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 aspect-video">
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="flex flex-col gap-3 mt-6 items-start">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium underline decoration-blue-600/30 dark:decoration-blue-400/30 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-all"
                >
                  {isReal ? "Presentation (by my product leader)" : "Visit Website"}
                </a>
                
                {!isReal && project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 font-medium underline decoration-neutral-600/30 dark:decoration-neutral-400/30 hover:decoration-neutral-600 dark:hover:decoration-neutral-400 transition-all"
                  >
                    View Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
