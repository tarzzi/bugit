import ProjectList from '../components/ProjectList'
const projects = ({projects}) => {
    return(
        <div>
            <h1>Projects</h1>
            <ProjectList projects={projects} />
        </div>
    )
}
export default projects


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const projects = await res.json()

    return {
        props: {
            projects
        }
    }
}