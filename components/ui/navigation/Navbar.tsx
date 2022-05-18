import { FC} from 'react';

import styles from '../../../styles/components/navbar.module.scss';


export const Navbar: FC = ( ) => {

    return (
        <nav className={ styles.container }>
            <h1 className={styles.title }>O-JIRA</h1>
        </nav>
    )
}
