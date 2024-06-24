import { ProjectsSection } from "../components/projectsSection";
import { projectsInformation } from "../constants/projectsInfo";

export const renderProjects = (isEn) => {
    const allProjects = [];

    for (const project of Object.values(projectsInformation)) {
        allProjects.push(
            <ProjectsSection
                imgClass={project.class}
                gitHub={project.gitHubLink}
                description={isEn ? project.description.en : project.description.es}
                prolanguage={project.proLan? project.proLan: ''}
                key={project.key}
            >
                {isEn ? project.name.en : project.name.es}
            </ProjectsSection>
        );
    }

    return allProjects;
};