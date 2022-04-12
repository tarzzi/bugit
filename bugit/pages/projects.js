import {server} from '../config';
import ProjectList from '../components/ProjectList'
import Meta from '../components/Meta'

const projects = ({ projects }) => {
    return(
        <div>
            <Meta title='Projects' />
            <h1>Projects</h1>
            <ProjectList projects={projects} />
        </div>
    )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }

}

export default projects

/* await fetch( ${server}/api/projects ) */