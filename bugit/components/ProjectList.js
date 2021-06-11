import ProjectItem from "./ProjectItem"
import projectStyles from '../styles/Projects.module.scss'

const ProjectList = ({projects}) => {
    return (
        <div className={projectStyles.grid}>
            {projects.map((project) => (
                <ProjectItem project={project}/>
            ))}
        </div>
    )
}

export default ProjectList;