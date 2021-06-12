import Link from 'next/link'
import settingsStyles from '../styles/Settings.module.scss'

const settings = () => {
    return(
        <div>
            <h1>Settings</h1>
            <ul className={settingsStyles.list}>
                <li>
                    <Link href='/resetpwd'>
                        🔐 Change password
                    </Link></li>
                <li>
                    <Link href='/more-settings'>
                        ⚙️More settings
                    </Link></li>
                <li>
                    <Link href='/user'>
                        💡 User settings
                    </Link></li>
            </ul>
        </div>
    )
}
export default settings