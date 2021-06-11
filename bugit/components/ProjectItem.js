import Link from 'next/link'
import projectStyles from '../styles/Projects.module.scss'

const ProjectItem = ({project}) => {
    return (
        <Link href={`/project/${project.id}`}>
            <a className={projectStyles.card}>
                <h3>{project.title} &rarr;</h3>
                <p>{project.body}</p>
            </a>
        </Link>
    );
}

export default ProjectItem;