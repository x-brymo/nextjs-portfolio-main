"use client";

import { HeadingDivider, Loader } from "components";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ProjectCard from "../../components/ProjectModal";
import Error from "../error";
import { Filter } from "./component/Filter";
import { MyProjects } from "./my-data";
import Projects from "./projects"; // Corrected import statement

export default function Page() {
    const [category, setCategory] = useState(undefined);
    const [selectedProject, setSelectedProject] = useState(null); // State for selected project

    const onClick = (catName) => setCategory(catName);

    const handleProjectClick = (project) => setSelectedProject(project); // Handle project click

    const filteredProjects = category
        ? MyProjects.filter((project) => project.category === category)
        : MyProjects;

    return (
        <div className="container-md">
            <section id="projects" className="section">
                <HeadingDivider title="Relevant projects" />

                <Filter onClick={onClick} />

                <Suspense
                    fallback={
                        <div className="flex-center">
                            <Loader />
                        </div>
                    }
                >
                    <ErrorBoundary FallbackComponent={Error}>
                        {filteredProjects.length === 0 ? (
                            // Empty state
                            <div className="flex-center">
                                <h3 className="text-2xl">No projects found in {category} category</h3>
                            </div>
                        ) : (
                            <Projects projects={filteredProjects} onProjectClick={handleProjectClick} />
                        )}
                    </ErrorBoundary>
                </Suspense>
            </section>
			

            {selectedProject && (
                <ProjectCard project={selectedProject} onClose={() => setSelectedProject(null)} />
				
            )}
        </div>
    );
}
