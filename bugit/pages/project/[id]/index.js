import {server} from '../../../config';
import Link from 'next/link'
import Meta from '../../../components/Meta'
import projStyles from '../../../styles/Projects.module.scss'

const project = ({project}) => {

    return (
        <>
          <Meta title={project.name}/>
          <div className={projStyles.content}>
            <h1>{project.name}</h1>
            <p>{project.body}</p>
          </div>
          <br />
          <Link href='/projects'>Go back</Link>
        </>
    )
}


export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${context.params.id}`)

  const project = await res.json()

  return {
    props: {
      project,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)

  const projects = await res.json()

  const ids = projects.map((project) => project.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default project