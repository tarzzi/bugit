import Link from 'next/link'
import projectStyles from '../styles/Projects.module.scss'

const ProjectItem = ({project}) => {
    return (
        <Link href={`/project/${project.id}`}>
            <a className={projectStyles.card}>
                <h3>{project.name} &rarr;</h3>
                <p>{project.description}</p>
            </a>
        </Link>
    );
}

export default ProjectItem;