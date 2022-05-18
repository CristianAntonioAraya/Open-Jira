import { ReactNode, useContext, useEffect, useState } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';

import { Navbar, SideBar } from '../ui';
import styles from '../../styles/components/layout.module.scss';
import { UIContext } from '../../context/ui';

type Props = {
  children: ReactNode,
  title?: string
}

const Layout: NextPage<Props> = ( { children, title = "OpenJira" } ) => {

    const { sidemenuOpen, isAddNew } = useContext( UIContext )

    const [toggleOpacity, setToggleOpacity] = useState(false)

    useEffect(() => {
      if( sidemenuOpen || isAddNew ){ 
        setToggleOpacity(true)
      }
      if( !sidemenuOpen && !isAddNew){
        setToggleOpacity(false)
      }
    }, [sidemenuOpen, isAddNew])
    

    const handleOnClick = () => {
    
    }


    return (
      <>
          <Head>
              <title>{ title }</title>
          </Head>
          <ThemeProvider>
              <Navbar/>
              <SideBar/>
              <main className={ styles.container}>
                <div className={`${ toggleOpacity ? styles.opacity : ''}`} onClick={ handleOnClick }/>
                  { children }
              </main>
          </ThemeProvider>
      </>
    )
}

export default Layout