"use client";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import { FaEye, FaGithub } from "react-icons/fa";

const Work = () => {
  // Projects Data
  const projects = [
    {
      title: "Lesoll - Real Estate Market Place",
      link: "https://lesoll.com",
      imageSrc: "/work/lesoll.png",
      technologies: ["React", "Nextjs", "Tailwind", "Redux toolkit"],
      description: [
        "Built with Next.js & Tailwind CSS",
        "Responsive UI for property listings and marketing pages",
        "Developed a custom admin dashboard with traffic & analytics overview",
        "Integrated backend APIs for dynamic data rendering",
        "Deployed on AWS for scalability and performance",
        "Implemented SEO best practices for improved visibility",
        "Continuously optimized performance across the platform",
      ],
    },
    {
      title: "Dorymart",
      link: "https://dory-mart.vercel.app",
      github: "https://github.com/AbdelrahmanMostafa0/dory-mart",
      imageSrc: "/work/dory.png",
      technologies: ["React", "Nextjs", "Tailwind", "GSAP", "Redux toolkit"],
      description: [
        "Concept: Fun, vibrant e-commerce platform inspired by Dory from Finding Nemo for an engaging shopping experience",
        "Product Listings: Browse products with detailed descriptions, images, and pricing",
        "Search & Filtering: Easy-to-use search functionality and product filters for quick browsing",
        "Shopping Cart: Manage products in the cart before checkout with seamless transitions",
        "State Management: Uses Redux for efficient management of application state",
        "Animations: Enhanced user experience with GSAP for playful and engaging animations",
        "Performance & SEO: Server-side rendering (SSR) ensures fast load times and improved search engine ranking",
        "Persistent Cart: Cart data persists in local storage, so users don’t lose selections upon page refresh",
      ],
    },
    {
      title: "Squash It",
      link: "https://image-compressor-gules.vercel.app/ar",
      github: "https://github.com/AbdelrahmanMostafa0/image-compressor",
      imageSrc: "/work/squash-it-light.png",
      technologies: [
        "React",
        "Nextjs",
        "Tailwind",
        "I18n",
        "Framer Motion",
        "Redux toolkit",
      ],
      description: [
        "Overview: A lightweight web app that compresses images directly in the browser using the browser-image-compression library for efficient optimization",
        "Image Compression: Compresses images in the browser without any server-side processing",
        "Customizable Settings: Adjust image quality percentage, define max size, and choose output format (JPG, PNG, WEBP)",
        "Drag and Drop Support: Easily add images by dragging and dropping them into the app",
        "Dark and Light Mode: Switch between dark and light themes for improved usability and aesthetics",
        "Globalization: Support for Arabic (ar) and English (en) languages, with easy toggling",
      ],
    },
  ];

  return (
    <div className="space-y-4 md:pb-2 pb-10">
      <h3 className="text-2xl font-bold text-black dark:text-white">
        PROJECTS
      </h3>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4 dark:text-white">
            <a
              target="_blank"
              href={project.link}
              className="relative group flex items-center justify-center rounded-lg overflow-hidden md:w-[98%] border"
            >
              <div className="absolute inset-0 bg-gradient-to-r z-10  bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <IoEye className="absolute z-10 text-4xl  opacity-0 group-hover:opacity-100 duration-300 text-white/70" />
              <Image
                src={project.imageSrc}
                width={500}
                height={500}
                alt={project.title}
                className="w-full"
              />
            </a>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex flex-wrap gap-3">
                {project?.github && (
                  <a
                    target="_blank"
                    href={project.github}
                    className="flex items-center gap-1 p-2 border-b dark:border-white/20 border-b-black/80"
                  >
                    <FaGithub className="text-lg" />
                    Github
                  </a>
                )}
                {project.link && (
                  <a
                    target="_blank"
                    href={project.link}
                    className="flex items-center gap-1 p-2 border-b dark:border-white/20 border-b-black/80"
                  >
                    <IoEye className="text-2xl" />
                    Live
                  </a>
                )}
              </div>
              {/* <button>
                <FaGithub className="text-lg" />
              </button>
              <button>
                <FaEye className="text-2xl" />
              </button> */}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-950 dark:text-white te px-6 py-2 rounded-xl border drop-shadow-md md:text-base text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
            <ul
              style={{
                paddingLeft: "1.2rem",
                textIndent: "-1.2rem",
              }}
              className="list-disc list-inside space-y-2 text-lg font-medium text-gray-700 dark:text-white/80"
            >
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
