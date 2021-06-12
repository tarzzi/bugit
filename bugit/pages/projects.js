import {server} from '../config';
import ProjectList from '../components/ProjectList'
import Meta from '../components/Meta'

const projects = ({projects}) => {
    return(
        <div>
            <Meta title='Projects' />
            <h1>Projects</h1>
            <ProjectList projects={projects} />
        </div>
    )
}
export default projects


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json()

    return {
        props: {
            projects
        }
    }
}