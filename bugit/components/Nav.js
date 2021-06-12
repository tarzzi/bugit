import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'

const Nav = () => {
    return(
        <nav className={navStyles.nav}>
            <ul>
                <li className={navStyles.logo}>
                    🐛 Bugit
                </li>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/settings'>Settings</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Nav