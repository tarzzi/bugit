import Link from 'next/link'
import { useRouter } from 'next/router'

const project = ({project}) => {

    return (
        <>
        <h1>{project.title}</h1>
        <p>{project.body}</p>
        <br />
        <Link href='/projects'>Go back</Link>
    </>
    )
}
 export const getStaticProps = async (context) => {
   const res = await fetch(
     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
   )

   const project = await res.json()

   return {
     props: {
       project,
     },
   }
 }

 export const getStaticPaths = async () => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

   const projects = await res.json()

   const ids = projects.map((project) => project.id)
   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

   return {
     paths,
     fallback: false,
   }
 }

export default project