import ProjectItem from "./ProjectItem"
import projectStyles from '../styles/Projects.module.scss'

const ProjectList = ({ projects }) => {
    return (
        <div className={projectStyles.grid}>
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project}/>
            ))}
        </div>
    )
}

export default ProjectList;