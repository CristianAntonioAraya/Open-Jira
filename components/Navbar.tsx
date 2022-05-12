import { FC} from 'react'

import { useTheme } from 'next-themes'

import styles from '../styles/components/navbar.module.scss'
import Theme from '../public/icons/theme.svg'


const Navbar: FC = ( ) => {

    const { theme, setTheme } = useTheme();

    const handleSwitchTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light')
    }

    return (
        <nav className={ styles.container }>
            <h1 className={styles.title }>O-jira</h1>
            <button onClick={ handleSwitchTheme } className={ styles.toggle__button }> 
                <Theme className={ theme === 'light' ? styles.icon_light : styles.icon_dark}/>
            </button>
        </nav>
    )
}


export default Navbar