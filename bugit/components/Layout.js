import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return(
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header></Header>
                    {children}
                </main>
            </div>
        </>
    )
}
export default Layout