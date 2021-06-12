import styles from '../styles/Layout.module.scss'
import Meta from '../components/Meta'

export default function Home() {
  return (
      <div>
        <Meta />
        <h1>Bugit </h1><span>Track ur bugs its fun I promis</span>
        <h1>Hello [user.username]</h1>
        <h3>You have [user.issues.count] to be resolved</h3>
      </div>
  )
}
