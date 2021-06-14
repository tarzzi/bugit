import {server} from '../../../config';
import Link from 'next/link'
import Meta from '../../../components/Meta'
import projStyles from '../../../styles/Projects.module.scss'

const project = ({project}) => {

    return (
        <>
          <Meta title={project.title}/>
          <div className={projStyles.content}>
            <h1>{project.title}</h1>
            <p>{project.body}</p>
          </div>
          <br />
          <Link href='/projects'>Go back</Link>
        </>
    )
}


export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.id}`)

  const project = await res.json()

  return {
    props: {
      project,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects`)

  const projects = await res.json()

  const ids = projects.map((project) => project.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default project