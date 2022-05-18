import { FC, useContext } from 'react';

import { useTheme } from 'next-themes';

import { UIContext } from '../../../context/ui';

import styles from '../../../styles/components/sidebar.module.scss';
import AddNew from '../../../public/icons/addNew.svg';
import Arrow from '../../../public/icons/arrow.svg';
import Theme from '../../../public/icons/theme.svg';



export const SideBar: FC = () => {

  
  const { sidemenuOpen, openSideMenu, closeSideMenu, openAddNew, closeAddNew, isAddNew } = useContext( UIContext )
  
  const { theme, setTheme } = useTheme();

  const handleAddNew = () => {
    isAddNew ? closeAddNew() : openAddNew()
  }

  const handleToggle = () => {
    sidemenuOpen ? closeSideMenu() : openSideMenu()
  }
  const handleSwitchTheme = () => {
    setTheme( theme === 'light' ? 'dark' : 'light')
  }


  return (

    <div className={ `${sidemenuOpen ? styles.container_open :  styles.container_close} ${styles.container}` }>
        <Arrow onClick={ handleToggle }  className={ `${sidemenuOpen ? styles.arrow_open :  styles.arrow_close} ${styles.arrow}` }/>
        <div className={ styles.content}>

          <div className={styles.icon_container_add} onClick={handleAddNew}>
            <AddNew className={ styles.addNew }/>
            <p className={`${sidemenuOpen ? styles.show_text :  styles.hidde_text } ${ styles.text }` }>Add New</p>
          </div>

          <div className={ styles.icon_container_theme } onClick={ handleSwitchTheme }>
            <Theme className={ styles.theme }/>
            <p className={`${sidemenuOpen ? styles.show_text :  styles.hidde_text } ${ styles.text }` }>Toggle Mode</p>
          </div>

        </div>
    </div>
  )
}
