import { ReactNode, useContext } from 'react';

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

  const { sidemenuOpen } = useContext( UIContext )

  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>
        <ThemeProvider>
            <Navbar/>
            <SideBar/>
            <main 
            className={ `${sidemenuOpen ? styles.opacity : ''} ${ styles.container}` }
            >
                { children }
            </main>
        </ThemeProvider>
    </>
  )
}

export default Layout