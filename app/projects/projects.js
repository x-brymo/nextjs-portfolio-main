import { Card, CardFooter, CardHeader, CardTitle } from "../../components/Card"; // New import
import { ProjectCard } from "../../components/ProjectModal"; // Updated import

const Projects = ({ projects }) => {
    const onProjectClick = (project) => {
        alert(`Project: ${project.title}`);
    };

    return (
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {projects.map((project) => (
                <div key={project.id} onClick={() => onProjectClick(project)} className="relative">
                    <Card className="bg-transparent shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <ProjectCard
                            title={project.title}
                            description={project.desc}
                            tags={project.tools || []} // Ensure tools is always an array
                            link={project.link}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                        />
                        <CardFooter>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tools.map((tool, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Projects;